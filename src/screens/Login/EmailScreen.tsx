import { StyleSheet, Text, TextInput, View } from "react-native";
import { GithubIcon } from "../../components/icons/github-icon";
import { Button } from "../../components/Buttons/Button";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
export interface EmailScreenProps {
  nextScreen: (email: string) => void;
  email?: string;
}
const schema = yup.object({
  email: yup
    .string()
    .email("Required a valid email")
    .required("Email is a required field"),
});
export const EmailScreen: React.FC<EmailScreenProps> = ({
  nextScreen,
  email,
}) => {
  const { control, formState, handleSubmit } = useForm<{ email: string }>({
    resolver: yupResolver(schema),
    defaultValues: {
      email,
    },
  });
  const onSubmit = handleSubmit(({ email }) => {
    nextScreen(email);
  });
  return (
    <View style={styles.container}>
      <GithubIcon height={250} width={250} />
      <View style={{ width: "100%", gap: 8 }}>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextInput
              autoComplete="email"
              placeholder="Your Github email address"
              style={styles.textInput}
              onChangeText={field.onChange}
              onBlur={field.onBlur}
              value={field.value}
              onSubmitEditing={onSubmit}
            />
          )}
        />
        <Text style={styles.textError}>{formState.errors.email?.message}</Text>
      </View>
      <Button text="Next" onPress={onSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  textError: {
    color: "#FF3B30",
    fontSize: 14,
  },
  textInput: {
    borderWidth: 1,
    width: "100%",
    borderRadius: 4,
    height: 46,
    paddingHorizontal: 12,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingHorizontal: 36,
    justifyContent: "space-evenly",
  },
});
