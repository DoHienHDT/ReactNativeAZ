import React from "react";
import { Image, StyleSheet, View, Switch } from "react-native";
import Button from '../Components/Button';
import FormTextInput from '../Components/FormTextInput';
import colors from "../config/colors";
import strings from "../config/strings";
import { createStackNavigator, createAppContainer, SwitchActions } from 'react-navigation';

interface State {
  email: string;
  password: string;
}

class LoginScreen extends React.Component<{}, State> {

  readonly state: State = {
    email: "",
    password: ""
  };

  handleEmailChange = (email: string) => {
    this.setState({ email: email });
  };

  handlePasswordChange = (password: string) => {
    this.setState({ password: password });
  };

  handleLoginPress = () => {
    console.log("Login button pressed");
  };

  render() {
     
    return (
      <View style={styles.container}>
        <Image source={require('../Images/logo-01.png')} style={styles.logo} />
        <View style={styles.form}>
          <FormTextInput
            value={this.state.email}
            onChangeText={this.handleEmailChange}
            placeholder={strings.EMAIL_PLACEHOLDER}
          />
          <FormTextInput
            value={this.state.password}
            onChangeText={this.handlePasswordChange}
            placeholder={strings.PASSWORD_PLACEHOLDER}
            secureTextEntry= {true}
          />
            <FormTextInput
            placeholder={strings.Save_PassWord}
            />
            <Switch style= {styles.switch}></Switch>
          <Button label={strings.LOGIN} onPress={this.handleLoginPress} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
    alignItems: "center",
    justifyContent: "space-between"
  },
  logo: {
    flex: 1,
    width: "60%",
    resizeMode: "contain",
    alignSelf: "center"
  },
  form: {
    flex: 1,
    justifyContent: "center",
    width: "80%"
  },
  switch: {
    left: 250,
    bottom: 50
  }
});

export default LoginScreen;
