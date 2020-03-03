import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Style from './LoginStyle';


class Login extends Component {



    render(){
        return (

            <View Style={Style.container}>
                <Text style={Style.text}>{'Son project Testing'}</Text>
            
            </View>
        );
    }

}
export default Login;