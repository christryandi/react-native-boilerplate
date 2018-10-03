import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'
import { checkDeviceRatio, checkPlatform } from '../../utils/oschecker'

let green = '#68B45D'
let yellow = '#F7E44D'
let orange = '#F2B257'
let blue = '#55ABDE'
let black = '#606060'
let white = '#fff'
let red = '#e5262c'
let error_red = '#ea212d'
let grey = '#F3F3F4'
let grey2 = '#f4f4f4'
let border = '#e0e0e0'
let placeholder = '#d0d0d0'

// Precalculate Device Dimensions for better performance
const x = Dimensions.get('window').width
const y = Dimensions.get('window').height

// Calculating ratio from iPhone breakpoints
const ratioX = x < 375 ? (x < 320 ? 0.75 : 0.875) : 1
const ratioY = y < 568 ? (y < 480 ? 0.75 : 0.875) : 1

// We set our base font size value
const base_unit = 16

// We're simulating EM by changing font size according to Ratio
const unit = base_unit * ratioX

// We add an em() shortcut function
export function em(value) {
  return unit * value
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
  error: {
    color: red,
    textAlign: 'center',
    marginVertical: 3,
    fontSize: em(1),
  },
  errorInput: {
    color: red,
    marginTop: 3,
    fontSize: em(0.875),
  },
})

export default {
  green,
  yellow,
  orange,
  black,
  blue,
  white,
  red,
  error_red,
  grey,
  grey2,
  border,
  placeholder,

  // GENERAL
  DEVICE_WIDTH: x,
  DEVICE_HEIGHT: y,
  RATIO_X: ratioX,
  RATIO_Y: ratioY,
  UNIT: em(1),
  PADDING: em(1.25),

  // FONT
  FONT_SIZE: em(1),
  FONT_SIZE_SMALLER: em(0.75),
  FONT_SIZE_SMALL: em(0.875),
  FONT_SIZE_TITLE: em(1.25),

  styles,
}
