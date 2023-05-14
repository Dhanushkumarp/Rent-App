// import react from "react";
import {Keyboard, Text,View,Button,Image,TouchableOpacity} from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeftIcon ,PhotoIcon} from "react-native-heroicons/solid";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import * as ImagePicker from 'expo-image-picker';
import DropdownComponent from "../../Component/Dropdown";
import Buttons from "../../Component/Buttons";
import {firebase} from "../../Database/config";
// import firestore from "firebase/compat/firestore";

import React, { useState } from 'react';
import { set } from 'react-native-reanimated';
// import { TouchableOpacity ,TouchableHighlight} from 'react-native-web';
const data1 = [
    { label: '1BHK', value: '1BHK' },
    { label: '2BHK', value: '2BHK' },
    { label: '3BHK', value: '3BHK' },
];

const data2 = [
    { label: 'Flat', value: 'Flat' },
    { label: 'Apartment', value: 'Apartment' },
    { label: 'Row House', value: 'Row House' },
];
const data3=[
    { label: 'Yes', value: 'Yes1' },
    { label: 'No', value: 'No' },
    
];
const data4 = [
    { label: 'With Furniture', value: 'With' },
    { label: 'WithOut Furniture', value: 'Without' },

];

// const [isSelected, setSelection] = useState(false);

const RentS1 = ({navigation}) =>{

    const ref = firebase.firestore().collection('HouseData');
    const [addLocation,setAddLocation]=useState('');
    const [addBHK, setAddBHK] = useState('');
    const [addType, setAddType] = useState('');
    const [addBachelor, setAddBachelor] = useState('');
    const [addFurniture, setAddFurniture] = useState('');
    const [addPrice, setAddprice] = useState('');
    const [addMobileNo, setAddMobileNo] = useState('');
    const [addTitle, setAddTitle] = useState('');
    const [image, setImage] = useState(null);

    // Pick an image from user's device
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        
        if (!result.cancelled) {
            setImage(result.uri);
        }
    };
    const addField=()=>{

        const data={
            location:addLocation,
            bhk:addBHK,
            type:addType,
            bachelor:addBachelor,
            furniture:addFurniture,
            price:addPrice,
            mobile:addMobileNo,
            title:addTitle,
            img:image
        };
        ref
        .add(data)
        .then(()=>{

            setAddLocation('');
            setAddBHK('');
            setAddType('');
            setAddBachelor('');
            setAddFurniture('');
            setAddprice('');
            setAddMobileNo('');
            setAddTitle('');
            setImage('');
            Keyboard.dismiss();
            // donescreen();
        })
        .catch((error)=>{
            alert(error);
        })
    }
    return(
    <SafeAreaView className=" justify-center items-start py-4 left-3 ">
        {/* Header */}

        <View className="flex-row space-x-7"> 
                <ArrowLeftIcon size={30} color={'#000000'} onPress={() => navigation.navigate("Home")} />
                <Text className="font-bold text-xl">Rent my Property</Text>
        </View>

        {/* Form */}
        <ScrollView showsVerticalScrollIndicator={false} className=" top-2">

        <View className="flex-col space-y-4 py-4 px-4 justify-center items-start">
        {/* location */}
            <Text className="text-xl">Location</Text>
                <TextInput placeholder="Address.." 
                onChangeText={(location)=>setAddLocation(location)} 
                value={addLocation}
                keyboardType="default" className=" py-3 border-2 rounded-2xl border-gray-500 w-[330] h-[50] px-3 text-base"/>
        {/* BHK */}
            <Text className="text-xl">1BHK /2BHK /3BHK</Text>
                {/* <DropdownComponent menu={data1} name={'1BHK'} 
                        onChangeText={(bhk) => setAddBHK(bhk)}
                        value={addBHK}
                /> */}
                    <TextInput placeholder="1BHK /2BHK /3BHK"
                        onChangeText={(bhk) => setAddBHK(bhk)}
                        value={addBHK}
                        keyboardType="default" className=" py-3 border-2 rounded-2xl border-gray-500 w-[330] h-[50] px-3 text-base" />
        {/* Type */}
            <Text className="text-xl">Flat /Apartment /Row  house</Text>
                {/* <DropdownComponent menu={data2} name={'Flat'} 
                        onChangeText={(type) => setAddType(type)}
                        value={addType} /> */}
                    <TextInput placeholder="Flat /Apartment /Row  house"
                        onChangeText={(type) => setAddType(type)}
                        value={addType} 
                        keyboardType="default" className=" py-3 border-2 rounded-2xl border-gray-500 w-[330] h-[50] px-3 text-base" />
        {/* Bachelor */}
            <Text className="text-xl">Is Bachelor is Allowed</Text>
                {/* <DropdownComponent menu={data3} name={'Yes'} 
                        onChangeText={(bachelor) => setAddBachelor(bachelor)}
                        value={addBachelor}
                /> */}
                    <TextInput placeholder="Yes /No"
                        onChangeText={(bachelor) => setAddBachelor(bachelor)}
                        value={addBachelor}
                        keyboardType="default" className=" py-3 border-2 rounded-2xl border-gray-500 w-[330] h-[50] px-3 text-base" />
        {/* furniture */}
            <Text className="text-xl">With /Without Furnitures</Text>
                {/* <DropdownComponent menu={data4} name={'With Furniture'}
                        onChangeText={(furniture) => setAddFurniture(furniture)}
                        value={addFurniture} /> */}
                    <TextInput placeholder="With /Without"
                        onChangeText={(furniture) => setAddFurniture(furniture)}
                        value={addFurniture} 
                        keyboardType="default" className=" py-3 border-2 rounded-2xl border-gray-500 w-[330] h-[50] px-3 text-base" />
        {/* rent amount */}
            <Text className="text-xl">Rent amount</Text>
                <TextInput placeholder="RS 0000" keyboardType="default" className=" py-3 border-2 rounded-2xl border-gray-500 w-[330] h-[50] px-3 text-base"
                    onChangeText={(price) => setAddprice(price)}
                    value={addPrice} />
        {/* mobile no */}
            <Text className="text-xl">Mobile Number</Text>
                <TextInput placeholder="+91 00000 00000" keyboardType="phone-pad" className=" py-3 border-2 rounded-2xl border-gray-500 w-[330] h-[50] px-3 text-base"
                        onChangeText={(mobile) => setAddMobileNo(mobile)}
                        value={addMobileNo} />
        {/* images */}
            <Text className="text-xl">Upload Images</Text>
        <View>
            <TouchableOpacity className="h-[200] w-[330] border-2 border-gray-500 rounded-2xl justify-center items-center" onPress={pickImage}>
            <PhotoIcon size={30} color={'#000000'} className="top-10"/>
                            {image && <Image source={{ uri: image }} style={{ width: 330, height: 200, borderRadius: 16, borderWidth: 2, borderColor: "#6b7280",bottom:15 }} />}
            </TouchableOpacity>
        </View>
                    {/* <Button title="Save data" onPress={saveData} /> */}
        {/* title */}
            <Text className="text-xl">Ad Title</Text>
                <TextInput placeholder="Title" keyboardType="default" className=" py-3 border-2 rounded-2xl border-gray-500 w-[330] h-[50] px-3 text-base" 
                        onChangeText={(title) => setAddTitle(title)}
                        value={addTitle}
                />

                {/* <View><Text>Water</Text> </View> */}
        </View>

        <View className="justify-center items-center py-16">
            <Buttons btn_text={"                             Post Ad                             "} on_press={addField} />
        </View>
        </ScrollView>
    </SafeAreaView>
    )
}
export const donescreen = ()=>{
    return(
        <View className="bg-indigo-400 justify-center items-center">
            <Text className="text-sm">Your ad is successfully posted!</Text>
        </View>
    )
}
export default RentS1; 