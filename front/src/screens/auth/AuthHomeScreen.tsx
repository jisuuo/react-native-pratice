import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Button, SafeAreaView, StyleSheet, View } from 'react-native';
import { authNavigations } from '../../constants';
import { AuthStackParamList } from '../../navigations/stack/AuthStackNavigator';

type AuthHomeScreenProps = StackScreenProps<AuthStackParamList, typeof authNavigations.AUTH_HOME>;

function AuthHomeScreen({navigation} : AuthHomeScreenProps) {
  return (
    <SafeAreaView>
          <View>
            <Button title='로그인 화면으로 이동' onPress={() => navigation.navigate(authNavigations.LOGIN)}/>
            <Button title='회원가입 화면으로 이동' onPress={() => navigation.navigate(authNavigations.SIGNUP)}/>
          </View>
    </SafeAreaView>
  
  )
}

const styles = StyleSheet.create({});

export default AuthHomeScreen;