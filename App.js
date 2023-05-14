import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/Home';
import Tabs from './Component/bootomtab';
import { NativeWindStyleSheet } from "nativewind";
import MDrawer from './Component/MenuDrawer';
import RootStackScreen from './Screens/RootStackScreen';
import SplashScreen from './Screens/SplashScreen';
import SignInScreen from './Screens/Signin';
import SignUpScreen from './Screens/Signup';
import SearchView from './Screens/SearchViewScreen';
import RentS1 from './Screens/Addhouse/RentS1';
import RentS2 from './Screens/Addhouse/RentS2';
import RentS3 from './Screens/Addhouse/RentS3';
import ViewHouse from './Screens/ViewHouse';
import useAuth from './Component/userhooks';


// NativeWindStyleSheet.setOutput({
//   default: "native",
// });
const Stack = createNativeStackNavigator();
const App = () => {
  const{user}=useAuth();
  if(user){
    return (
      <NavigationContainer>
        {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator> */}
        {/* <Tabs/> */}
        {/* <RootStackScreen/> */}
        {/* <MDrawer/> */}
        {/* <NavigationContainer> */}
        <Stack.Navigator screenOptions={{ headerShown: false }} >
          <Stack.Screen name="Tab" component={Tabs} />
          <Stack.Screen name="Menu" component={MDrawer} />
          <Stack.Screen name="SearchView" component={SearchView} />
          <Stack.Screen name="Rents1" component={RentS1} />
          <Stack.Screen name="Rents2" component={RentS2} />
          <Stack.Screen name="Rents3" component={RentS3} />
          <Stack.Screen name="Viewhouse" component={ViewHouse} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  else{
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator> */}
      {/* <Tabs/> */}
      {/* <RootStackScreen/> */}
      {/* <MDrawer/> */}
      {/* <NavigationContainer> */}
        <Stack.Navigator screenOptions={{ headerShown: false }} >
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Signin" component={SignInScreen} />
          <Stack.Screen name="Signup" component={SignUpScreen} />
          <Stack.Screen name="Tab" component={Tabs}/>
          <Stack.Screen name="Menu" component={MDrawer}/>
          <Stack.Screen name="SearchView" component={SearchView} />
          <Stack.Screen name="Rents1" component={RentS1} />
          <Stack.Screen name="Rents2" component={RentS2} />
          <Stack.Screen name="Rents3" component={RentS3} />
          <Stack.Screen name="Viewhouse" component={ViewHouse}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}
}
export default App