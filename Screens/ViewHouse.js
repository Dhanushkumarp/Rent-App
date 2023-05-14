import { Text, View, Linking,TouchableOpacity,Image,Share } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftIcon ,ShareIcon} from 'react-native-heroicons/solid';
import { HeartIcon} from 'react-native-heroicons/outline';
import { ScrollView } from 'react-native-gesture-handler';
import Buttons from '../Component/Buttons';
import { useRoute } from '@react-navigation/native';
import FilterComp from '../Component/FilterComp';
const ViewHouse = ({navigation}) =>{
    const route = useRoute();
    dialCall = (number) => {
        let phoneNumber = '';
        let mobile = route.params.mobile;
        if (Platform.OS === 'android') {
            phoneNumber = 'tel:${number}';
        }
        else {
            phoneNumber = 'telprompt:${number}';
        }
        Linking.openURL(phoneNumber);
    };
    const onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    'React Native | A framework for building native apps using React',
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            Alert.alert(error.message);
        }
    };
    return(
        <SafeAreaView className="  flex-1">
        {/* Header */}
            <View className="flex-row space-x-6 px-4 py-4 bg-white h-[70]">
                <ArrowLeftIcon size={30} color={'#000000'} onPress={() => navigation.navigate("SearchView")} />
                <View className=" px-56 flex-row space-x-5">
                <TouchableOpacity onPress={onShare}>
                <ShareIcon size={30} color={'#000000'}/>
                </TouchableOpacity>
                <HeartIcon size={30} color={'#000000'}/>
                </View>
            </View>
            {/* card view */}
            <View>
                {/* <ScrollView vertical showsVerticalScrollIndicator={false} className="px-4">
                    <Image
                        source={}
                    />
                </ScrollView> */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="space-x-3">
            <Image
            className="h-[340] w-[390]"
                source={require('../assets/image/onebhk.jpg')}
            />
                    <Image
                        className="h-[340] w-[390]"
                        source={require('../assets/image/twobhk.jpg')}
                    />
            </ScrollView>
            <View className=" px-5 py-5">
                    <Text className="text-2xl">RS.{route.params.price} per month</Text>
                    <Text className="text-2xl">{route.params.title}</Text>
                    <ScrollView horizontal className="right-1">
                    <FilterComp Name={"water"} />
                    <FilterComp Name={"24/7 service"}/>
                    <FilterComp Name={"24/7 elecricity"} />
                    </ScrollView>
                    <View className="py-2">
                        <Text className="text-xl">{route.params.location}</Text>
                        <Text className="text-xl">{route.params.bhk}</Text>
                        <Text className="text-xl">{route.params.type}</Text>
                        <Text className="text-xl">Bachelor is Allowed ? {route.params.bachelor}</Text>
                        <Text className="text-xl">{route.params.furniture} furniture</Text>
                    </View>
            </View>
            {/* button */}
                
            <View className="items-center bottom-29">
                    <Buttons btn_text={'MAKE CALL'} on_press={() => { Linking.openURL(`tel:${route.params.mobile}`); }} />
            </View>

            </View>

        </SafeAreaView>
    )
}

export default ViewHouse;