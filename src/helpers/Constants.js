import {Platform, Dimensions, NativeModules} from 'react-native';

const {height, width} = Dimensions.get('window');

export const isAndroid = Platform.OS === 'android';
export const isIOS = Platform.OS === 'ios';
export const screenWidth = width;
export const screenHeight = height;
export const isSmallScreen = isIOS ? screenWidth <= 320 : screenWidth <= 360;
export const isShortScreen = screenHeight <= 600;
export let statusBarHeight = 0; // eslint-disable-line
export const isIphoneX = isIOS && !Platform.isPad && !Platform.isTVOS && (screenHeight === 812 || screenWidth === 812);
