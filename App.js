import { StatusBar } from "expo-status-bar";

import { StyleSheet, Text, View, Image } from "react-native";
import Login from "./Screens/Login";
import Apploading from "expo-app-loading";

import {
  useFonts,
  Padauk_400Regular,
  Padauk_700Bold,
} from "@expo-google-fonts/padauk";
import { Provider } from "react-redux";
import store from "./redux/store";
import { SafeAreaView } from "react-native-web";

export default function App() {
  const [fontLoaded] = useFonts({ Padauk_400Regular, Padauk_700Bold });

  if (!fontLoaded) return <Apploading />;
  return (
    <Provider store={store}>
      <View>
        <Login />
        <StatusBar style="dark" />
      </View>
    </Provider>
  );
}
