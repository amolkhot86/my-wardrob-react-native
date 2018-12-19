'use strict';

import React, { Component } from 'react';
import {Image, Text, View} from 'react-native';
import Camera from 'react-native-camera';
import styles from './CameraScreen.style.js';
type Props = {};

export default class CameraScreen extends Component<Props> {
    constructor(props){
        super(props);
    }
    render() {
        return (
          <View style={styles.container}>
                <Camera ref={cam => { this.camera = cam; }} style={styles.preview} aspect={Camera.constants.Aspect.fill}>
                    <Text style={styles.capture} onPress={this.takePicture.bind(this)}> [CAPTURE] </Text>
                </Camera>
          </View>
        );
    }
    takePicture() { this.camera.capture() .then((data) => console.log(data)) .catch(err => console.error(err)); }
}