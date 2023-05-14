import { Text, StyleSheet, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect, useState } from 'react';
import { Bars3Icon, MapPinIcon } from 'react-native-heroicons/solid';


const WishlistScreen = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {

        navigation.setOptions({
            headerShown: false,
        });
    }, []);
    return (
        
        <View style={{ flex: 1, alignItems: 'center' ,paddingTop: 27}}>

        {/* Header */}
        <View className="flex-row space-x-5 items-center px-3 bg-white h-16">
            <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
                <Bars3Icon size={35} color={'#000000'} />
            </TouchableOpacity>
            <View className="flex-1">
                <Text className="font-bold text-2xl">WishList</Text>
            </View>
            {/* <MapPinIcon size={30} color={'#000000'} /> */}
        </View>
            <Text>Wishlist Screen</Text>
        </View>
    );
};
export default WishlistScreen;
