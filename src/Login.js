import { NavigationContainer } from '@react-navigation/native'
import React, {useState} from 'react'
import {Alert} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native'


function Login ({navigation}) {
    const [name, setName] = useState('')

    const setData = async () => {
        if(name.length===0){
            Alert.alert('Warning!', 'Please enter your name')

        } else  {
            try {
                await AsyncStorage.setItem('UserName', name)
                navigation.navigate('Home')
            } catch (error) {
                console.log(error)   
            }

        }
    }

    return (
      <View style={styles.body}>
        <Image 
            style={styles.logo}
            source={require('../assets/login.png')}/>
        <Text style={styles.text}>Async Storage</Text>
        <TextInput 
            style={styles.input}
            placeholder='Enter your name'
            onChangeText={(value)=> setName(value)}/>
        <Button 
            title='Login'
            color= 'green'
            onPress={setData}
            />
      </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'blue'
    },
    logo: {
        width: 100,
        height: 100,
        margin: 20
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
    input: {
        width: 300,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 10,
        backgroundColor: 'white',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 90,
        marginBottom: 10,
    }
})

export default Login;