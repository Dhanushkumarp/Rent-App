import 'react-native-gesture-handler';
import ProfileScreen from '../Screens/Profile';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { signOut } from 'firebase/auth';
import { auth } from '../Database/FirebaseDB';
import Buttons from './Buttons';


const MDrawer = () => {
  const handleLogout=async()=>{
    await signOut(auth);
  }
    return (
      <View className="justify-center items-center top-[500]">
        <Text>MENU</Text>
        <View className="bg-slate-400 h-[50] w-[100]">
        <TouchableOpacity onPress={handleLogout}>
          <Text className="text-xl items-center px-5 py-2">Logout</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
};
export default MDrawer;