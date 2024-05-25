import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
export const GithubIcon = (props: SvgProps) => {
  return (
    <Svg width={384} height={384} viewBox="0 0 24 24" {...props}>
      <Path d="M10.9 2.1c-4.6.5-8.3 4.2-8.8 8.7-.6 5 2.5 9.3 6.9 10.7v-2.3s-.4.1-.9.1c-1.4 0-2-1.2-2.1-1.9-.1-.4-.3-.7-.6-1-.3-.1-.4-.1-.4-.2 0-.2.3-.2.4-.2.6 0 1.1.7 1.3 1 .5.8 1.1 1 1.4 1 .4 0 .7-.1.9-.2.1-.7.4-1.4 1-1.8-2.3-.5-4-1.8-4-4 0-1.1.5-2.2 1.2-3-.1-.2-.2-.7-.2-1.4 0-.4 0-1 .3-1.6 0 0 1.4 0 2.8 1.3.5-.2 1.2-.3 1.9-.3s1.4.1 2 .3C15.3 6 16.8 6 16.8 6c.2.6.2 1.2.2 1.6 0 .8-.1 1.2-.2 1.4.7.8 1.2 1.8 1.2 3 0 2.2-1.7 3.5-4 4 .6.5 1 1.4 1 2.3v3.3c4.1-1.3 7-5.1 7-9.5 0-6-5.1-10.7-11.1-10z" />
    </Svg>
  );
};
