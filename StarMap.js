import React, { Component, useState } from 'react';
import { Text, View, TextInput, Button, WebView } from 'react-native';

export default class StarMapScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: '28.704060', // Default latitude
            longitude: '77.102493', // Default longitude
        };
    }

    render() {
        const { latitude, longitude } = this.state;

        const apiUrl = `https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true`;

        return (
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, flex: 1, marginRight: 10 }}
                        placeholder="Enter Latitude"
                        keyboardType="numeric"
                        value={latitude}
                        onChangeText={(text) => this.setState({ latitude: text })}
                    />
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, flex: 1 }}
                        placeholder="Enter Longitude"
                        keyboardType="numeric"
                        value={longitude}
                        onChangeText={(text) => this.setState({ longitude: text })}
                    />
                </View>
                <WebView 
                scalesPageToFit={true}
                source={{ uri: apiUrl }} />
            </View>
        );
    }
}
