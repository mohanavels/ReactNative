import React, { Component } from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';

export class ContactListItem extends Component { 
    render() {
        const { image, name } = this.props;
        const styles = StyleSheet.create({
            container: {
                flex: 1,
                backgroundColor: "orange",
                marginLeft: 10,
                marginRight: 10,
                marginBottom: 10,
                flexDirection: "row"
            },
            containerRight: {
                backgroundColor: "orange",
                marginLeft: 10,
                marginRight: 10,
                marginBottom: 10,
                flexDirection: "row-reverse"
            }

        })
        return (
            <View  key={this.props.id} style={this.props.id%2 === 0 ? styles.container : styles.containerRight} >
            <Image source={{uri:image}} style={{ width: 50, height: 50,borderRadius:25 }} />
            <Text>{name}</Text>
            </View>
        );
    }
}