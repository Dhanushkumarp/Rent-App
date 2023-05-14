import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/Home';
import SearchScreen from '../Screens/SearchScreen';
import WishlistScreen from '../Screens/Wishlist';
import ProfileScreen from '../Screens/Profile';
import React from 'react';
import { View ,Text, TouchableOpacity} from 'react-native';
import { HomeIcon, MagnifyingGlassIcon,HeartIcon,UserIcon} from 'react-native-heroicons/solid'
const Tab = createBottomTabNavigator();

const Tabs = () =>{
return(
    <Tab.Navigator 
    screenOptions={{ 
        tabBarShowLabel:false,
        
        tabBarStyle:
         { 
            postion: "absolute",
            backgroundColor:'#8D72E1',
            height:65,
            borderRadius:100,
            bottom:25,
            width:370,
            alignItems:'center',
            justifyContent:'center',
            left:10,
            shadowOffset:90
             }, 
         }}
    // tabBarOptions={{
    //     showLabel:false,
    // }}
    >   
        <Tab.Screen name="Home" component={HomeScreen} options={
            {
                tabBarIcon :({focused})=>(
                    <View className="justify-center  items-center  top-10">
                    {/* <TouchableOpacity> */}
                        <HomeIcon size={30} color={'#FFFFFF'} />
                    {/* </TouchableOpacity> */}
                    </View>
                ),
            }
        }/>
        <Tab.Screen name="Search" component={SearchScreen} options={
            {
                tabBarIcon:({focused})=>(
                    <View className="justify-center  items-center  top-10">
                        <MagnifyingGlassIcon size={30} color={'#FFFFFF'}/>
                    </View>
                ),
            }
        }/>
        <Tab.Screen name="WishList" component={WishlistScreen} options={
            {
                tabBarIcon:({focused})=>(
                    <View className="justify-center  items-center  top-10">
                        <HeartIcon size={30} color={'#FFFFFF'}/>
                    </View>
                ),
            }
        }/>
        <Tab.Screen name="Profile" component={ProfileScreen} options={
            {
                tabBarIcon:({focused})=>(
                    <View className="justify-center  items-center  top-10">
                        <UserIcon size={30} color={'#FFFFFF'} />
                    </View>
                ),
            }
        }/>
    </Tab.Navigator>
);
};
export default Tabs;