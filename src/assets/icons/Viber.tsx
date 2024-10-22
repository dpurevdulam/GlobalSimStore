import React from "react";
import Svg, { Path, Rect } from "react-native-svg";

function Icon() {
  return (
    <Svg
      width="48"
      height="48"
      fill="none"
      viewBox="0 0 48 48"
    >
      <Rect width="48" height="48" fill="#F1E7FE" rx="24"></Rect>
      <Path
        fill="#B888F8"
        d="M29.625 26.174l2.643 1.576c.546.326.828.96.703 1.584-.511 2.559-3.081 4.199-5.598 3.508a17.442 17.442 0 01-12.214-12.207c-.692-2.518.946-5.09 3.506-5.602l.017-.003a1.502 1.502 0 011.587.707l1.563 2.639a2.05 2.05 0 01-.63 2.752l-1.66 1.105a11.602 11.602 0 006.21 6.226l1.116-1.665a2.053 2.053 0 012.757-.62zM29.75 22A3.755 3.755 0 0026 18.25a.75.75 0 000 1.5c1.24 0 2.25 1.009 2.25 2.25a.75.75 0 001.5 0zm2.25.75a.75.75 0 01-.75-.75A5.256 5.256 0 0026 16.75a.75.75 0 010-1.5A6.758 6.758 0 0132.75 22a.75.75 0 01-.75.75z"
      ></Path>
    </Svg>
  );
}

export default Icon;
