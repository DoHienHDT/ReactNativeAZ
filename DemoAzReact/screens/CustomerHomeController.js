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
    StatusBar,Button,
    TouchableHighlight
} from 'react-native';
import {Cell, Section, TableView} from 'react-native-tableview-simple';


export default class CustomerHomeController extends Component { 
  
  static navigationOptions= ({ navigation, screenProps }) => ({

    headerStyle: {
      backgroundColor: 'red',
    },
    headerLeft:  (<TouchableHighlight onPress={() => navigation.navigate("Home")} underlayColor={'red'}>
    <Image style={{ width: 35, height: 35, marginLeft: 10 }}  source={require('../Images/back.png')} />
    </TouchableHighlight>)
  });

    render() {
         return(
           <SafeAreaView>
             <View style={styles.headerView}></View>
             <ScrollView  contentContainerStyle={styles.stage} >
             <TableView >
                      <Section>
                <Cell
                  cellStyle="Basic"
                  title="Khách hàng"
                  accessory="DisclosureIndicator"
                  onPress={() => {
                    this.props.navigation.navigate("ListCustomer");
                  }}
                  image={
                    <Image
                      style={{ borderRadius: 5 }}
                      source={require('../Images/khach_hang.png')}
                    />
                  }
                />
                <Cell
                  accessory="DisclosureIndicator"
                  title="Liên hệ"
                  image={
                    <Image
                      style={{ borderRadius: 5 }}
                      source={require('../Images/ban_hang.png')} 
                    />
                  }
                  onPress={() => {
                    this.props.navigation.navigate("ListContact");
                  }}
                />
                <Cell
                  title="Cơ hội"
                  accessory="DisclosureIndicator"
                  image={
                    <Image
                      style={{ borderRadius: 5 }}
                      source={require('../Images/cong_viec.png')}
                    />
                  }
                  onPress={() => console.log('Hien dep trai!')}
                />
                 <Cell
                  cellStyle="Basic"
                  title="Báo giá"
                  accessory="DisclosureIndicator"
                  onPress={() => alert('Chức năng đang nâng cấp')}
                  image={
                    <Image
                      style={{ borderRadius: 5 }}
                      source={require('../Images/bao_gia.png')}
                    />
                  }
                />
                 <Cell
                  cellStyle="Basic"
                  title="Hợp đồng"
                  accessory="DisclosureIndicator"
                  onPress={() => alert('Chức năng đang nâng cấp')}
                  image={
                    <Image
                      style={{ borderRadius: 5 }}
                      source={require('../Images/hop_dong.png')}
                    />
                  }
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

