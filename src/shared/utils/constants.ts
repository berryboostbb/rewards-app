import {
  apple,
  b,
  ball,
  barber,
  battery,
  blck,
  buy,
  cup,
  d,
  detour,
  e,
  g,
  jar,
  mouse,
  nothing,
  PromTemp,
  speaker,
  splash2,
  splash3,
  splash4,
  starBuck,
  tim,
  top,
  bamp3,
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
  sponser3,
  sponser4,
  chaBack,
  patagoniaBackground,
  aple,
  google,
  category,
  detourImg,
  smoothieImg,
  arduinoImg,
  barImg,
  brevilleImg,
  baileynilsonImg,
  bigfatImg,
  birriaImg,
  blackjackImg,
  duluxpaintImg,
  hotyogaImg,
  sunriseImg,
  aurduinoBack,
  barBack,
  brevilleBack,
  detourBack,
  smoothieBack,
  arduinoLogo,
  barLogo,
  brevilleLogo,
  detourLogo,
  smoothieLogo,
  auto,
  pizza,
  e_home,
  beauty,
  sports,
  shoes,
  logitech_G,
  nike,
  mec,
  uniqlo,
  sketch,
  tuf,
  domino,
  cofee,
  cutting,
  ik,
  r_n,
  w_f,
  c_d,
  proteinImg,
  ahaImg,
  googleImg,
  aha_logo,
  aha_img,
  clif_logo,
  clif_img,
  j_t,
  t_t,
  g_t,
  b_t,
  c_t,
  patagonia_white,
  insights_open,
  c_s,
  ikea,
  t_o,
  kong,
  brev,
  sony,
  t_h_d,
  a_h_a,
  r_f,
  fav_apple,
} from '@assets';
import {Platform} from 'react-native';
import {primaryDarkColor} from '@theme';
import {store} from '@redux';

export var currencyFormatter = require('currency-formatter');
export const isIOS = Platform.OS === 'ios' ? true : false;
export const isAndroid = Platform.OS === 'android' ? true : false;
export const GENERIC_ERROR = 'Error occurred. Please try again later';
export const GOOGLE_PLACES_API_KEY = 'AIzaSyCRQbuzB7296abvanXJON4x7_PcoR_MKLo';

let isDarkThemeEnabled = false;

export const KEYCHAIN_PIN_KEY = 'PlastkPinCode';
export const KEYCHAIN_EMAIL_KEY = 'PlastkEmailPassword';

export function setIsDarkModeEnabled(isEnabled: any) {
  isDarkThemeEnabled = isEnabled;
}

export function getIsDarkModeEnabled() {
  return isDarkThemeEnabled;
}

export const DATA = [
  {
    description: 'Tom',
    status: 'BELL',
    rewards: '25',
    date: '12-Jan-2022',
    debit: '$123',
    credit: '$0.0',
  },
  {
    description: '&',
    status: 'BELL',
    rewards: '25',
    date: '12-Jan-2022',
    debit: '$123',
    credit: '$0.0',
  },
  {
    description: 'Jerry',
    status: 'BELL',
    rewards: '25',
    date: '12-Jan-2022',
    debit: '$123',
    credit: '$0.0',
  },
  {
    description: 'Tom',
    status: 'BELL',
    rewards: '25',
    date: '12-Jan-2022',
    debit: '$123',
    credit: '$0.0',
  },
  {
    description: '&',
    status: 'BELL',
    rewards: '25',
    date: '12-Jan-2022',
    debit: '$123',
    credit: '$0.0',
  },
  {
    description: 'Jerry',
    status: 'BELL',
    rewards: '25',
    date: '12-Jan-2022',
    debit: '$123',
    credit: '$0.0',
  },
];

export const chartDataLabel = ['monthly', 'weekly', 'daily'];

export const titleList = [
  {
    label: 'Mr.',
    value: 'M',
  },
  {
    label: 'Ms.',
    value: 'F',
  },
  {
    label: 'Mrs.',
    value: 'Fe',
  },
  {
    label: 'Other',
    value: 'O',
  },
];

export const cardTypeList = [
  {label: 'KOHO', value: 'KOHO'},
  {label: 'BORROWELL', value: 'Borrowell'},
  {label: 'BRIM', value: 'Brim'},
  {label: 'OTHER', value: 'Other'},
];

export const getCloser = (value: any, checkOne: any, checkTwo: any) =>
  Math.abs(value - checkOne) < Math.abs(value - checkTwo) ? checkOne : checkTwo;

export const swipeData = isIOS
  ? ['utilityDoc', 'selfie', 'photoId', 'photoIdType'].reverse()
  : ['utilityDoc', 'selfie', 'photoId', 'photoIdType'];

export const brands = [
  {id: 1, url: barber},
  {id: 1, url: g},
  {id: 1, url: nothing},
  {id: 2, url: detour},
  {id: 3, url: apple},
  {id: 4, url: tim},
  {id: 5, url: starBuck},
  {id: 4, url: buy},
  {id: 5, url: starBuck},
  {id: 4, url: buy},
  {id: 5, url: starBuck},
];

export const allStores_Brands = [
  {id: 1, url: barber, title: 'Barber Shop'},
  {id: 2, url: g, title: 'Logitech'},
  {id: 3, url: nothing, title: 'Nothing'},
  {id: 4, url: detour, title: 'Detour Coffee'},
  {id: 5, url: apple, title: 'Apple'},
  {id: 6, url: tim, title: 'Tims'},
  {id: 7, url: starBuck, title: 'StarBucks'},
  {id: 8, url: buy, title: 'Best Buy'},
  {id: 9, url: ikea, title: 'Ikea'},
  {id: 10, url: t_o, title: 'The Ordinary'},
  {id: 11, url: kong, title: 'Tuff Kong Records'},
  {id: 12, url: brev, title: 'Breville'},
  {id: 13, url: sony, title: 'Sony'},
  {id: 14, url: t_h_d, title: 'The Home Depot'},
  {id: 15, url: a_h_a, title: 'Aha Sparkling Water'},
  {id: 16, url: r_f, title: 'Real Fruit Bubble Tea'},
  {id: 17, url: tim, title: 'Tims'},
  {id: 18, url: starBuck, title: 'StarBucks'},
  {id: 19, url: buy, title: 'Best Buy'},
  {id: 9, url: ikea, title: 'Ikea'},
  {id: 10, url: t_o, title: 'The Ordinary'},
  {id: 11, url: kong, title: 'Tuff Kong Records'},
  {id: 12, url: brev, title: 'Breville'},
  {id: 13, url: sony, title: 'Sony'},
  {id: 10, url: t_o, title: 'The Ordinary'},
  {id: 11, url: kong, title: 'Tuff Kong Records'},
  {id: 12, url: brev, title: 'Breville'},
  {id: 13, url: sony, title: 'Sony'},
  {id: 14, url: t_h_d, title: 'The Home Depot'},
];

export const seeAllbrands = [
  {id: 1, label: 'Select View'},
  {id: 2, url: g},
  {id: 3, url: nothing},
  {id: 4, url: detour},
];

export const NearYou_img = {
  id: 1,
  url: PromTemp,
  points: '500',
  txt: 'Detour Coffee',
  miniTxt: 'Purchase any 1 Lbs bag of beans and earn 500 Plastk Reward Points.',
};

export const bap_Store = [
  {
    id: 1,
    url: jar,
    mini_Img: google,
    points: '500',
    miniTxt: 'Flavoured Sparkling Water',
  },
  {
    id: 1,
    url: mouse,
    mini_Img: logitech_G,
    points: '500',
    miniTxt: 'Flavoured Sparkling Water',
  },
  {
    id: 1,
    url: speaker,
    mini_Img: aple,
    points: '500',
    miniTxt: 'Flavoured Sparkling Water',
  },
];

export const bmp_Store = [
  {
    id: 1,
    url: top,
    mini_Img: brevilleLogo,
    points: '500',
    miniTxt: 'Flavoured Sparkling Water',
  },
  {
    id: 1,
    url: top,
    mini_Img: brevilleLogo,
    points: '500',
    miniTxt: 'Flavoured Sparkling Water',
  },
  {
    id: 1,
    url: top,
    mini_Img: brevilleLogo,
    points: '500',
    miniTxt: 'Flavoured Sparkling Water',
  },
];

export const qr = [
  {
    id: 1,
    points: '500',
    txt: 'Grande Sparkling Water',
    date: 'Quantity:1',
    total_points: '$5.00',
  },
  {
    id: 2,
    points: '750',
    txt: 'Flavoured Sparkling Water',
    date: 'Quantity:1',
    total_points: '$12.00',
  },
  {
    id: 3,
    points: '500',
    txt: 'Resuable Sparkling Water',
    date: 'Quantity:1',
    total_points: '$5.00',
  },
  {
    id: 4,
    points: '500',
    txt: 'Resuable Sparkling Water',
    date: 'Quantity:1',
    total_points: '$5.00',
  },
];

export const explore_products = [
  {
    id: 1,
    type: 'bmp',
    url: ahaImg,
    img: aha_img,
    logo: aha_logo,
    points: '500',
    explore: true,
    background: brevilleBack,
    miniTxt: 'Flavoured Sparkling Water',
  },
  {
    id: 2,
    type: 'bmp',
    points: '500',
    explore: true,
    img: clif_img,
    logo: clif_logo,
    url: proteinImg,
    background: brevilleBack,
    miniTxt: 'Nutritious Protien Bars',
  },
  {
    id: 3,
    type: 'bmp',
    explore: true,
    img: battery,
    logo: google,
    url: googleImg,
    points: '500',
    background: brevilleBack,
    miniTxt: 'Home Security',
  },
];

export const explore_offers = [
  {
    id: 1,
    type: 'bap',
    url: category,
    points: '1,000',
    txt: 'Birria Palace',
    miniTxt:
      'Spend at least $50.00 and earn 500 additional Plastk Reward Points each visit.',
  },
  {
    id: 2,
    type: 'bap',
    url: bamp3,
    points: '1,000',
    txt: 'Patagonia',
    miniTxt:
      'Purchase any 1 Lbs bag of beans and earn 500 Plastk Reward Points.',
  },
  {
    id: 1,
    type: 'bap',
    url: category,
    points: '1,000',
    txt: 'Birria Palace',
    miniTxt:
      'Spend at least $50.00 and earn 500 additional Plastk Reward Points each visit.',
  },
];

export const markerArray = [
  {
    id: 1,
    url: mec,
    region: {
      latitude: 43.65107,
      longitude: -79.369015,
      // latitude: 31.5294806,
      // longitude: 74.341139,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  },
  {
    id: 2,
    url: uniqlo,
    region: {
      latitude: 43.65107,
      longitude: -79.384015,
      // latitude: 31.4894802,
      // longitude: 74.3541139,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  },
  {
    id: 3,
    url: sketch,
    region: {
      latitude: 43.65407,
      longitude: -79.369015,
      // latitude: 31.5194802,
      // longitude: 74.3641139,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  },
  {
    id: 4,
    url: tuf,
    region: {
      latitude: 43.65407,
      longitude: -79.377015,
      // latitude: 31.5294802,
      // longitude: 74.3591139,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  },
  {
    id: 5,
    url: cofee,
    region: {
      latitude: 43.658107,
      longitude: -79.368015,
      // latitude: 31.4994802,
      // longitude: 74.3141139,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  },
  {
    id: 6,
    url: cutting,
    region: {
      latitude: 43.64907,
      longitude: -79.372015,
      // latitude: 31.5495206,
      // longitude: 74.3591139,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  },
  {
    id: 8,
    url: c_s,
    region: {
      latitude: 43.64507,
      longitude: -79.375015,
      // latitude: 31.5195206,
      // longitude: 74.3291139,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  },
];

export const marker_Offers_Array = [
  {
    id: 1,
    url: ik,
    region: {
      latitude: 43.65107,
      longitude: -79.369015,
      // latitude: 31.5294806,
      // longitude: 74.341139,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  },
  {
    id: 2,
    url: r_n,
    region: {
      latitude: 43.65107,
      longitude: -79.384015,
      // latitude: 31.4894802,
      // longitude: 74.3541139,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  },
  {
    id: 3,
    url: sketch,
    region: {
      latitude: 43.65407,
      longitude: -79.369015,
      // latitude: 31.5194802,
      // longitude: 74.3641139,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  },
  {
    id: 4,
    url: tuf,
    region: {
      latitude: 43.65407,
      longitude: -79.377015,
      // latitude: 31.5294802,
      // longitude: 74.3591139,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  },
  {
    id: 5,
    url: w_f,
    region: {
      latitude: 43.658107,
      longitude: -79.368015,
      // latitude: 31.4994802,
      // longitude: 74.3141139,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  },
  {
    id: 6,
    url: cutting,
    region: {
      latitude: 43.64907,
      longitude: -79.372015,
      // latitude: 31.5495206,
      // longitude: 74.3591139,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  },
  {
    id: 8,
    url: c_s,
    region: {
      latitude: 43.64507,
      longitude: -79.375015,
      // latitude: 31.5195206,
      // longitude: 74.3291139,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  },
];

export const nearYou = [
  {
    id: 1,
    type: 'bap',
    url: detourImg,
    points: '500',
    back_points: '5',
    logo: detourLogo,
    txt: 'Detour Coffee',
    background: detourBack,
    miniTxt:
      'Purchase any 1 Lbs bag of beans and earn 500 Plastk Reward Points.',
  },
  {
    id: 2,
    type: 'bap',
    url: barImg,
    back_points: '15',
    points: '1500',
    txt: 'Salt Wine Bar',
    background: barBack,
    logo: barLogo,
    miniTxt: 'Spend at least $60.00 and earn 1,500 Plastk Reward Points.',
  },
  {
    id: 3,
    type: 'bmp',
    back_points: '20',
    url: brevilleImg,
    points: '1000',
    txt: 'Esspresso Machines & Tools',
    background: brevilleBack,
    logo: brevilleLogo,
    miniTxt: 'Esspresso Machines & Tools',
    img: top,
    dark: true,
  },
  {
    id: 4,
    dark: false,
    type: 'bap',
    back_points: '30',
    url: smoothieImg,
    points: '200',
    txt: 'Sam’s Smoothie Shack',
    background: smoothieBack,
    logo: smoothieLogo,
    miniTxt:
      'Visit 3 times and earn 200 Plastk Reward Points each time. Up to a maximum of 1,500 Points.',
  },
  {
    id: 5,
    type: 'bap',
    url: arduinoImg,
    points: '20',
    txt: 'Arduino',
    back_points: '8',
    background: aurduinoBack,
    logo: arduinoLogo,
    miniTxt:
      'For each Arduino board or accessory, earn 150 Plastk Reward Points. Up to a maximum of 1,500 Points.',
  },
];

export const forYou = [
  {
    id: 1,
    type: 'bap',
    url: bamp3,
    points: '500',
    txt: 'Patagonia',
    logo: patagonia_white,
    back_points: '5',
    background: smoothieBack,
    miniTxt: 'Spend $250 and earn 1000 Plastk Reward Points.',
  },
  {
    id: 2,
    type: 'bap',
    url: baileynilsonImg,
    points: '500',
    txt: 'Bailey Nelson',
    background: brevilleBack,
    back_points: '10',
    logo: brevilleLogo,
    miniTxt: 'Purchase at least 2 frames and earn 15,000 Plastk Reward Points.',
  },

  {
    id: 3,
    type: 'bap',
    url: bigfatImg,
    points: '500',
    txt: 'Big Fat Cookies ',
    logo: smoothieLogo,
    back_points: '3',
    background: smoothieBack,
    miniTxt: 'Purcahse a dozen cookies, earn 250 Plastk Reward Points.',
  },
  {
    id: 4,
    type: 'bap',
    url: birriaImg,
    points: '500',
    txt: 'Birria Palace',
    background: aurduinoBack,
    logo: arduinoLogo,
    back_points: '2',
    miniTxt:
      'Spend at least $40.00 and earn 1,000 additional Plastk Reward Points each visit.',
  },
  {
    id: 5,
    type: 'bap',
    url: blackjackImg,
    points: '500',
    txt: 'Blackjack BBQ',
    logo: barLogo,
    back_points: '5',
    background: barBack,
    miniTxt: 'Dine with a group of 4 and earn 4000 Plastk Reward Points.',
  },
];

export const offers = [
  {
    id: 1,
    type: 'bap',
    url: fav_apple,
    points: '1,000',
    back_points: '5',
    logo: arduinoLogo,
    txt: 'Chudleigh’s Farm',
    background: patagoniaBackground,
    miniTxt:
      'Spend at least $50.00 and earn 500 additional Plastk Reward Points each visit.',
  },
  {
    id: 2,
    type: 'bap',
    points: '1,000',
    logo: arduinoLogo,
    back_points: '5',
    url: duluxpaintImg,
    txt: 'Chudleigh’s Farm',
    background: patagoniaBackground,
    miniTxt: 'Spend at least $80.00 and earn 500 Plastk Reward Points.',
  },
  {
    id: 3,
    type: 'bap',
    url: hotyogaImg,
    points: '1,000',
    back_points: '5',
    logo: arduinoLogo,
    txt: 'Chudleigh’s Farm',
    background: patagoniaBackground,
    miniTxt: 'Spend $50 and earn 500 Plastk Reward Points.',
  },
];

export const topPick = [
  {
    id: 1,
    img: top,
    url: brand1,
    dark: false,
    type: 'bmp',
    points: '100',
    logo: brevilleLogo,
    background: brevilleBack,
    miniTxt: 'Espresso Machines & Tools',
  },
  {
    id: 2,
    img: mouse,
    url: brand2,
    type: 'bmp',
    points: '200',
    logo: logitech_G,
    background: brevilleBack,
    miniTxt: 'PC & Gaming Accessories',
  },
  {
    id: 3,
    img: shoes,
    logo: nike,
    url: brand3,
    type: 'bmp',
    points: '500',
    miniTxt: 'Nike Jumps',
    background: brevilleBack,
  },
  {
    id: 4,
    logo: aple,
    url: brand4,
    type: 'bmp',
    img: speaker,
    points: '100',
    background: brevilleBack,
    miniTxt: 'PC & Gaming Accessories',
  },
  {
    id: 5,
    type: 'bmp',
    url: brand5,
    img: battery,
    logo: google,
    points: '800',
    miniTxt: 'Home Security',
    background: brevilleBack,
  },
];

export const sponsored = [
  // {
  //   id: 1,
  //   url: sponser3,
  //   txt: 'Real Juice',
  //   miniTxt: 'Smoothie Bowls',
  //   points: '250',
  //   isFeatured: false,
  // },
  {
    id: 1,
    url: blck,
    txt: 'Le Plants',
    miniTxt: 'Home Plants',
    points: '350',
    isFeatured: true,
    isFavorite: true,
  },
  {
    id: 2,
    url: sponser4,
    txt: 'Real Fruit',
    miniTxt: 'Bubble Tea',
    points: '450',
    isFeatured: false,
    isFavorite: false,
  },
  {
    id: 3,
    url: ball,
    txt: 'Tennis Club',
    miniTxt: 'Club Membership',
    points: '550',
    isFavorite: false,
    isFeatured: true,
  },
  {
    id: 4,
    url: blck,
    txt: 'Sanctum',
    miniTxt: 'Club Membership',
    points: '650',
    isFeatured: false,
    isFavorite: false,
  },
];

export const favorite_sponsored = [
  {
    id: 1,
    url: j_t,
    points: '250',
    txt: 'Candyland',
    isFeatured: false,
    miniTxt: 'Sweets & Treats',
  },
  {
    id: 2,
    url: t_t,
    points: '350',
    txt: 'Sanctum',
    isFeatured: true,
    miniTxt: 'Club Membership',
  },
  {
    id: 3,
    url: g_t,
    points: '450',
    isFeatured: false,
    txt: 'Playon',
    miniTxt: 'Gaming Service',
  },
  {
    id: 4,
    url: b_t,
    points: '550',
    isFeatured: true,
    txt: 'Bounce',
    miniTxt: 'Basketball Club',
  },
  {
    id: 5,
    url: c_t,
    txt: 'Kitchenaid',
    points: '650',
    isFeatured: false,
    miniTxt: 'Utensils',
  },
];

export const splashData = [
  {
    id: 0,
    url: '',
    txt: 'Now anyone can spend & earn Plastk Reward Points at all their favourite places',
  },
  {id: 1, url: splash3, txt: 'Find Local Stores'},
  {id: 2, url: splash4, txt: 'Choose Your Offers'},
  {id: 3, url: splash2, txt: 'Earn Reward Points'},
];

export const list = [
  {
    id: 0,
    url: mouse,
    txt: 'PC & Gaming Accessories',
  },
  {id: 1, url: top, txt: 'PC & Gaming Accessories'},

  {id: 2, url: cup, txt: 'Choose Your Offers'},
  {id: 3, url: blck, txt: 'Earn Reward Points'},
];

export const count = [{count: '1'}, {count: '2'}, {count: '3'}];

export const weekly = ['Week1', 'Week2', 'Week3', 'Week4', 'Week5', 'Week6'];
export const monthly = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

export const pageList = [
  {pageNo: 1},
  {pageNo: 2},
  {pageNo: 3},
  {pageNo: 4},
  {pageNo: 5},
  {pageNo: 6},
  {pageNo: 7},
  {pageNo: 8},
  {pageNo: 9},
  {pageNo: 10},
  {pageNo: 11},
  {pageNo: 12},
  {pageNo: 13},
  {pageNo: 14},
  {pageNo: 15},
];

export const transaction_list = [
  {
    id: 1,
    txt: 'Sonos',
    points: '500',
    src: insights_open,
    total_points: '$120.00',
    date: 'September 30, 2022',
  },
  {
    id: 2,
    src: detourImg,
    txt: 'Detour Coffee',
    date: 'September 15, 2022',
    total_points: '$120.00',
    points: '500',
  },
  {
    id: 3,
    src: detourImg,
    txt: 'Detour Coffee',
    date: 'September 15, 2022',
    total_points: '$120.00',
    points: '500',
  },
  {
    id: 4,
    txt: 'Sono',
    src: insights_open,
    points: '500',
    total_points: '$120.00',
    date: 'September 30, 2022',
  },
  {
    id: 5,
    src: detourImg,
    txt: 'Detour Coffee',
    date: 'September 15, 2022',
    total_points: '$120.00',
    points: '500',
  },

  {
    id: 6,
    src: detourImg,
    txt: 'Detour Coffee',
    date: 'September 15, 2022',
    total_points: '$120.00',
    points: '500',
  },
  {
    id: 7,
    src: detourImg,
    txt: 'Detour Coffee',
    date: 'September 15, 2022',
    total_points: '$120.00',
    points: '500',
  },
  {
    id: 8,
    src: detourImg,
    txt: 'Detour Coffee',
    date: 'September 15, 2022',
    total_points: '$120.00',
    points: '500',
  },
  {
    id: 9,
    src: detourImg,
    txt: '9 Detour Coffee',
    date: 'September 15, 2022',
    total_points: '$120.00',
    points: '500',
  },
  {
    id: 10,
    src: detourImg,
    txt: 'Detour Coffee',
    date: 'September 15, 2022',
    total_points: '$120.00',
    points: '500',
  },
  {
    id: 11,
    src: detourImg,
    txt: 'Detour Coffee',
    date: 'September 15, 2022',
    total_points: '$120.00',
    points: '500',
  },
  {
    id: 12,
    src: detourImg,
    txt: 'Detour Coffee',
    date: 'September 15, 2022',
    total_points: '$120.00',
    points: '500',
  },
  {
    id: 13,
    src: detourImg,
    txt: 'Detour Coffee',
    date: 'September 15, 2022',
    total_points: '$120.00',
    points: '500',
  },
  {
    id: 14,
    src: detourImg,
    txt: 'Detour Coffee',
    date: 'September 15, 2022',
    total_points: '$120.00',
    points: '500',
  },
  {
    id: 15,
    src: detourImg,
    txt: 'Detour Coffee',
    date: 'September 15, 2022',
    total_points: '$120.00',
    points: '500',
  },
];

export const data = [1, 2, 3, 4];

export const accountDetail = [
  {
    value: 'Groceries',
    id: 1,
    isChecked: false,
  },
  {
    value: 'Movies',
    id: 2,
    isChecked: false,
  },
  {
    value: 'Transportation',
    id: 3,
    isChecked: false,
  },
  {
    value: 'Home',
    isChecked: false,
    id: 4,
  },
  {
    value: 'Transportation',
    id: 5,
    isChecked: false,
  },
  {
    value: 'Clothes',
    id: 6,
    isChecked: false,
  },
  {
    value: 'Coffee',
    id: 7,
    isChecked: false,
  },
  {
    value: 'Alcohol',
    id: 8,
    isChecked: false,
  },
  {
    value: 'Food',
    id: 9,
    isChecked: false,
  },
  {
    value: 'Gym',
    id: 10,
    isChecked: false,
  },
  {
    value: 'Restaurants',
    id: 11,
    isChecked: false,
  },
  {
    value: 'Books',
    id: 12,
    isChecked: false,
  },
  {
    value: 'Games',
    id: 13,
    isChecked: false,
  },
  {
    value: 'Shoes',
    id: 14,
    isChecked: false,
  },
  {
    value: 'Technology',
    id: 15,
    isChecked: false,
  },
  {
    value: 'Vacations',
    id: 16,
    isChecked: false,
  },
  {
    value: 'Concerts',
    id: 17,
    isChecked: false,
  },
  {
    value: 'Music',
    id: 18,
    isChecked: false,
  },
  {
    value: 'Sports',
    id: 19,
    isChecked: false,
  },
  {
    value: 'Furniture',
    id: 20,
    isChecked: false,
  },
  {
    value: 'Other',
    id: 21,
    isChecked: false,
  },
];

export const profile_Contact_Us = [
  {
    value: 'Question',
    id: 1,
    isChecked: false,
  },
  {
    value: 'Bug/ Glitch',
    id: 2,
    isChecked: false,
  },
  {
    value: 'Offer Issue',
    id: 3,
    isChecked: false,
  },
  {
    value: 'Account',
    isChecked: false,
    id: 4,
  },
  {
    value: 'Points Redemption',
    id: 5,
    isChecked: false,
  },
  {
    value: 'Account',
    id: 6,
    isChecked: false,
  },
  {
    value: 'Other',
    id: 7,
    isChecked: false,
  },
];

export const subCategoryList = [
  {
    id: 0,
    txt: 'Cafe',
  },
  {id: 1, txt: 'Italian'},
  {id: 2, txt: 'Mexican'},
  {id: 3, txt: 'Fast Food'},
  {
    id: 4,
    txt: 'Smart Home',
  },
];

export const exploreList = [
  {
    id: 0,
    url: auto,
    txt: 'Auto',
  },
  {id: 1, url: pizza, txt: 'Food'},
  {id: 2, url: e, txt: 'Drinks'},
  {id: 3, url: d, txt: 'Pets'},
  {
    id: 4,
    url: b,
    txt: 'Clothing',
  },
  {id: 5, url: e_home, txt: 'Home'},
  {id: 6, url: beauty, txt: 'Beauty'},
  {id: 7, url: sports, txt: 'sports'},
];

export const points_list = [
  {txt: '17.99% Interest Rate'},
  {txt: 'Referral Program to Earn Plastk Reward Points'},
  {txt: 'Instant Balance Payment via Interac E-Transfer'},
  {txt: 'Monthly credit score update. Powered by Equifax*'},
  {txt: 'Instant Balance Payment via Interac e-transfer'},
];

export const days = [
  {day: 'Monday', time: '7AM - 5PM'},
  {day: 'Tuesday', time: '7AM - 5PM'},
  {day: 'Wednesday', time: '7AM - 5PM'},
  {day: 'Thursday', time: '7AM - 5PM'},
  {day: 'Friday', time: '7AM - 5PM'},
  {day: 'Saturday', time: '10AM-6PM'},
  {day: 'Sunday', time: '10AM-6PM'},
];

let {colorCode} = store.getState().root.user;

export const customStyle = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: colorCode,
      },
    ],
  },
  {
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#212121',
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'administrative.country',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
  {
    featureType: 'administrative.land_parcel',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#bdbdbd',
      },
    ],
  },
  {
    featureType: 'administrative.province',
    elementType: 'labels.text.fill',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'administrative.province',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'poi.attraction',
    elementType: 'labels.text',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi.business',
    elementType: 'labels.text',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi.government',
    elementType: 'labels.text.fill',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi.medical',
    elementType: 'labels.text',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: colorCode,
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: colorCode,
      },
    ],
  },
  {
    featureType: 'poi.place_of_worship',
    elementType: 'labels.text',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi.place_of_worship',
    elementType: 'labels.text.fill',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi.school',
    elementType: 'labels.text',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi.sports_complex',
    elementType: 'labels.text',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#2c2c2c',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#8a8a8a',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [
      {
        color: '#373737',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#3c3c3c',
      },
    ],
  },
  {
    featureType: 'road.highway.controlled_access',
    elementType: 'geometry',
    stylers: [
      {
        color: '#4e4e4e',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#000000',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#3d3d3d',
      },
    ],
  },
];

export const spinnerData = [
  '10',
  '20',
  '30',
  '40',
  '50',
  '60',
  '70',
  '80',
  '90',
  '100',
  // '110',
  // '120',
  // '130',
  // '140',
  // '150',
  // '160',
  // '170',
  // '180',
  // '190',
  // '200',
  // '210',
  // '220',
  // '230',
  // '240',
  // '250',
  // '260',
  // '270',
  // '280',
  // '290',
  // '300',
  // '310',
  // '320',
  // '330',
  // '340',
  // '350',
  // '360',
  // '370',
  // '380',
  // '390',
  // '400',
  // '410',
  // '420',
  // '430',
  // '440',
  // '450',
  // '460',
  // '470',
  // '480',
  // '490',
  // '500',
];

//  export const spinnerData = [
// {value: 10},
// {value: 20},
// {value: 30},
// {value: 40},
// {value: 50},
// {value: 60},
// {value: 70},
// {value: 80},
// {value: 90},
// {value: 100},
// {value: 110},
// {value: 120},
// {value: 130},
// {value: 140},
// {value: 150},
// {value: 160},
// {value: 170},
// {value: 180},
// {value: 190},
// {value: 200},
// {value: 210},
// {value: 220},
// {value: 230},
// {value: 240},
// {value: 250},
// {value: 260},
// {value: 270},
// {value: 280},
// {value: 290},
// {value: 300},
// {value: 310},
// {value: 320},
// {value: 330},
// {value: 340},
// {value: 350},
// {value: 360},
// {value: 370},
// {value: 380},
// {value: 390},
// {value: 400},
// {value: 410},
// {value: 420},
// {value: 430},
// {value: 440},
// {value: 450},
// {value: 460},
// {value: 470},
// {value: 480},
// {value: 490},
// {value: 500},
// {value: 510},
// {value: 520},
// {value: 530},
// {value: 540},
// {value: 550},
// {value: 560},
// {value: 570},
// {value: 580},
// {value: 590},
// {value: 600},
// {value: 610},
// {value: 620},
// {value: 630},
// {value: 640},
// {value: 650},
// {value: 660},
// {value: 670},
// {value: 680},
// {value: 690},
// {value: 700},
// {value: 710},
// {value: 720},
// {value: 730},
// {value: 740},
// {value: 750},
// {value: 760},
// {value: 770},
// {value: 780},
// {value: 790},
// {value: 800},
// {value: 810},
// {value: 820},
// {value: 830},
// {value: 840},
// {value: 850},
// {value: 860},
// {value: 870},
// {value: 880},
// {value: 890},
// {value: 900},
// {value: 910},
// {value: 920},
// {value: 930},
// {value: 940},
// {value: 950},
// {value: 960},
// {value: 970},
// {value: 980},
// {value: 1000},
// ];
