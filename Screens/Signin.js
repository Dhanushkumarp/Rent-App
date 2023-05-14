import { Text, StyleSheet, View, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect, useState } from 'react';
import Buttons from '../Component/Buttons';
import { TextInput } from 'react-native-gesture-handler';
import { auth } from '../Database/FirebaseDB';
import { signInWithEmailAndPassword } from 'firebase/auth';
// import {auth} from 'firebase/auth';
const SignInScreen = ({navigation}) => {
    const tnavigation = useNavigation();
    useLayoutEffect(() => {

        tnavigation.setOptions({
            headerShown: false,
        });
    }, []);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async() => {
        // Add login functionality here
        if (email && password) {
            try {
                await signInWithEmailAndPassword(auth, email, password);
            } catch (err) {
                console.log('got error ', err.message);
            }
        }
    };

    return (
        <SafeAreaView className="bg-slate-200 flex-1">
            <View className="px-4">
                <View style={styles.circle} className="bg-indigo-400 rounded-b-full justify-center items-center">
                    <Text className="text-4xl top-12">Sign In</Text>
                </View>
            </View> 

            {/* <View className=" items-center">
                <Text>Welcome</Text>
            </View> */}
            <View className="items-center flex-col space-y-5 justify-center bottom-10">
                <TextInput 
                placeholder="Email" 
                keyboardType="default" 
                value={email}
                onChangeText={value => setEmail(value)}
                autoCapitalize="none"
                className=" text-lg px-5 border-2 border-indigo-400 w-11/12 h-14 rounded-2xl"
                />

                <TextInput
                placeholder="Password"
                keyboardType="default"
                value={password}
                onChangeText={value => setPassword(value)}
                secureTextEntry
                className=" text-lg px-5 border-2 border-indigo-400 w-11/12 h-14 rounded-2xl"
                />
            </View>

            <View className="justify-center items-center ">
                <Buttons btn_text={"SIGN IN"} on_press={handleLogin} />
            </View>

            <View className="items-center py-5 space-y-5">
                <Text className="text-base">Don't have an acoount ?  Sign up</Text>
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
export default SignInScreen;
