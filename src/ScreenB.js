import React from 'react'
import { Text, StyleSheet, View, Pressable } from 'react-native'

function ScreenB({navigation}) {

    const onPressHandlerBack = () => {
      // navigation.navigate("Screen_A" )
      navigation.navigate("Screen_A" )
    }
  
    return (
      <View style={styles.body}>
        <Text style={styles.text}>Screen B</Text>
        <Pressable
        onPress={onPressHandlerBack}
        style={({pressed})=>({backgroundColor: pressed? 'green':'red'})}>
        <Text style={styles.text}>Go To Screen A</Text>
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

export default ScreenB
