import React, { Component } from 'react';
import { View, ScrollView, Text } from "react-native";
import { ContactListItem } from './../../components';

export class ContactList extends Component { 

    constructor() {
        super();
        this.state = {
            contactList : []
        }
    }

    componentDidMount() {
        fetch("https://randomuser.me/api/?results=20")
        .then(response => response.json())
        .then(data => {
            this.setState({
                contactList: data.results
            })
        })
    }

    getContactsList() {
        return this.state.contactList.map((contacts, index) => (
            <ContactListItem key ={index} id={index} name={`${contacts.name.title} ${contacts.name.first} ${contacts.name.last}`} image = {contacts.picture.thumbnail}/>
        ));
    }
    render() {
        return <ScrollView>{this.getContactsList()}</ScrollView>
    }
}