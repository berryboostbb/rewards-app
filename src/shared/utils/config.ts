import {Linking} from 'react-native';
import {signOut, store} from '@redux';
import axios, {AxiosInstance} from 'axios';
import {BASE_URL} from '../utils/endpoints';
import {format as prettyFormat} from 'pretty-format';

export const HTTP_CLIENT: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});


export const initialConfig = (dispatch: any) => {


  HTTP_CLIENT.interceptors.request.use(
    (config: any) => {
      const {user} = store.getState().root;
      const {authToken} = store.getState().root.user;

      config.headers = {
        'x-access-token': 'PLASTK',
      };
      
      
      if (user && user?.authToken && config.headers) {
        config.headers.Authorization = `Bearer ${user?.authToken}`;
      }
      return config;
    },
    (err: any) => {
      Promise.reject(err);
    },
  );
};

export function openLink(link: any) {
  Linking.canOpenURL(link)
    .then(supported => {
      if (!supported) {
        return Linking.openURL(link);
      } else {
        return Linking.openURL(link);
      }
    })
    .catch(err => {
      console.warn('An error occurred', err);
    });
}

// export async function logFireBaseEvent(eventName: any) {}
