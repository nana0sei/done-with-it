import authApi from "@/api/auth";
import { useAuth } from "@/auth/useAuth";
import ErrorAlert from "@/components/Forms/ErrorAlert";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import z from "zod";
import AppForm from "../components/Forms/AppForm";
import AppFormField from "../components/Forms/AppFormField";
import SubmitButton from "../components/Forms/SubmitButton";
import Screen from "../components/Screen";

const LoginScreen = () => {
  const { login } = useAuth();
  const router = useRouter();
  const [error, setError] = useState("");
  const initialValues: UserData = {
    email: "",
    password: "",
  };

  const handleLogin = async ({ email, password }: UserData) => {
    setError("");
    const result = await authApi.login(email, password);

    if (!result.ok) {
      setError(result.problem);
    } else {
      setError("");
      login(result.data as string);
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
