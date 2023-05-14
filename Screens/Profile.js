import { Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect, useState } from 'react';
import { Bars3Icon, MapPinIcon } from 'react-native-heroicons/solid';
const ProfileScreen = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {

        navigation.setOptions({
            headerShown: false,
        });
    }, []);
    return (
        
        <View style={{ flex: 1, alignItems: 'center',paddingTop:27}}>
            {/* Header */}
            <View className="flex-row space-x-5 items-center px-3 bg-white h-16">
                <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
                    <Bars3Icon size={35} color={'#000000'} />
                </TouchableOpacity>
                <View className="flex-1">
                    <Text className="font-bold text-2xl">Profile</Text>
                </View>
                {/* <MapPinIcon size={30} color={'#000000'} /> */}
            </View>
            <Text>Profile Screen</Text>
        </View>
    );
};
export default ProfileScreen;
