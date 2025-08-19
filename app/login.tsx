import React from "react";
import { Image, StyleSheet } from "react-native";
import AppForm from "../components/Forms/AppForm";
import AppFormField from "../components/Forms/AppFormField";
import Screen from "../components/Screen";
import SubmitButton from "../components/Forms/SubmitButton";
import z from "zod";

const LoginScreen = () => {
  const initialValues: UserData = {
    email: "",
    password: "",
  };

  const handleLogin = (values: any) => {
    console.log("Form values:", values);
  };

  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/images/store.png")}
      />

      <AppForm
        defaultValues={initialValues}
        validationSchema={validationSchema}
      >
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

        <SubmitButton title="login" onSubmit={handleLogin} />
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

const validationSchema = z.object({
  email: z.email(),
  password: z.string("Password is required"),
});

type UserData = z.infer<typeof validationSchema>;
