import React from 'react';
import { View, StyleSheet} from 'react-native';

import MapView from 'react-native-maps';

// Add marker into the map! by HeadMaster
// https://stackoverflow.com/questions/29412753/how-do-i-set-a-marker-in-mapview-of-react-native

export function MainMap() {
    return(
        <View style={styles.container}>
                <View style={styles.content}>
                    <MapView
                        style={styles.map}
                        initialRegion={{
                            latitude: -15.811483,
                            longitude: -47.900581,
                            latitudeDelta: 0.0134,
                            longitudeDelta: 0.0431
                        }}
                        showsUserLocation
                        loadingEnabled
                    >
                    <MapView.Marker
                        coordinate={{
                                latitude: -15.812257,
                                longitude: -47.900322,
                                latitudeDelta: 0.0134,
                                longitudeDelta: 0.0431,
                            }}
                        title={'Posto shell'}
                        description = {'Gasolina: 5,51'}
                        
                    />
                    <MapView.Marker
                        coordinate={{
                                latitude: -15.813692,
                                longitude: -47.902211,
                                latitudeDelta: 0.0134,
                                longitudeDelta: 0.0431,
                            }}
                        title = {'Posto Ipiranga'}
                        description = {'Gasolina: 5,44'}
                            
                    />
                    <MapView.Marker
                        coordinate={{
                                latitude: -15.815715,
                                longitude: -47.899528,
                                latitudeDelta: 0.0134,
                                longitudeDelta: 0.0431,
                            }}
                            title={'Posto BR'}
                            description = {'Gasolina: 5,64'}
                    />
                    </MapView>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
      },
      map: {
        width: '100%',
        height: '95%',
        marginBottom: 100
    }
});

