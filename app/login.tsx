import React from "react";
import { Image, StyleSheet } from "react-native";
import AppForm from "../components/Forms/AppForm";
import AppFormField from "../components/Forms/AppFormField";
import Screen from "../components/Screen";
import SubmitButton from "../components/Forms/SubmitButton";

// const validationSchema = Yup.object({
//   email: Yup.string().email().required().label("Email"),
//   password: Yup.string().required().min(4).label("Password"),
// });

const LoginScreen = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/images/store.png")}
      />

      <AppForm onSubmit={() => console.log(initialValues)}>
        <AppFormField
          name="email"
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          placeholder="Email"
          textContentType="emailAddress"
        />

        <AppFormField
          name="password"
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          placeholder="Password"
          textContentType="password"
          secureTextEntry
        />

        <SubmitButton
          title="login"
          onSubmit={() => console.log(initialValues)}
        />
      </AppForm>
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
