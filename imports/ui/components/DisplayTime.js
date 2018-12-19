'use strict';

import React, { Component } from 'react';
import {Text,StyleSheet} from 'react-native';

type Props = {};

export default class DisplayTime extends Component<Props>{
    constructor(props){
        super(props);
        this.state = { currentTime:new Date() };        
    }
    render() {
        return (
            <Text style={styles.welcome_text}>{((this.state.currentTime.getHours()>12)?("0"+(this.state.currentTime.getHours()-12)).slice(-2):("0"+this.state.currentTime.getHours()).slice(-2))+":"+("0"+this.state.currentTime.getMinutes()).slice(-2)+":"+("0"+this.state.currentTime.getSeconds()).slice(-2)+((this.state.currentTime.getHours()>=12)?" PM":" AM")}</Text>
        );
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
            currentTime: new Date()
            });
        },1000);
    }
}

const styles = StyleSheet.create({
    welcome_text:{
        fontSize:35,
        textAlign:"center",
        color:"#000000"
      }
});
