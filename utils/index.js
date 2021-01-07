import {Dimensions} from 'react-native'
//获取宽度
export const screenWidth = Dimensions.get('window').width;
// 获取高度
export const screenHeight = Dimensions.get('window').height;
// px转dp
export const pxToDp = (elePx)=>screenWidth * elePx / 375;
