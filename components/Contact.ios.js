import React from "react";

import {View, 
        Text,
        Button, Alert,
    
         
    } from "react-native";

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("contact did mount");
    }

    navigate() {
        this.props.navigation.replace("Home");
    }


    render() {
        let city = this.props.navigation && this.props.navigation.state.params['city'];

        return (
            <View >
                <Text>Contact iOS {city} </Text>
              

                <Button onPress={() => Alert.alert("Hello iOS") }
                        title="Touch iOS">
                </Button>


                <Button onPress={() => this.navigate() }
                        title="Pop">
                </Button>
            </View>
        )
    }
}