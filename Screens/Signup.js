import { Text, StyleSheet, View ,SafeAreaView,Image} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect, useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import Buttons from '../Component/Buttons';
import { auth } from '../Database/FirebaseDB';
import { TouchableOpacity } from 'react-native-web';
import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { auth } from 'firebase/auth';
const SignUpScreen = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {

        navigation.setOptions({
            headerShown: false,
        });
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.replace("Home")
            }
        })

        return unsubscribe
    }, []);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async () => {
        // auth
        //     .createUserWithEmailAndPassword(email, password)
        //     .then(userCredentials => {
        //         const user = userCredentials.user;
        //         console.log('Registered with:', user.email);
        //     })
        //     .catch(error => alert(error.message))
        if(email && password){
            try{
                await createUserWithEmailAndPassword(auth,email,password);
            }catch(err){
                console.log('got error ',err.message);
                alert("Invalid username or password");
            }
        }
    }
    return (
        <SafeAreaView className="bg-slate-200 flex-1">
            <View className="px-4">
                <View style={styles.circle} className="bg-indigo-400 rounded-b-full justify-center items-center">
                    <Text className="text-4xl top-12">Sign Up</Text>
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
            {/* <TouchableOpacity onPress={handleSignUp}> */}
                <Buttons btn_text={"SIGN UP"} on_press={handleSignUp}/>
            {/* </TouchableOpacity> */}
            </View>

            <View className="items-center py-5 space-y-3">
                <Text className="text-base">Have an account? Login</Text>
                <Text>Or</Text>
            </View>

            <View className="justify-center items-center">
            {/* <Image
            className="h-[35] w-[35] "
                source={require('../assets/image/google.png')}
            /> */}
                {/* <Text className="text-xl text-white">    GOOGLE</Text> */}
      
                <Buttons btn_text={"Continue With Google"} on_press={() => navigation.navigate("Tab")} />
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

export default SignUpScreen;
