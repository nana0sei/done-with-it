import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import AppButton from "../components/AppButton";
import { useRouter } from "expo-router";

const WelcomeScreen = () => {
  const router = useRouter();
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/images/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/images/store-white.png")}
        />
        <Text style={styles.tagline}>Sell What You Don't Need!</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Login" onPress={() => router.navigate("/login")} />
        <AppButton
          title="Register"
          color="secondary"
          onPress={() => router.navigate("/")}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },

  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    alignItems: "center",
    position: "absolute",
    top: 70,
  },

  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
