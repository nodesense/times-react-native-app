import React from "react";

import {View, 
        Text,
        Button, Alert,
    
        ActivityIndicator
    } from "react-native";


export default class Contact extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("contact did mount");
    }

    render() {
        let city = this.props.navigation && this.props.navigation.state.params['city'];

        return (
            <View >
                <Text>Contact Android {city} </Text>
              

                <Button onPress={() => Alert.alert("Hello Android") }
                        title="Touch Android">
                </Button>
            </View>
        )
    }
}