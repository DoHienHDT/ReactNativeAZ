import React from "react";
import {Component} from 'react';
import {
    ActivityIndicator,
    Dimensions,
    Image,
    ScrollView,
    StyleSheet,
    SafeAreaView,
    Switch,
    Text,
    TextInput,
    View,
    StatusBar
} from 'react-native';
import {Cell, Section, TableView} from 'react-native-tableview-simple';

export default class HomeController extends Component { 
  static navigationOptions = {
    headerLeft: null,

    headerStyle: {
      backgroundColor: 'red',
    }
  
  };
    render() {
         return(
           <SafeAreaView>
             <View style={styles.headerView}></View>
             <ScrollView  contentContainerStyle={styles.stage} >
             <TableView >
                      <Section>
                <Cell
                 onPress={() => {
                  this.props.navigation.navigate("CustomerHome");
               
                  }}  
                  cellStyle="Basic"
                  title="Khách hàng"
                  accessory="DisclosureIndicator"
                  image={
                    <Image
                      style={{ borderRadius: 5 }}
                      source={require('../Images/khach_hang.png')}
                    />
                  }
                />
                <Cell
                  accessory="DisclosureIndicator"
                  title="Bán hàng"
                  image={
                    <Image
                      style={{ borderRadius: 5 }}
                      source={require('../Images/ban_hang.png')}
                    />
                  }
                />
                <Cell
                  title="Công việc"
                  accessory="DisclosureIndicator"
                  image={
                    <Image
                      style={{ borderRadius: 5 }}
                      source={require('../Images/cong_viec.png')}
                    />
                  }
                  onPress={() => console.log('Hien dep trai!')}
                />
              </Section>
                      </TableView>
             </ScrollView>
            
           </SafeAreaView>
    );
    }
}

const styles = StyleSheet.create({
    stage: {
      paddingTop: 0,
      paddingBottom: 20
    },
    headerView: {
      height: 100,
      backgroundColor: 'red',
      width:100,
      flex:1
    }
  });
