import {Dimensions, Platform} from 'react-native';

export const TESTING = 0;
export const COMPONENT_LIST = false;
export const LIVE_API_TESTING = false;

export const SERVER_URL_PRD = 'http://abc/';
export const SERVER_URL_UAT = 'http://abc/';

export const SERVER_URL_PRD_PM = 'http://abc/';
export const SERVER_URL_UAT_PM = 'http://abc/';

export const {height: DEVICE_WINDOW_HEIGHT, width: DEVICE_WINDOW_WIDTH} =
  Dimensions.get('window');

export const PLATFORM_ANDROID = Platform.OS === 'android';
export const PLATFORM_IOS = Platform.OS === 'ios';
