import {Text,View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import Buttons from '../../Component/Buttons';

const RentS2 = ({navigation}) =>{
    return(
        <SafeAreaView className=" justify-center items-start py-4 left-3 ">
            {/* Header */}

            <View className="flex-row space-x-7">
                <ArrowLeftIcon size={30} color={'#000000'} onPress={() => navigation.navigate("Rents1")} />
                <Text className="font-bold text-xl">Rent my Property</Text>
            </View>

            {/* image & Mobile number */}
            <View>
                <Text>Upload Images</Text>
                <Text>Enter Mobile Number</Text>
            </View>
            <View className="justify-center items-center top-[600]">
                <Buttons btn_text={"                             Next                              "} on_press={() => navigation.navigate("Rents3")} />
            </View>
        </SafeAreaView>
    )
}

export default RentS2;