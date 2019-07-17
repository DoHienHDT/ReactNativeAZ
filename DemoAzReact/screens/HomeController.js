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
} from 'react-native';
import {Cell, Section, TableView} from 'react-native-tableview-simple';

const CustomSectionHeader = () => (
    <View>
      <Text>Custom header!</Text>
    </View>
  );

export default class HomeController extends Component { 
  static navigationOptions = {
    header: null
  };
    render() {
         return(
           <SafeAreaView>
             <View style={styles.headerView}></View>
             <ScrollView  contentContainerStyle={styles.stage} >
             <TableView>
                      <Section>
                <Cell
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
      paddingTop: 50,
      paddingBottom: 20
    },
    headerView: {
      height: 100,
      backgroundColor: 'red',
      width:100,
      flex:1
    }
  });
