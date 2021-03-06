import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import PropTypes from 'prop-types';
import colors from '../Common/Color';
import RegisterStyle from './registerStyle';

export default function SubmitBtn({ disabled, onPressBtn }) {
  return (
    <View style={disabled ? RegisterStyle.disabledBtnShadow : RegisterStyle.btnShadow}>
      <LinearGradient
        colors={disabled ? colors.gradientColor.gray : colors.gradientColor.green}
        start={[0.1, 0.9]}
        end={[0.9, 0.1]}
        style={{ borderRadius: 30, padding: 10 }}
      >
        <Button
          title="Sign Up"
          disabledTitleStyle={{ color: 'white' }}
          titleStyle={{ color: 'white' }}
          type="clear"
          disabled={disabled}
          onPress={() => onPressBtn()}
        />
      </LinearGradient>
    </View>
  );
}

SubmitBtn.propTypes = {
  disabled: PropTypes.bool.isRequired,
  onPressBtn: PropTypes.func.isRequired,
};
