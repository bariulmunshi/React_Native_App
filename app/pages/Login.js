import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Colors from "../Shared/Colors";
import { AntDesign } from "@expo/vector-icons";

export default function Login() {
  return (
    <View>
      <Image
        style={{ width: "100%" }}
        source={require("./../assets/images/login.png")}
      />
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome to codebox</Text>
        <Text style={styles.loginText}>Login/SignUp</Text>
        <View style={styles.button}>
          <AntDesign
            name="google"
            size={24}
            color="white"
            style={{ marginRight: 10 }}
          />
          <Text style={{ color: Colors.white }}>Sign With Google</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    marginTop: -25,
    backgroundColor: "#fff",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  welcomeText: {
    fontSize: 35,
    textAlign: "center",
    fontWeight: "bold",
  },
  loginText: {
    textAlign: "center",
    marginTop: 80,
    fontSize: 20,
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 10,
    margin: 30,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});
