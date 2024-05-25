import { type Reducer, useReducer, useState } from "react";
import { ArgumentOutOfRangeException } from "../../errors/ArgumentOutOfRangeException";
import { EmailScreen } from "./EmailScreen";
import { PasswordScreen } from "./PasswordScreen";
enum DispatchType {
  EMAIL_SCREEN,
  PASSWORD_SCREEN,
}
type ValueOf<T> = T[keyof T];

interface State {
  RENDER_SCREEN: ValueOf<typeof DispatchType>;
}

const reducer: Reducer<State, DispatchType> = (previousState, action) => {
  if (action === DispatchType.EMAIL_SCREEN) {
    return {
      RENDER_SCREEN: DispatchType.EMAIL_SCREEN,
    };
  } else if (action === DispatchType.PASSWORD_SCREEN) {
    return { RENDER_SCREEN: DispatchType.PASSWORD_SCREEN };
  }
  throw new ArgumentOutOfRangeException(
    "The action argument must be in the value range of the DispatchType enum",
  );
};
export const Login: React.FC = () => {
  const [state, dispatch] = useReducer<Reducer<State, DispatchType>>(reducer, {
    RENDER_SCREEN: DispatchType.EMAIL_SCREEN,
  });
  const [email, setEmail] = useState<string>("");
  if (state.RENDER_SCREEN === DispatchType.EMAIL_SCREEN) {
    return (
      <EmailScreen
        email={email}
        nextScreen={(email) => {
          setEmail(email);
          dispatch(DispatchType.PASSWORD_SCREEN);
        }}
      />
    );
  } else if (state.RENDER_SCREEN === DispatchType.PASSWORD_SCREEN) {
    return (
      <PasswordScreen
        email={email}
        login={() => {}}
        goBackScreen={() => {
          dispatch(DispatchType.EMAIL_SCREEN);
        }}
      />
    );
  }
};
