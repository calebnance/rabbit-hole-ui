import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';
import { gStyle } from '../constants';

const Button = ({ accessible, onPress, style, text, textStyle }) => (
  <TouchableOpacity
    accessible={accessible}
    activeOpacity={gStyle.activeOpacity}
    onPress={onPress}
    style={style}
  >
    <Text style={textStyle}>{text}</Text>
  </TouchableOpacity>
);

Button.defaultProps = {
  accessible: true,
  style: gStyle.btn,
  textStyle: gStyle.btnText
};

Button.propTypes = {
  // required
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,

  // optional
  accessible: PropTypes.bool,
  style: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.object
  ]),
  textStyle: PropTypes.object
};

export default Button;
