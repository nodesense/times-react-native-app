import React from "react";

import {View, Text, Button} from "react-native";


export default class Home extends React.Component {
    

static navigationOptions = {
    title: 'Home'
}

    gotoAbout() {
        this.props.navigation.navigate("About");
    }
    
    render() {
        return (
                <View>
                    <Text> Home 2 </Text>
                    <Button onPress={() => this.gotoAbout() }
                            title="About"
                    >
                    </Button>

                    <Button onPress={() => this.props.navigation.navigate("Contact", {city: 'Delhi'}) }
                            title="Contact"
                    >
                    </Button>
                </View>
        )

    }
}