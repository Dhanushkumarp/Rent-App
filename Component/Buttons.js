import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const Buttons = ({ on_press, btn_text }) => {
    return (
        <TouchableOpacity style={{ justifyContent: 'center', width: '95%', backgroundColor: '#8D72E1', height: 56, borderRadius: 16 }}
            onPress={on_press}
        >
            <Text style={{ fontSize: 18, letterSpacing: 1.5, textAlign: 'center', position: 'relative', color:'#ffffff' }} >{btn_text}</Text>


        </TouchableOpacity>
    )
}

export default Buttons;

const styles = StyleSheet.create({})