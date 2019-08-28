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
    StatusBar,
    TouchableOpacity,
    Alert,
    AsyncStorage,
    BackAndroid

} from 'react-native';
import {Cell, Section, TableView} from 'react-native-tableview-simple';
import Loader from '../pages/Loader';
import đsd from 'prop'

const {width: WIDTH} = Dimensions.get('window')


export default class HomeController extends Component{ 
  static navigationOptions = {
    headerLeft: null,

    headerStyle: {
      backgroundColor: 'red',
    }
  
  };

  handlePress = async () => { 
    Alert.alert(
      'Thông báo',
      'Bạn có chắc chắn muốn thoát khỏi phiên đăng nhập này không?',
      [
             {text: 'Đồng ý', onPress: () => this.Logout()},
             {text: 'Không', onPress: () => console.log('OK Pressed')}
      ]);
  }

  constructor(props) {
    super(props);
    this.state = {
        loading: false,
    }
  }

    render() {
         return(
           <SafeAreaView>
            <Loader loading={this.state.loading} />
             <ScrollView  contentContainerStyle={styles.stage} >
                   <TableView >
                              <Section>
                      
                                <Cell
                                    accessory="DisclosureIndicator"
                                    title= "Sản phẩm"
                                    image={
                                      <Image
                                        style={{ borderRadius: 5 }}
                                        source={require('../Images/san_pham.png')}
                                      />
                                    }
                                />

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
                                  title=" Chính sách"
                                  image={
                                    <Image
                                      style={{ borderRadius: 5 }}
                                      source={require('../Images/chinh_sach.png')}
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
                                accessory="DisclosureIndicator"
                                title="Kho hàng"
                                image={
                                  <Image
                                    style={{ borderRadius: 5 }}
                                    source={require('../Images/kho_hang.png')}
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

             <View style={styles.headerView}>

                <TouchableOpacity style={styles.btnLogOut}
                  onPress={this.handlePress.bind(this)}>

                     <Text style={styles.text}>Đăng Xuất</Text>

                </TouchableOpacity>

             </View >

          </SafeAreaView>  
    );}

    Logout = async () => {
      const { navigation } = this.props;
      const manv = navigation.getParam('manv', 'NO-ID');
      fetch('http://appdemo.azmax.vn/services/mobileapi.ashx', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              "method":"logout",
              "manv": JSON.stringify(manv),
              "seckey":"azmax"
           })
          })
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
              loading: true,
              dataSource: responseJson["msg"]
            }, function(){
    
            }); 
  
            setTimeout(() => {
              this.setState({
                loading: false,
              });
  
              if (this.state.dataSource === "ok" ) {
                  navigation.navigate("Login");
              }
            }, 2500);
        })
        .catch((error) => {
          console.error(error);
        });
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
    },
    btnLogOut: {
      width: WIDTH - 55,
      height: 50,
      borderRadius: 25,
      backgroundColor: 'red',
      justifyContent: 'center',
      marginTop: 650
    },
    text: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center'
      }
  });
