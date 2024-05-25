import { StyleSheet, Text, TextInput, View } from "react-native";
import { GithubIcon } from "../../components/icons/github-icon";
import { Button } from "../../components/Buttons/Button";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
export interface PasswordScreenProps {
  goBackScreen: () => void;
  login: (email: string, password: string) => void;
  email: string;
}
const schema = yup.object({
  password: yup.string().required("Password is a required field"),
});
export const PasswordScreen: React.FC<PasswordScreenProps> = ({
  goBackScreen,
  login,
  email,
}) => {
  const { control, handleSubmit, formState } = useForm<{ password: string }>({
    resolver: yupResolver(schema),
  });
  const onSubmit = handleSubmit(({ password }) => {
    login(email, password);
  });
  return (
    <View style={styles.container}>
      <GithubIcon height={250} width={250} />
      <Text>{email}</Text>
      <View style={{ width: "100%", gap: 8 }}>
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextInput
              secureTextEntry
              onSubmitEditing={onSubmit}
              onChangeText={field.onChange}
              value={field.value}
              onBlur={field.onBlur}
              placeholder="Password"
              style={styles.textInput}
            />
          )}
        />
        <Text style={styles.textError}>
          {formState.errors.password?.message}
        </Text>
      </View>
      <Button text="Login" onPress={onSubmit} />
      <Button text="Back" onPress={goBackScreen} />
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
