import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import Buttons from '../../Component/Buttons';
import { TextInput } from 'react-native-gesture-handler';

const RentS3 = ({ navigation }) => {
    return (
        <SafeAreaView className=" justify-center items-start py-4 left-3 ">
            {/* Header */}

            <View className="flex-row space-x-7">
                <ArrowLeftIcon size={30} color={'#000000'} onPress={() => navigation.navigate("Rents2")}/>
                <Text className="font-bold text-xl">Rent my Property</Text>
            </View>

            {/* image & Mobile number */}
            <View className="py-10 justify-center px-4">
                <Text className="text-xl py-3"> Title</Text>
                <TextInput placeholder="Ad title" keyboardType="default" className=" py-3 border-2 rounded-2xl border-gray-500 w-[330] h-[50] px-3 text-base" />
            </View>
            <View className="justify-center items-center top-[450]">
                <Buttons btn_text={"                           Post Ad                           "} on_press={() => navigation.navigate("Rentf")} />
            </View>
        </SafeAreaView>
    )
}

export default RentS3;