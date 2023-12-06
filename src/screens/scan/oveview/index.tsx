import {isAndroid, showToast} from '@utils';
import {useDispatch, useSelector} from 'react-redux';
import {scanBorder, scanner, thunder} from '@assets';
import {CustomLoader, Text, Wrapper, Camera, Success} from '@components';
import {navigate, scan_Order, scan_receipt} from '@services';
import React, {useEffect, useState} from 'react';
import {format as prettyFormat} from 'pretty-format';
import {
  BLACK,
  GST,
  RF,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  typography,
  WHITE,
} from '@theme';
import axios from 'axios';
import RNFetchBlob from 'rn-fetch-blob';
import {setCaptureFlag, setCard_Number} from '@redux';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {StyleSheet, Image, View, Pressable} from 'react-native';

const Scan = () => {
  const dispatch: any = useDispatch();
  const [mode, setMode] = useState<any>('receipt');
  const [image, setImage] = useState<any>(null);
  const [qrCode, setQrCode] = useState<any>();
  const [loading, setloading] = useState(false);
  const [reciept_done, setReciept_done] = useState(false);
  const [flashMode, setFlashMode] = useState(false);
  const [barcodeReaded, setBarcodeReaded] = useState(true);
  const {user, authToken, captureFlag} = useSelector(
    (state: any) => state.root.user,
  );
  const maskRowHeight = Math.round(SCREEN_HEIGHT / 20);
  const maskColWidth = SCREEN_WIDTH;
  const [scan_response, setScan_response] = useState<any>();

  // React.useEffect(() => {
  //   (async () => {
  //     const status = await Camera.requestCameraPermission();
  //     setHasPermission(status === 'authorized');
  //   })();
  // }, []);

  const onSuccess = (e: any) => {
    // setBarcodeReaded(true);
    // setloading(true);
    // scan_Order(e.data)
    //   .then((res: any) => {
    //     //   Linking.openURL(e.data)
    //     //     .then(() => {
    //     //       setBarcodeReaded(true);
    //     //     })
    //     //     .catch((err: any) => setBarcodeReaded(true))
    //     //     .finally(() => setBarcodeReaded(true));
    //     showToast('Success', res?.data?.message, true);
    //     navigate('Scan_Verification');
    //   })
    //   .catch((err: any) => {
    //     console.log('error......', err.response.data);
    //     showToast('Error', err.response.data, false);
    //   })
    //   .finally(() => setloading(false));
  };
  useEffect(() => {
    if (image) {
      // upload_receipt(image);
      scan_reciept();
    }
  }, [image]);
  const scan_reciept = () => {
    setloading(true);
    let params = {
      base64: 'data:image/jpg;base64,' + image,
    };
    scan_receipt(params)
      .then((res: any) => {
        if (res.data.message === 'Invalid card number') {
          dispatch(setCard_Number('add_card'));
        }
        if (res.data.status === true) {
          showToast('Success', res?.data?.message, true);
          setReciept_done(true);
        } else {
          showToast('Error', res?.data?.message, false);
        }
      })
      .catch((err: any) => {
        console.log('scan....', err.message);
        // showToast('Error', err.response, false);
      })
      .finally(() => setloading(false));
  };
  const upload_receipt = (img: any) => {
    setloading(true);
    let Url = 'http://3.97.132.230:4011/test-receipt';
    const formData = new FormData();

    formData.append('file', {
      uri: img,
      type: 'image/jpg',
      name: 'image.jpg',
    });

    axios
      .post(Url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(res => {
        let result = JSON.stringify(res.data.response);
        setScan_response(result);
        navigate('ScanResult', {data: scan_response});
      })
      .catch(err => {})
      .finally(() => {
        setloading(false);
        dispatch(setCaptureFlag(false));
      });
  };
  const handleMode = (type: any) => {
    setMode(type);
  };
  const onPress_Home = () => {
    setReciept_done(false);
    navigate('Home');
  };

  return (
    <Wrapper isTransparent>
      {reciept_done ? (
        <>
          <Success scan onPress={onPress_Home} heading={'QR Code Success!'} />
        </>
      ) : (
        <>
          {mode === 'qr' ? (
            <QRCodeScanner
              reactivate={true}
              showMarker={true}
              onRead={onSuccess}
              cameraStyle={GST.h100}
              reactivateTimeout={5000}
              markerStyle={styles.marker}
              checkAndroid6Permissions={true}
              flashMode={flashMode ? 'torch' : 'off'}
            />
          ) : (
            mode === 'receipt' && <Camera image={image} setImage={setImage} />
          )}

          <View style={styles.maskOutter}>
            <View
              style={[
                {
                  flex: maskRowHeight,
                },
                styles.maskRow,
              ]}>
              <View style={styles.mainView}>
                <View style={styles.innerView}>
                  {mode === 'qr' ? (
                    <Text
                      semiBold
                      color={WHITE}
                      size={typography.h2}
                      style={styles.txt}>
                      Scan QR
                    </Text>
                  ) : (
                    mode === 'receipt' && (
                      <Text
                        semiBold
                        color={BLACK}
                        size={typography.h2}
                        style={styles.txt}>
                        Scan Receipt
                      </Text>
                    )
                  )}
                </View>
                <Pressable
                  style={styles.flash}
                  onPress={() => setFlashMode(!flashMode)}>
                  <Image
                    source={thunder}
                    resizeMode="contain"
                    style={[
                      styles.img,
                      {tintColor: mode === 'qr' ? WHITE : BLACK},
                    ]}
                  />
                </Pressable>
              </View>
            </View>

            <View style={[{flex: 25.7}, styles.maskCenter]}>
              {mode === 'qr' && (
                <View style={styles.v1}>
                  <View style={styles.v2} />
                  <View style={styles.v3} />
                </View>
              )}
              <Image
                source={mode === 'qr' ? scanner : scanBorder}
                resizeMode="contain"
                style={
                  mode === 'qr'
                    ? styles.vImg
                    : {
                        width: '100%',
                        height: RF(500),
                      }
                }
              />
              {mode === 'qr' && (
                <View style={styles.v4}>
                  <View style={styles.v5} />
                  <View style={styles.v6} />
                </View>
              )}
            </View>

            <View style={[{flex: maskRowHeight}, styles.maskRow]} />

            <View style={styles.topView}>
              <Pressable onPress={() => handleMode('qr')}>
                <Text
                  color={mode === 'qr' ? WHITE : BLACK}
                  medium
                  size={typography.standard}>
                  QR Code
                </Text>
              </Pressable>
              <Pressable onPress={() => handleMode('receipt')}>
                <Text
                  color={mode === 'qr' ? WHITE : BLACK}
                  medium
                  size={typography.standard}>
                  Receipt
                </Text>
              </Pressable>
              {/* <Image source={gallery} resizeMode="contain" style={styles.gImg} /> */}
              <Pressable onPress={() => handleMode('pin')}>
                <Text
                  color={mode === 'qr' ? WHITE : BLACK}
                  medium
                  size={typography.standard}>
                  Use PIN
                </Text>
              </Pressable>
            </View>
          </View>
        </>
      )}
      {loading && <CustomLoader />}
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  marker: {
    height: '30%',
    width: '60%',
    borderRadius: 20,
    borderColor: 'transparent',
  },
  flash: {
    width: '10%',
    height: RF(18),
    alignItems: 'center',
    right: 30,
  },
  topView: {
    bottom: 100,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '60%',
  },
  gImg: {
    width: RF(35),
    height: RF(24),
    paddingHorizontal: RF(40),
  },
  v6: {
    width: 5,
    height: 3,
    right: 4,
    top: 193,
    // backgroundColor: 'rgba(1,1,1,0.6)',
  },
  v5: {
    width: 4,
    height: 3,
    right: 3.5,
  },
  v4: {
    width: 80,
    height: RF(198),
  },
  vImg: {
    width: '100%',
    height: RF(200),
    position: 'absolute',
  },
  v3: {
    width: 11,
    height: 3,
    left: 82,
    top: 192,
  },
  v2: {
    width: 11,
    height: 3,
    left: 82,
  },
  v1: {
    width: 82,
    height: RF(198),
  },
  img: {
    height: RF(18),
  },
  txt: {marginLeft: RF(30)},
  innerView: {
    width: '90%',
    alignItems: 'center',
  },
  mainView: {
    width: '100%',
    marginTop: RF(60),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  barcodeTextURL: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
  },
  cameraView: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  maskOutter: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  maskInner: {
    width: 200,
    backgroundColor: 'transparent',
  },
  maskFrameR: {
    backgroundColor: 'transparent',
  },
  maskRow: {
    width: '100%',
  },
  maskCenter: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default Scan;

// const [frameProcessor, barcodes] = useScanBarcodes([BarcodeFormat.QR_CODE], {
//   checkInverted: true,
// });

// useEffect(() => {
//   if (barcodes.length > 0) {
//     onSuccess();
//   }
// }, [barcodes]);

// const frameProcessor = (frameProcessor: [], barcodes: []) => {
//   useScanBarcodes([BarcodeFormat.QR_CODE], {
//     checkInverted: true,
//   });
//   onSuccess();
// };

// import {useDispatch, useSelector} from 'react-redux';
// import {CustomLoader, Text, Wrapper, Camera, Success} from '@components';
// import React, {useEffect, useRef, useState} from 'react';
// import {format as prettyFormat} from 'pretty-format';
// import {RF} from '@theme';
// import {
//   StyleSheet,
//   Image,
//   View,
//   Pressable,
//   TouchableOpacity,
// } from 'react-native';
// import Canvas from 'react-native-canvas';
// import {map_marker} from '@assets';
// import {RNCamera} from 'react-native-camera';

// const Scan = () => {
//   const dispatch: any = useDispatch();
//   const [image, setImage] = useState<any>(null);
//   const [loading, setloading] = useState(false);
//   const [imageUri, setImageUri] = useState(null);
//   const canvasRef: any = useRef(null);
//   const cameraRef: any = useRef(null);

//   const takePicture = async (camera: any) => {
//     const options = {quality: 0.5, base64: true};
//     const data = await camera.takePictureAsync(options);
//     setImageUri(data.uri);
//   };
//   const drawRectangle = async () => {
//     const canvas = canvasRef.current;
//     const context = canvas.getContext('2d');
//     const image: any = new Image();
//     image.src = imageUri;
//     image.onload = () => {
//       canvas.width = image.width;
//       canvas.height = image.height;
//       context.drawImage(image, 0, 0);
//       context.lineWidth = 5;
//       context.strokeStyle = 'red';
//       context.strokeRect(50, 100, canvas.width - 100, 400); // Adjust the rectangle position and dimensions as needed
//     };
//   };

//   return (
//     <Wrapper isTransparent>
//       <RNCamera
//         style={{flex: 1}}
//         captureAudio={false}
//         ref={(ref: any) => {
//           cameraRef.current = ref;
//         }}
//       />
//       <TouchableOpacity
//         style={{alignSelf: 'center', marginVertical: 16, bottom: 100}}
//         onPress={() => takePicture(cameraRef?.current)}>
//         <Image
//           source={map_marker}
//           style={{width: 64, height: 64, tintColor: 'red'}}
//         />
//       </TouchableOpacity>
//       {imageUri && (
//         <View style={{flex: 1}}>
//           <Canvas ref={canvasRef} />
//           <TouchableOpacity onPress={drawRectangle}>
//             <Text>Draw Rectangle</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//       {loading && <CustomLoader />}
//     </Wrapper>
//   );
// };

// const styles = StyleSheet.create({
//   marker: {
//     height: '30%',
//     width: '60%',
//     borderRadius: 20,
//     borderColor: 'transparent',
//   },
//   flash: {
//     width: '10%',
//     height: RF(18),
//     alignItems: 'center',
//     right: 30,
//   },
//   topView: {
//     bottom: 100,
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//     alignItems: 'center',
//     width: '60%',
//   },
//   gImg: {
//     width: RF(35),
//     height: RF(24),
//     paddingHorizontal: RF(40),
//   },
//   v6: {
//     width: 5,
//     height: 3,
//     right: 4,
//     top: 193,
//     // backgroundColor: 'rgba(1,1,1,0.6)',
//   },
//   v5: {
//     width: 4,
//     height: 3,
//     right: 3.5,
//   },
//   v4: {
//     width: 80,
//     height: RF(198),
//   },
//   vImg: {
//     width: '100%',
//     height: RF(200),
//     position: 'absolute',
//   },
//   v3: {
//     width: 11,
//     height: 3,
//     left: 82,
//     top: 192,
//   },
//   v2: {
//     width: 11,
//     height: 3,
//     left: 82,
//   },
//   v1: {
//     width: 82,
//     height: RF(198),
//   },
//   img: {
//     height: RF(18),
//   },
//   txt: {marginLeft: RF(30)},
//   innerView: {
//     width: '90%',
//     alignItems: 'center',
//   },
//   mainView: {
//     width: '100%',
//     marginTop: RF(60),
//     alignItems: 'center',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   barcodeTextURL: {
//     fontSize: 20,
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   container: {
//     flex: 1,
//   },
//   cameraView: {
//     flex: 1,
//     justifyContent: 'flex-start',
//   },
//   maskOutter: {
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     position: 'absolute',
//     alignItems: 'center',
//     justifyContent: 'space-around',
//   },
//   maskInner: {
//     width: 200,
//     backgroundColor: 'transparent',
//   },
//   maskFrameR: {
//     backgroundColor: 'transparent',
//   },
//   maskRow: {
//     width: '100%',
//   },
//   maskCenter: {
//     width: '100%',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
// });

// export default Scan;

// // const [frameProcessor, barcodes] = useScanBarcodes([BarcodeFormat.QR_CODE], {
// //   checkInverted: true,
// // });

// // useEffect(() => {
// //   if (barcodes.length > 0) {
// //     onSuccess();
// //   }
// // }, [barcodes]);

// // const frameProcessor = (frameProcessor: [], barcodes: []) => {
// //   useScanBarcodes([BarcodeFormat.QR_CODE], {
// //     checkInverted: true,
// //   });
// //   onSuccess();
// // };
