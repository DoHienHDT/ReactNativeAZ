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
    TouchableOpacity
} from 'react-native';
import {Cell, Section, TableView} from 'react-native-tableview-simple';
const {width: WIDTH} = Dimensions.get('window')
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
             <ScrollView  contentContainerStyle={styles.stage} >
             <TableView >
                      <Section>

                  <Cell
                      accessory="DisclosureIndicator"
                      title=" Sản phẩm"
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
            >

            <Text style={styles.text}>Đăng Xuất</Text>
            </TouchableOpacity>
             </View >
           

           </SafeAreaView>  
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
    },
    btnLogOut: {
      width: WIDTH - 55,
      height: 50,
      borderRadius: 25,
      backgroundColor: '#432577',
      justifyContent: 'center',
      marginTop: 650
    },
    text: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 16,
    textAlign: 'center'
      }
  });
