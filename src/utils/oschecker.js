import { Platform, Dimensions } from 'react-native'
const { height, width } = Dimensions.get('window')
const aspectRatio = height / width
export const isIphoneX =
  Platform.OS === 'ios' && height === 812 && width === 375

export function checkPlatform(ios_style, android_style) {
  if (Platform.OS === 'ios') return ios_style
  return android_style
}

export function checkDeviceRatio(iphone_style, ipad_style) {
  if (aspectRatio > 1.6) {
    return iphone_style
  }
  return ipad_style
}

export function checkScreenWidth(small_style, normal_style) {
  if (width < 361) {
    return small_style
  }
  return normal_style
}
