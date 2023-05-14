import { Text, StyleSheet, View, Image} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SignInScreen from './Signin';
import Buttons from '../Component/Buttons';
const SplashScreen = ({navigation}) => {
    const tnavigation = useNavigation();
    useLayoutEffect(() => {

        tnavigation.setOptions({
            headerShown: false,
        });
    }, []);
    return (
        <SafeAreaView >
        <View className="px-4 justify-center items-start top-10"> 
            <View style={styles.circle} className="bg-indigo-400 rounded-b-full justify-center items-center">
                <Text className="text-4xl top-[150] text-white">Welcome</Text>
                <Image
                    source={require('../assets/image/homeimg.png')}
                    className="h-[230] w-[230] top-[350]"
                />
            </View>
        </View>
        <View className="flext-col space-y-5">

        <View className="justify-center items-center top-56">
                <Buttons btn_text={"SIGN UP"} on_press={() => navigation.navigate("Signup")} />
        </View>
        <View className="justify-center items-center top-56">
            <Buttons btn_text={"LOGIN"} on_press={() => navigation.navigate("Signin")} />
        </View>
        </View>
        </SafeAreaView> 
    );
};

const styles = StyleSheet.create({
    circle: {
            width: 598,
            height: 433,
            left: -119,
            top: -130, 
    },

});

export default SplashScreen;
