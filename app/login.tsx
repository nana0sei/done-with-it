import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import AppForm from "../components/Forms/AppForm";
import AppFormField from "../components/Forms/AppFormField";
import Screen from "../components/Screen";
import SubmitButton from "../components/Forms/SubmitButton";
import z from "zod";
import { useRouter } from "expo-router";
import auth from "@/api/auth";
import ErrorAlert from "@/components/Forms/ErrorAlert";
import { jwtDecode } from "jwt-decode";

const LoginScreen = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const initialValues: UserData = {
    email: "",
    password: "",
  };

  const handleLogin = async ({ email, password }: UserData) => {
    const result = await auth.login(email, password);

    if (!result.ok) {
      setError(result.problem);
    } else {
      setError("");
      const user = jwtDecode(result.data as string);
      console.log(user);
      router.navigate("/(tabs)/feed");
    }
  };

  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/images/store.png")}
      />

      <ErrorAlert error={error} />
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

        <SubmitButton title="Login" onSubmit={handleLogin} />
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
  email: z.email("Please enter a valid email"),
  password: z.string().min(1, "Password is required"),
});

type UserData = z.infer<typeof validationSchema>;
