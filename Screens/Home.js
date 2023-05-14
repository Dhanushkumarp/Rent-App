import 'react-native-gesture-handler';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Bars3Icon,MapPinIcon} from'react-native-heroicons/solid';
import MDrawer from '../Component/MenuDrawer';
import SearchScreen from './SearchScreen';
const HomeScreen = ({navigation}) => {

    const tnavigation = useNavigation();
    useLayoutEffect(() => {

        tnavigation.setOptions({
            headerShown: false,
        });
    }, []);
    return (
        <SafeAreaView className="flex-col space-y-7">
        {/* Header */}
        <View  className="flex-row space-x-5 items-center px-3 bg-white h-16">
                <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
            <Bars3Icon size={35} color={'#000000'}/>
        </TouchableOpacity>
            <View className="flex-1">
                <Text className="font-bold text-2xl">HOME</Text>
            </View>
            <MapPinIcon size={30} color={'#000000'}/>
        </View>

        {/* Scroll */}
        <ScrollView className="flex-col space-y-0">
        {/* Options */}
            <View className="px-3  justify-center items-center flex-col space-y-7 ">
                    <TouchableOpacity className="w-11/12 h-20  bg-indigo-400 rounded-xl" onPress={() => navigation.navigate("SearchView")}>
                    <View className="items-center justify-center py-6">
                        <Text className="text-xl text-white">Find Home</Text>
                    </View>
                </TouchableOpacity>
                    <TouchableOpacity className=" w-11/12 h-20  bg-indigo-400 rounded-xl" onPress={()=>navigation.navigate("Rents1")}>
                        <View className="items-center justify-center py-6">
                    <Text className=" text-xl text-white">Rent my Property</Text>
                    </View>
                </TouchableOpacity>
            </View>

        {/* 1BHK or 2BHK */}
        <View className="flex-row space-x-11 px-5 justify-center py-7 ">
            <TouchableOpacity className=" w-36 h-48 bg-indigo-400 rounded-xl">
                <View className="items-center justify-center">
                    <Text className="text-white text-xl top-32">1BHK</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity className=" w-36 h-48 bg-indigo-400 rounded-xl">
                <View className="items-center justify-center">
                    <Text className="text-white text-xl top-32">2BHK</Text>
                </View>
            </TouchableOpacity>
        </View>

        {/* Types of Houses */}
        <View className="px-3 justify-center items-center flex-col space-y-7">
            <TouchableOpacity className="w-11/12 h-20  bg-indigo-400 rounded-xl">
                <View className="items-center justify-center py-6">
                    <Text className="text-xl text-white">Apartments</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity className=" w-11/12 h-20  bg-indigo-400 rounded-xl">
                <View className="items-center justify-center py-6">
                    <Text className=" text-xl text-white">Home</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity className=" w-11/12 h-20  bg-indigo-400 rounded-xl">
                <View className="items-center justify-center py-6">
                    <Text className=" text-xl text-white">Flat</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity className=" w-11/12 h-20  bg-indigo-400 rounded-xl">
                <View className="items-center justify-center py-6">
                    <Text className=" text-xl text-white">Flat</Text>
                </View>
            </TouchableOpacity>            
        </View>

        </ScrollView>
        </SafeAreaView>
    );
};
export default HomeScreen;
