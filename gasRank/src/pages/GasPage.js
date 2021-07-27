import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

export function GasPage() {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.textPage}>Página dos Postos</Text>
            <Text style={styles.textPage1}>Em Breve!</Text>
            <Text style={styles.emoji}>🚀</Text>
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
    }
})