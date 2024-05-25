import {
  StyleSheet,
  Text,
  TouchableOpacity,
  type TouchableOpacityProps,
} from "react-native";
export interface ButtonProps extends TouchableOpacityProps {
  text: string;
}
export const Button: React.FC<ButtonProps> = ({ text, ...props }) => {
  return (
    <TouchableOpacity style={styles.button} {...props}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 4,
  },
});
