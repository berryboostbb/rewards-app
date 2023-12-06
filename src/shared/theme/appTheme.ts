import {store} from '@redux';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

let user = store.getState().root.user;

export const THEME = '#F26322';
export const TEXT = 'black';
export const GREY = 'grey';
export const LIGHT_GREY = 'rgb(170, 170, 170)';
export const WHITE_GREY = 'rgb(240, 240, 240)';
export const DARK_GREY = 'rgb(110, 110, 110)';
export const BLACK_GREY = 'rgb(80, 80, 80)';
export const RED = 'rgb(204, 0, 5)';
export const BLACK = 'black';
export const WHITE = 'white';
export const GREEN = 'rgb(89, 149, 51)';
export const LIGHT_GREEN = 'rgb(102, 211, 18)';
export const DIVIDER = 'rgb(200, 200, 200)';
export const GANDAM = 'rgb(242, 238, 214)';

export const SCREEN_WIDTH = width;
export const SCREEN_HEIGHT = height;
export const ASPECT_RATIO = SCREEN_HEIGHT / SCREEN_WIDTH;
export const BASE_UNIT_WIDTH = 320;
export const BASE_UNIT_HEIGHT = 640;
export const BASE_ASPECT_RATIO = BASE_UNIT_HEIGHT / BASE_UNIT_WIDTH;
export const ASPECT_DIFF = ASPECT_RATIO / BASE_ASPECT_RATIO;

export const colorWhiteffffff = '#ffffff';
export const colorDarkGreen193628 = '#193628';
export const colorGreen00c464 = '#00c464';
export const colorLightGreenebfbf3 = '#ebfbf3';
export const imageApiUrl = 'http://66.70.142.76:82/';
export const colorPrimary = '#3bb848';
export const colorPrimaryDark = '#319a30';
export const colorAccent = '#319a30';
export const colorAccentSecondary = '#1aad77';
export const colorDarkGraycolorGray = '#D3D3D3';
export const colorDarkGray = '#757575';
export const colorBlack = '#000000';
export const colorOrange = '#FF5722';
export const colorLogo = '#06B057';
export const colorGoogleEA4235 = '#EA4235';
export const colorFacebook = '#3B579D';
export const coloryellow = '#F4D03F';
export const colorRedDC143C = '#DC143C';
export const gray = '#8F92A1';
export const ligh_green = '#A1C452';
export const brightyellow = '#fecf31';
export const Moderateyellow = '#aac452';
export const BrightRed = '#fe5c31';
export const UnSelectedButtonColor = '#F9F9F9';
export const UnSelectedButtonTextColor = '#787574';
export const LightThemeBackGroundColor = '#FCFCFC';
export const paginationGray = '#19383A';
export const parrotGreen = '#BBF613';

export const primary_Borrowell_DarkColor = '#312D84';
export const borrowell_light_Blue = '#1BA9DD';

export const koho = '#F38375';

export const primaryDarkColor = '#19383A';
// user?.user?.user_type == 'Borrowell' ? '#20297a' : '#19383A';
export const light_grey = '#F9FAFB';
export const txt_gray = '#4A5568';
export const txt_black = '#1D1D1D';
export const tab_gray = '#D2D4D8';
export const pink = '#FF7991';
export const txt_greenish = '#117D92';

export const flex_direction_row = 'row';
export const alignItems_center = 'center';
export const justifycontent_center = 'center';
export const green = '#A0D800';
export const dim_gray = '#4A556840';
export const borderClr = '#4A55681A';
export const linearClr = '#F9FAFB';
export const sea_blue = '#4C73B6';
export const mahron = '#5C1A15';
export const dark_blue = '#07232F';
export const peach = '#D66C4C';
export const dim_Gray = '#F6F8FA';
export const dusk_Gray = '#292929';
export const dull_gray = '#333333';
export const blue = '#1877F2';

export const mulish_regular = 'Mulish-Regular';
export const mulish_bold = 'Mulish-Bold';
export const mulish_medium = 'Mulish-Medium';

export const customFonts = {
  fonts: {
    primary: 'PlusJakartaSans-Regular',
    medium: 'PlusJakartaSans-Medium',
    bold: 'PlusJakartaSans-Bold',
  },
};

export const darkThemeStyle = {
  colors: {
    creditView: '#2F80ED',
    creditWatch: '#9B51E0',
    creditEducation: '#FECF31',
    personalInfo: '#404968',
    score: '#0F2546',
    upload: '#2d354d',
    background: '#212535',
    BACKGROUND_COLOR: '#454E6F',
    LABEL_COLOR: '#fff',
    TEXTINPUT_LABEL_COLOR: '#fff',
    BACKGROUND_TERMS: '#242B3E',
    BACK_ARROW_BACKGROUND_COLOR: '#404968',
    STATUS_BAR_STYLE: 'light-content',
    STATUS_BAR_WHITE: '#fff',
    SEGMENTED_BORDER_COLOR: '#6574A0',
    DARK_GRADIENT_FIRST_COLOR: '#212535',
    DARK_GRADIENT_SECOND_COLOR: '#181E2D',
    SEGMENTED_TEXT_COLOR: '#5D6A93',
    PIN_CODE_BORDER_COLOR: '#6574A0',
    PIN_SHARE: '#5D6A93',
    MODAL_BACKGROUND_COLOR: '#5D6A93',
    RESEND_CODE: 'red',
    STEP_NUMBER: '#000',
    DROP_DOWN_TEXT_COLOR: '#000',
    GRADIENT_FIRST_COLOR: '#212535',
    GRADIENT_SECOND_COLOR: '#181E2D',
    HISTORY_BORDER_COLOR: '#8F92A1',
    BUTTON_UNSELECTED_COLOR: '#404968',
    BUTTON_UNSELECTED_TEXT_COLOR: '#5d6a93',
    CARD_GRADIENT_FIRST_COLOR: '#454e6f',
    CARD_GRADIENT_SECOND_COLOR: '#242b3e',
    CARD_ELEVATION: 1.5,
    DASHBOARD_START_GRADIENT: '#212535',
    DASHBOARD_END_GRADIENT: '#181E2D',
    BUTTON_ELEVATION: 1.7,
    LOGOUT_COLOR: '#FFF',
    DRWAER_FIRST_COLOR: '#212535',
    DRWAER_SECOND_COLOR: '#181E2D',
    PROFILE_SCREEN_START_BUTTON: '#454E6F',
    PROFILE_SCREEN_END_BUTTON: '#242B3E',
    BOTTOM_TAB_COLOR: '#2d354d',
    BUTTON_BORDER_RADIUS: 1,
    DARK_TEXT_COLOR: '#fff',
    TEXTINPUT_PLACEHOLDER: '#A3A3A3',
    NOTCH_COLOR: 'rgb(32, 36, 52)',
    DIALOG_MODAL_BACKGROUND: '#5d6a93',
  },
};

export const defaultTheme = {
  colors: {
    STATUS_BAR_WHITE: '#fff',
    creditView: '#2F80ED',
    creditWatch: '#9B51E0',
    creditEducation: '#FECF31',
    personalInfo: '#404968',
    score: '#0F2546',
    upload: '#f6f8fa',
    background: '#fff',
    BACKGROUND_COLOR: '#fff',
    HISTORY_BORDER_COLOR: '#000',
    LABEL_COLOR: '#272D2F',
    TEXTINPUT_LABEL_COLOR: '#8F92A1',
    BACKGROUND_TERMS: '#fff',
    BACK_ARROW_BACKGROUND_COLOR: '#fff',
    STATUS_BAR_STYLE: 'dark-content',
    SEGMENTED_BORDER_COLOR: '#DFE1E9',
    DARK_GRADIENT_FIRST_COLOR: '#ffffff',
    DARK_GRADIENT_SECOND_COLOR: '#ffffff',
    SEGMENTED_TEXT_COLOR: '#272D2F',
    PIN_CODE_BORDER_COLOR: '#DFE1E9',
    PIN_SHARE: '#272D2F',
    MODAL_BACKGROUND_COLOR: '#5D6A93',
    RESEND_CODE: '#A1C452',
    STEP_NUMBER: '#A1C452',
    DROP_DOWN_TEXT_COLOR: '#fff',
    GRADIENT_FIRST_COLOR: '#fff',
    GRADIENT_SECOND_COLOR: '#fff',
    BUTTON_UNSELECTED_COLOR: '#f9f9f9',
    BUTTON_UNSELECTED_TEXT_COLOR: '#787574',
    CARD_GRADIENT_FIRST_COLOR: '#fff',
    CARD_GRADIENT_SECOND_COLOR: '#fff',
    CARD_ELEVATION: 0.5,
    DASHBOARD_START_GRADIENT: '#fcfcfc',
    DASHBOARD_END_GRADIENT: '#fcfcfc',
    BUTTON_ELEVATION: 3,
    LOGOUT_COLOR: RED,
    DRWAER_FIRST_COLOR: '#F7F7F7',
    DRWAER_SECOND_COLOR: '#F7F7F7',
    PROFILE_SCREEN_START_BUTTON: '#FFF',
    PROFILE_SCREEN_END_BUTTON: '#FFF',
    BOTTOM_TAB_COLOR: '#ffffff',
    BUTTON_BORDER_RADIUS: 0,
    DARK_TEXT_COLOR: '#000000',
    TEXTINPUT_PLACEHOLDER: '#272D2F',
    NOTCH_COLOR: '#fff',
    DIALOG_MODAL_BACKGROUND: '#fff',
  },
};
