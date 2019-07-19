import React from "react";
import {Component} from 'react';
import {
    ActivityIndicator,
    FlatList,
    StyleSheet,
    Text,
    View,
    Alert,
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

  renderItem = ({item}) => {
    return (
      <View style={{flex:1, flexDirection:'row', marginBottom:3}}>
        <View style={{flex:1 , justifyContent:'center', marginLeft:10}}>

          <Text style = {{fontSize: 18, color:'black', marginTop:10}}>
             {`${[item.tencongty]}`}
          </Text>
          <Text style = {{fontSize: 15, color:'red', marginBottom:10, marginTop:10}}>
             {`${[item.didong]}`}
          </Text>

          <Text style = {{fontSize: 15, color:'red', paddingRight:50, marginTop:10}}>
               {`${[item.tenviettat]}`}
            </Text>
         
        </View>
      </View>
    );
  }

  renderSeparator = () => {
    return (
      <View 
        style={{height: 1, width:'100%', backgroundColor:'gray'}}
      ></View>
    );
  }

    state = {
      data: []
    };

    componentDidMount() {
      this.handlePress();
    }

    handlePress = async () => {
    const url = `http://appdemo.azmax.vn/services/mobileapi.ashx`;
    this.setState({ loading: true });

    fetch(url, {
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
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res["data"],
          error: res.error || null,
          isLoading: false,
          refreshing: false
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
      }

    render() {
      return (
        // <View style={styles.container}>
        //   <FlatList
        //     data={this.state.data}
        //     keyExtractor={(x, i) => i}
        //     renderItem={({ item }) =>
        //       <Text>
        //         {`${[item.makh]}`}
        //       </Text>}
        //   />
        // </View>
        this.state.isLoading
        ?
        <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
            <ActivityIndicator size="large" color="black" animating/>
        </View>
        :
        <View style={styles.headerView}>
          <FlatList
            data=  {this.state.data}
            renderItem= {this.renderItem}
            keyExtractor={(item, index) => index}
            ItemSeparatorComponent={this.renderSeparator}
          ></FlatList>
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
      backgroundColor:'#F5FCFF'
    }
  });

