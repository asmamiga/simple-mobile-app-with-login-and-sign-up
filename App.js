import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import CustomButton from './CustomButton';

const Stack = createNativeStackNavigator();

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground source={require('./assets/Screen.jpg')} style={styles.container}>
      <Image style={styles.image} source={require('./assets/Group.png')} />
      <View style={styles.p}>
        <Text style={styles.title}>Discover Your Dream Job here</Text>
        <Text style={styles.subtitle}>Explore all the existing job roles based on your interest and study major</Text>
      </View>
      <View style={styles.buttons}>
        <CustomButton title="Login" onPress={() => navigation.navigate('Login')} />
        <CustomButton title="Register" onPress={() => navigation.navigate('Register')} />
      </View>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}

export default function App() {
  useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'space-between',
  },
  image: {
    width: "100%",
    height: null,
    aspectRatio: 1 / 0.9,
    marginBottom: "auto",
    marginTop: 70
  },
  title: {
    fontSize: 35,
    fontFamily: 'Poppins_600SemiBold',
    color: '#1F41BB',
    textAlign: "center"
  },
  subtitle: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'Poppins_400Regular',
    textAlign: "center"
  },
  buttons: {
    flexDirection: 'row',
    gap: 20,
    marginBottom:70
  },
  p: {
    marginBottom: "auto",
  }
});