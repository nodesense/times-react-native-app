import React from "react";

import {View, 
        Text,
        Button, Alert,
    
        ActivityIndicator,
        Image, 
        ScrollView
    } from "react-native";

export default class About extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("about did mount");
    }

    render() {
        let url = 'https://facebook.github.io/react-native/docs/assets/favicon.png';

        return (
            <View >
                <ScrollView>
                <Text>Address</Text>
                {/* <Image source={ require('./loading.gif')} />
               */}
                <Image 
                     style={{width: 100, height: 200}}
                    source={ {uri: "https://raw.githubusercontent.com/nodesense/react-app/master/src/assets/loading.gif"} } />
                
                <Image
          style={{width: 100, height: 200}}
          source={{uri: url}}
        />

          <Image 
                     style={{width: 100, height: 200}}
                    source={ {uri: "https://raw.githubusercontent.com/nodesense/react-app/master/src/assets/loading.gif"} } />
                
                <Image
          style={{width: 100, height: 200}}
          source={{uri: url}}
        />

                <ActivityIndicator />

                <Button onPress={() => Alert.alert("Hello") }
                        title="Touch">
                </Button>
                </ScrollView>
            </View>
        )
    }
}