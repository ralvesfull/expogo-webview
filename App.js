import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Modal } from 'react-native';
import WebView from "react-native-webview";

export default function App() {
  return (
   
    <Modal animationType="slide" transparent={false} visible={true}>
    <WebView
      source={{ uri: "https://liqi.com.br" }}
      //Enable Javascript support
      javaScriptEnabled={true}
      //For the Cache
      domStorageEnabled={true}
      originWhitelist={["*"]}
    />
  </Modal>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
