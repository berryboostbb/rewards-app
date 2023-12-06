export const firstCapitalize = (str: string) => {
  return str?.charAt(0).toUpperCase() + str?.slice(1);
};

export const embossSelection = (
  firstName: string,
  middleName: string,
  lastName: string,
) => {
  let obj = {};
  let first_name = firstName != '' ? firstCapitalize(firstName) : '';
  let middle_name = middleName != '' ? firstCapitalize(middleName) : '';
  let last_name = lastName != '' ? firstCapitalize(lastName) : '';

  let options = [];

  if (first_name !== '' || last_name !== '' || middle_name !== '') {
    if (
      first_name !== '' &&
      last_name !== '' &&
      (first_name + ' ' + middle_name + ' ' + last_name).length < 21
    ) {
      obj = {
        label: first_name + ' ' + last_name,
        value: first_name + ' ' + last_name,
      };
      options.push(obj);
    }
    if (middle_name !== '') {
      obj = {
        label: first_name + ' ' + middle_name + ' ' + last_name,
        value: first_name + ' ' + middle_name + ' ' + last_name,
      };
      options.push(obj);
    }

    if (middle_name) {
      obj = {
        label:
          first_name +
          ' ' +
          middle_name.split('')[0].toUpperCase() +
          ' ' +
          last_name,
        value:
          first_name +
          ' ' +
          middle_name.split('')[0].toUpperCase() +
          ' ' +
          last_name,
      };
      options.push(obj);
    }
  }
  return options;
};

import Toast from 'react-native-toast-message';

export const showToast = (text1: string, text2: string, type: boolean) => {
  Toast.show({
    text1,
    text2,
    type: type ? 'success' : 'error',
    visibilityTime: 4000,
  });
};

export function ValidateEmail(mail: any) {
  if (
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      String.prototype.trim.call(mail),
    )
  ) {
    return true;
  }
  return false;
}
