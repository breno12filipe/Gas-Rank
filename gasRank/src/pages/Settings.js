import React, { useState }from 'react';
import { SafeAreaView, Text, StyleSheet, Button} from 'react-native';
import {Picker} from '@react-native-picker/picker'

export function Settings() {
    const [selectedGasValue, setSelectedGasValue] = useState("alcool");
    const [selectedRangeValue, setSelectedRangeValue] = useState("10km");
    return(
        <SafeAreaView style={styles.picker}>
            <Text style={styles.testPage}>Tipo de combustível que deseja ver:</Text>
            <Picker 
                style={{ height: 50, width: 150 }} 
                selectedGasValue={selectedGasValue}
                onValueChange={(itemValue, itemIndex) => setSelectedGasValue(itemValue)} >
                <Picker.Item label="Alcool" value="alcool" />
                <Picker.Item label="Gasolina" value="gasolina" />
                <Picker.Item label="Diesel" value="diesel" />
                <Picker.Item label="Etanol" value="etanol" />
            </Picker>

            <Text style={styles.testPage}>Mostrar postos de combustível no raio de:</Text>
            <Picker 
                style={{ height: 50, width: 150 }} 
                selectedRangeValue={selectedRangeValue}
                onValueChange={(itemValue, itemIndex) => setSelectedRangeValue(itemValue)} >
                <Picker.Item label="15 Km" value="15km" />
                <Picker.Item label="10 Km" value="10km" />
                <Picker.Item label="5 Km" value="5km" />
            </Picker>

            <Button
            style={styles.logon_btn}
            title="Confirmar"
            />
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#111121',
    },
    textPage: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#00acee'
    },
    textPage1: {
        fontSize: 24,
        color: '#FFFFFF'
    },
    emoji: {
        fontSize: 32,
        marginTop: 10
    },
    picker: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 24,
        backgroundColor: '#FFFFFF',    
    }
})