import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { Login } from "./src/screens/Login/Login";
import { SafeAreaView } from "react-native-safe-area-context";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Login />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
