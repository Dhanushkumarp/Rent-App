import { Text, View ,Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Buttons from './Buttons';

const HouseVcomp = ({img,price,title,address,mobile,bhk,type,furniture,bachelor}) => {
    return (
        <SafeAreaView >
            <ScrollView vertical showsVerticalScrollIndicator={false} className="px-4">
                <Image
                    source={img}
                />
            </ScrollView>
            <View className=" px-4">
            <Text>{title}</Text>
            <Text>{price}</Text>    
            <Text>{address}</Text>
            <Text>{bhk}</Text>
            <Text>{type}</Text>
            <Text>Bachelor is Allowed ? {bachelor}</Text>
            <Text>{furniture} furniture</Text>
            </View>
        <View className="items-center py-[490]">
        <Buttons btn_text={'MAKE CALL'} />
        </View>
        </SafeAreaView>
    )
}

export default HouseVcomp;