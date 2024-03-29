import React, { useState, useEffect } from 'react'
// import AsyncStorage from '@react-native-async-storage/async-storage'
import {Alert, ScrollView} from 'react-native'
import { Text, View, StyleSheet, Button, TextInput } from 'react-native'
import SQLite from 'react-native-sqlite-storage'
import { useSelector,useDispatch } from 'react-redux';

const db = SQLite.openDatabase({
    name: 'MangoDB',
    location: 'default',
},
()=>{},
error=>{console.log(error)}
);


function Home({navigation}) {
  const persons = useSelector(state => state.users)
  const dispatch = useDispatch();
  console.log(persons, "IN HOME COMPONENT")
  // const [name, setName]= useState('')
  // const [age, setAge] = useState('')
 


  useEffect(()=> {
    // getData()
  },[])

  const logout = async() => {
    try {
      // AsyncStorage.removeItem('UserData')
      db.transaction((tx)=>{
        tx.executeSql(
          "DELETE FROM Users",
          [],
          ()=>{navigation.navigate('Login')},
          (error) => {
            console.log("Error deleting data: ", error)
          }
        )
      })      
    } catch (error) {
      Alert.alert('Error!', 'An unexpected error occurred.');
    }
  }

  // const getData = () => {
  //   try {
  //     // AsyncStorage.getItem('UserData')
  //     // .then(value => {
  //     //   if(value != null) {
  //     //     let user = JSON.parse(value)
  //     //     setName(user.Name)
  //     //     setAge(user.Age)
  //     //   } 
  //     // })
  //     db.transaction((tx)=> {
  //       tx.executeSql(
  //         "SELECT Name, Age FROM Users",
  //         [],
  //         (tx, results)=>{
  //           let len = results.rows.length;
  //           if(len > 0) {
  //             let userName = results.rows.item(0).Name
  //             let userAge = results.rows.item(0).Age
  //             dispatch(setName(name))
  //             dispatch(setAge(age))
  //           }
  //         }
  //       )
  //     })
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  const updateData = async () => {
    if(name.length===0){
        Alert.alert('Warning!', 'Please enter your name')

    } else  {
        try {

          // let user = {
          //   Name: name,
          // }
          //   await AsyncStorage.mergeItem('UserData', JSON.stringify(user))
            db.transaction((tx)=>{
              tx.executeSql(
                "UPDATE Users SET Name=?",
                [name],
                () => { Alert.alert('Success!', 'Your data has been updated.')},
                error => {console.log(error)}
                )
            })
            
        } catch (error) {
            console.log(error)   
        }

    }
}
  
    return (
      <View style={styles.body}>
        <Text style={styles.text}>Welcome </Text>
        <ScrollView style={styles.text}>
          {
            persons.map((person)=> {
              return(
                <View key={person.id}> 
                  <Text>Name: {person.name}, Age: {person.age}</Text>
                </View>
              )
            })

          }
        </ScrollView>
        {/* <TextInput 
          style={styles.input}
          placeholder='Enter your new name'
          value={name}
          onChangeText={(value)=>dispatch(setName(value))}
          /> */}
        <View style={styles.updateButton}>
        {/* <Button 
        title='update'
        color='orange'
        onPress={updateData}
        /> */}
        </View>
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
    },
    updateButton: {
      marginBottom: 10,
    }
})
export default Home



