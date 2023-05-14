import { Text, StyleSheet, View, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import{MagnifyingGlassIcon,MapPinIcon} from 'react-native-heroicons/solid';
const SearchScreen = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {

        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <SafeAreaView className=" justify-center items-center py-5 flex-col space-y-5">
        <View className=" bg-white w-11/12 h-12 rounded-2xl flex-row space-x-4  items-center px-5 drop-shadow-2xl" >
            <MagnifyingGlassIcon size={28} color={'#000000'}/>
            <TextInput placeholder="Search By Locations" keyboardType="default" className=" text-xl"/>
        </View>
            <View className="items-center flex-row space-x-3 justify-start w-11/12 h-12 ">
        <MapPinIcon size={28} color={'#000000'}/>
        <Text className=" text-lg">Use current location</Text>
        </View>
        </SafeAreaView>
    );
};
export default SearchScreen;
