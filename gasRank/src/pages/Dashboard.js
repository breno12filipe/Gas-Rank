import React, { Profiler } from 'react';
import { View, TextInput, Button, StyleSheet, SafeAreaView, Text, Image} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import {MainMap} from './MainMap';
import { Settings } from './Settings';
import { GasPage } from './GasPage';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


function DashboardNavigation(){
    return(
        <NavigationContainer independent = {true}>
            <Tab.Navigator 
                initialRouteName={MainMap}
                tabBarOptions={{
                    activeTintColor: '#00acee',
                    inactiveTintColor: 'gray',
                    style: {
                        backgroundColor: '#111121',
                        borderTopColor: 'transparent'
                    },
                    tabStyle: {
                        marginTop: 15,
                    }
                }}>
                <Tab.Screen name="GasPage" style={styles.textPage} component={MainMap} />
                <Tab.Screen name="Configurações" style={styles.textPage} component={Settings} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    textPage: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#00acee'
    }
})

export default DashboardNavigation
