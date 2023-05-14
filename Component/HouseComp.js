import React, { useState } from 'react'
import { Image, Text, View, TouchableOpacity } from 'react-native'
import HouseVcomp from '../Component/HouseView';
import { ArrowLeftIcon, ShareIcon } from 'react-native-heroicons/solid';
import { HeartIcon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';

const HouseComp = ({ on_press, price,img, title, location, mobile, bhk, type, furniture, bachelor }) => {
    const navigation=useNavigation();
    const [Price, setPrice] = useState('');
    return (
        // className="justify-center max-w-xs h-52 rounded-2xl bg-indigo-300 relative"
        
        <TouchableOpacity 
        // className="my-0"
            onPress={()=>{navigation.navigate("Viewhouse"
            , {
                img,
                price,
                title,
                location,
                mobile,
                bhk,
                type,
                furniture,
                bachelor
            })
            }}
        >   
            <Image
                style={{ justifyContent: 'center', width: 350,height: 214, borderRadius: 16 }}
                // className="h-[340] w-[340]"
                source={require('../assets/image/onebhk.jpg')}
                // source={img};
            />
            <View className=" bottom-16 bg-[#8D72E1] h-[64] w-[350] justify-center rounded-2xl">
            <Text className=" text-xl text-white  px-4" >RS {price}</Text>
            <Text className="text-lg text-white  px-4">{title} | {bhk} | {type}</Text>
            </View>


        </TouchableOpacity>
    )
}

export default HouseComp;