import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Text, View, StyleSheet, Button } from 'react-native'

function Home({navigation}) {
  const [name, setName]= useState('')

  useEffect(()=> {
    getData()
  },[])

  const logout = () => {
    try {
      AsyncStorage.removeItem('UserName')
      setName('')
      navigation.navigate('Login')

    } catch (error) {
      console.log(error)
    }
  }

  const getData = () => {
    try {
      AsyncStorage.getItem('UserName')
      .then(value => {
        if(value != null) {
          setName(value)
        } 
      })
    } catch (error) {
      console.log(error)
    }
  }
  
    return (
      <View style={styles.body}>
        <Text style={styles.text}>Welcome {name}</Text>
        <Button 
        title='Logout'
        color='red'
        onPress={logout}/>
        
      </View>
    )
  }

  const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      },
      text: {
        fontSize: 40,
        fontWeight: 'bold',
        margin: 10,
      }
})
export default Home



