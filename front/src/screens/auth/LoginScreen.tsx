import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-gesture-handler';

interface LoginScreenProps {

}

function LoginScreen({}: LoginScreenProps) {
  return (
    <View><Text>로그인 스크린</Text></View>
  )
}

const styles = StyleSheet.create({});

export default LoginScreen;