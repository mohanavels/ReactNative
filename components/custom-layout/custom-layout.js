import React, { Component } from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';

export class CustomLayout extends Component {
   
    render() {
        const styles = StyleSheet.create({
            container: {
                flex: 1,
                flexDirection: "column",
                width: 310,
                display: "flex",
                flexWrap: "wrap"
            },
            innerLayer1: {
                backgroundColor: "red",
                height: 125,                
                flexGrow: 1
            },
            innerLayer2: {
                backgroundColor: "green",
                height: 125,
            }, 
            container2 : {
                flex: 1,
                flexDirection: "row",
                display: "flex",
                flexWrap: "wrap",
                flexGrow: 1
            },
            blueBox: {
                width: 100,
                height: 100,
                backgroundColor: "blue",
                marginRight: 5,
                marginBottom: 5
            }
        })
        return (
            <View>
            <View style={styles.container}>
            <Text style={styles.innerLayer1}>Layout</Text>
            <Text style={styles.innerLayer2}>Layout 2</Text>
            </View>
            <View style = {styles.container2}>
            <Text style={styles.blueBox}></Text>
            <Text style={styles.blueBox}></Text>
            <Text style={styles.blueBox}></Text>
            <Text style={styles.blueBox}></Text>
            <Text style={styles.blueBox}></Text>
            <Text style={styles.blueBox}></Text>
            <Text style={styles.blueBox}></Text>
            <Text style={styles.blueBox}></Text>
            <Text style={styles.blueBox}></Text>
            </View>
            </View>
        )
    }
}