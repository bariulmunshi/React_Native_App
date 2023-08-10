// import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Login from "./app/pages/Login";

export default function App() {
  return (
    <View>
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
