import { NavigationContainer } from '@react-navigation/native'
import React, {useState,useEffect} from 'react'
import {Alert} from 'react-native'
// import AsyncStorage from '@react-native-async-storage/async-storage'
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native'
import SQLite from 'react-native-sqlite-storage'

const db = SQLite.openDatabase({
    name: 'MangoDB',
    location: 'default',
},
()=>{},
error=>{console.log(error)}
);

function Login ({navigation}) {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
   
    useEffect(()=>{
        createTable()
        getData()
    },[])

    const createTable = ()=> {
        db.transaction((tx)=>{
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS "
                +"Users "
                +"(ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Age INTEGER);"
            )
        })
    }
    const getData = () => {
        try {
          // AsyncStorage.getItem('UserData')
          // .then(value => {
          //   if(value != null) {
          //     let user = JSON.parse(value)
          //     setName(user.Name)
          //     setAge(user.Age)
          //   } 
          // })
          db.transaction((tx)=> {
            tx.executeSql(
              "SELECT Name, Age FROM Users",
              [],
              (tx, results)=>{
                let len = results.rows.length;
                console.log(len, 'IN LOGIN LEN')
                if(len > 0) {
                  let userName = results.rows.item(0).Name
                  let userAge = results.rows.item(0).Age
                  setName(userName)
                  setAge(userAge)
                }
              }
            )
          })
        } catch (error) {
          console.log(error)
        }
      }

    const setData = async () => {
        if(name.length===0 || age.length===0){
            Alert.alert('Warning!', 'Please enter your name')

        } else  {
            try {
                // let user = {
                //     Name: name,
                //     Age: age,
                // }
                // await AsyncStorage.setItem('UserData', JSON.stringify(user))
                await db.transaction(async (tx)=>{
                    await tx.executeSql(
                        "INSERT INTO Users (Name, Age) VALUES('"+name+"',"+age+")"
                    )
                })
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
        <Text style={styles.text}>SQLite Storage</Text>
        <TextInput 
            style={styles.input}
            placeholder='Enter your name'
            onChangeText={(value)=> setName(value)}/>
         <TextInput 
            style={styles.input}
            placeholder='Enter your age'
            onChangeText={(value)=> setAge(value)}/>
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
        fontSize: 20,
        marginBottom: 50,
    },
    input: {
        width: 300,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 10,
        backgroundColor: 'white',
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 10,
    }
})

export default Login;