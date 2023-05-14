import { Text, StyleSheet, View, TextInput ,FlatList} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect, useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MagnifyingGlassIcon, MapPinIcon } from 'react-native-heroicons/solid';
import ViewComp from '../Component/HouseComp';
import HouseComp from '../Component/HouseComp';
import { ScrollView } from 'react-native-gesture-handler';
import FilterComp from '../Component/FilterComp';
import { firebase } from "../Database/config";
import { VirtualizedList } from 'react-native-web';

const SearchView = ({navigation}) => {
    const tnavigation = useNavigation();
    useLayoutEffect(() => {

        tnavigation.setOptions({
            headerShown: false,
        });
    }, []);

    const ref = firebase.firestore().collection('HouseData');
    const [House, setHouse] = useState([]);

    useEffect(()=>{
        async function hdata() {
        ref
        .onSnapshot(
            querySnapshot=>{
                const House = []
                querySnapshot.forEach((doc)=>{
                    const{
                        location,
                        bhk,
                        type,
                        bachelor,
                        furniture,
                        price,
                        mobile,
                        title,
                        img
                    }=doc.data()
                    House.push({
                        id:doc.id,
                        location,
                        bhk,
                        type,
                        bachelor,
                        furniture,
                        price,
                        mobile,
                        title,
                        img
                    })
                })
                setHouse(House)
            }
        )}
        hdata()
    },[])

    return (
        <SafeAreaView className=" justify-center items-center py-5 ">
        {/* Search bar */}
            <View className=" bg-white w-11/12 h-12 rounded-2xl flex-row space-x-4  items-center px-5 drop-shadow-2xl" >
                <MagnifyingGlassIcon size={28} color={'#000000'} />
                <TextInput placeholder="Search By Locations" keyboardType="default" className=" text-lg" />
            </View>

            {/* Filters */}
            {/* <View> */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="py-3 px-4">
            <FilterComp Name={"Near By"}/>
                <FilterComp Name={"Self House"} />
                <FilterComp Name={"Flat"} />
                <FilterComp Name={"Apartment"} />
                <FilterComp Name={"Row House"} />
                <FilterComp Name={"Near By"} />
            </ScrollView>
            {/* </View> */}
            {/* View Component */}
            {/* <View> */}
                {/* <ScrollView className="" showsVerticalScrollIndicator={false}>  */}
                {/* <HouseComp Price={"RS.5000"} Discrp={"1BHK  |  Apartment"} on_press={() => navigation.navigate("Viewhouse")} /> */}
                {/* <HouseComp Price={"RS.4000"} Discrp={"2BHK  |  Flat"} on_press={() => navigation.navigate("Signin")} />
                <HouseComp Price={"RS.5000"} Discrp={"1BHK  |  Apartment"} on_press={() => navigation.navigate("Signin")} />
                <HouseComp Price={"RS.4000"} Discrp={"2BHK  |  Flat"} on_press={() => navigation.navigate("Signin")} /> */}
            {/* </ScrollView> */}
            {/* <VirtualizedList> */}
            <FlatList
                vertical
                showsVerticalScrollIndicator={false}
                className=" bottom-9 top-0 "
                // style={{height:'100%'}}
                data={House}
                numColumns={1}
            // const hprice=item.price;
                renderItem={({item})=>(
                    <View className="py-0">
                        <HouseComp price={item.price} title={item.title}
                        mobile={item.mobile} location={item.location}
                        bhk={item.bhk} type={item.type} img={item.img}
                        bachelor={item.bachelor} furniture={item.furniture} 
                        // on_press={() => {navigation.navigate("Viewhouse"
                            // , {
                            //     // img,
                            //     price,
                            //     title,
                            //     address,
                            //     mobile,
                            //     bhk,
                            //     type,
                            //     furniture,
                            //     bachelor
                            // }
                            // );
                            // }}
                             />
                    </View>
                )}

            />

            
            {/* </VirtualizedList> */}
            {/* </View> */}


        </SafeAreaView>
    );
};
export default SearchView;
