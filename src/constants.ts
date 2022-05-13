import { Dimensions, Platform } from 'react-native';

export const { height, width } = Dimensions.get('window');

export const SPACING = 10;
export const isIos = Platform.OS === 'ios';
export const ITEM_SIZE = isIos ? width * 0.718 : width * 0.7;
export const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;
export const BACKDROP_HEIGHT = height * 0.65;
