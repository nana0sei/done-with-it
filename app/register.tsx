import React, { useState } from "react";
import { StyleSheet } from "react-native";
import AppForm from "../components/Forms/AppForm";
import AppFormField from "../components/Forms/AppFormField";
import Screen from "../components/Screen";
import SubmitButton from "../components/Forms/SubmitButton";
import z from "zod";
import APIClient from "@/api/client";
import { useRouter } from "expo-router";
import { useAuth } from "@/auth/useAuth";
import ErrorAlert from "@/components/Forms/ErrorAlert";

const api = new APIClient<object>("/users");

const RegisterScreen = () => {
  const [error, setError] = useState("");
  const defaultValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSignUp = async (values: RegisterData) => {
    setError("");
    const result = await api.create(values);

    if (!result.ok) {
      const data = result.data as { error: string };
      setError(data?.error);
    } else {
      setError("");
      console.log(result.data);
    }
  };

  return (
    <Screen style={styles.container}>
      <ErrorAlert error={error} />

      <AppForm
        defaultValues={defaultValues}
        validationSchema={validationSchema}
      >
        <AppFormField
          name="name"
          autoCapitalize="none"
          autoCorrect={false}
          icon="account"
          placeholder="Name"
          textContentType="name"
        />

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

        <SubmitButton title="Sign Up" onSubmit={handleSignUp} />
      </AppForm>
    </Screen>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

const validationSchema = z.object({
  name: z.string().min(3, "Name must be at least three characters long"),
  email: z.email("Please enter a valid email"),
  password: z
    .string()
    .min(3, "Password must be at least three characters long"),
});

type RegisterData = z.infer<typeof validationSchema>;
