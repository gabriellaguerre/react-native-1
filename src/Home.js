import React from 'react'
import { Text, View, Pressable, StyleSheet } from 'react-native'

function Home({navigation}) {

    const onPressHandler = () => {
      navigation.navigate("Screen_B" )
    }
  
    return (
      <View style={styles.body}>
        <Text style={styles.text}>Screen A</Text>
        <Pressable
        onPress={onPressHandler}
        style={({pressed})=>({backgroundColor: pressed? 'green':'red'})}>
        <Text style={styles.text}>Go To Screen B</Text>
        </Pressable>
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



