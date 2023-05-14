import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const FilterComp = ({ on_press, Name, Icon}) => {
    return (
        // className="justify-center max-w-xs h-52 rounded-2xl bg-indigo-300 relative"
        <TouchableOpacity style={{ justifyContent: 'center', width:'auto', backgroundColor: '#8D72E1', height: 30, borderRadius: 9, marginHorizontal:5 ,marginVertical:13 }}
            onPress={on_press}
        >
            <Text className=" text-sm text-white px-3" >{Name}</Text>
            {/* <Text className="text-lg text-white top-16 px-4">{Discrp}</Text> */}


        </TouchableOpacity>
    )
}

export default FilterComp;