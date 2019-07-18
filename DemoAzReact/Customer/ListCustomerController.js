import React from "react";
import {Component} from 'react';
import {
    ActivityIndicator,
    FlatList,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {Cell, Section, TableView} from 'react-native-tableview-simple';

export default class ListCustomerController extends Component { 
  
  static navigationOptions= ({ navigation, screenProps }) => ({

    headerStyle: {
      backgroundColor: 'red',
    }
  });

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false,
    };
  }

    state = {
      data: []
    };

    componentDidMount() {
      this.handlePress();
    }

    handlePress = async () => {
      fetch('http://appdemo.azmax.vn/services/mobileapi.ashx', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              "method":"customers",
              "rtype": 1,
              "seckey":"azmax"
          })
       })
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
               dataSource: responseJson["msg"],
               manv: responseJson["manv"]
            }, function(){
    
            }); 

            setTimeout(() => {
              this.setState({
                loading: false,
              });

              if (this.state.dataSource === "ok" ) {
                  // this.props.navigation.navigate("Home")
                  // this.saveKey(this.state.manv)
                  // alert(this.state.manv);
              } else {
                  Alert.alert("Đăng nhập thất bại");
              }
            }, 2500);

        })
        .catch((error) => {
          console.error(error);
        });
      }

    render() {
      return (
        <View style={styles.container}>
          <FlatList
            data={this.state.data}
            keyExtractor={(x, i) => i}
            renderItem={({ item }) =>
              <Text>
                {item.login.username}
              </Text>}
          />
        </View>
      );
    }
}

const styles = StyleSheet.create({
    stage: {
      paddingTop: 0,
      paddingBottom: 0
    },
    headerView: {
      flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
  });

