'use strict';

import React, { Component } from 'react';
import DialogInput from 'react-native-dialog-input';
import {Image, Text, View, TouchableNativeFeedback,Alert} from 'react-native';
import styles from './IntroScreen.style.js';
import {UserSchema} from '../../database/allSchemas'

const Realm = require('realm');

type Props = {};

export default class IntroScreen extends Component<Props> {
    constructor(props){
        super(props);
        this.state =  {
            userName:'Default',
            isDialogVisible:false
        }
    }
    componentWillMount(){
        this._fetchUsers();
    }
    render() {
        return (
          <View style={styles.container}>
                <Image source={require('../images/logo_with_text.png')} style={styles.logo}/>
                <Image source={require('../images/intro_screen_bg.png')} style={styles.intro_image}/>
                <Text style={styles.welcome_text}>Welcome</Text>
                <TouchableNativeFeedback onPress={() => this._showAddUserDialog()} background={TouchableNativeFeedback.SelectableBackground()}>
                    <Text style={styles.user_name_text}>{this.state.userName}</Text>
                </TouchableNativeFeedback>
                <DialogInput isDialogVisible={this.state.isDialogVisible}
                    title={"Add User"}
                    message={"Enter your Name"}
                    hintInput ={"Enter Name"}
                    >
                </DialogInput>
          </View>
        );
    }
    _launchNextScreen() {
        const { navigate } = this.props.navigation;
        navigate('CameraScreen');
    }
    _showAddUserDialog(){
        this.setState({
            isDialogVisible:true
        });
    }
    _fetchUsers(){
        Realm.open({schema: [UserSchema]}).then(realm => {
            if(realm.objects('User').length>0){
                this._setCurrentUser(realm.objects('User'));
            }else{
                // this._addUser(realm);
            }
        });
    }
    _addUser(newUserName){
        alert(newUserName);
        // realm.write(() => {
        //     realm.create('User', {userID: 1, userName: 'Guest', isLastUser: true});
        // });
        // this._setCurrentUser(realm.objects('User'));
    }
    _setCurrentUser(userObject){
        let currentUser = userObject.filtered('isLastUser = true');
        if(currentUser.length>0)
            this.setState({ userName: currentUser[0].userName, isDialogVisible:false});
        else
            this.setState({ userName: 'INVALID', isDialogVisible:false});
    }
}