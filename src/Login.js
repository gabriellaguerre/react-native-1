import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function Login () {

    return (
      <View style={styles.body}>
        <Text> textInComponent </Text>
      </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'blue'
    }
})

export default Login;