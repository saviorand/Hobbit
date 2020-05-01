import * as React from "react"
import Svg, { G, Path, Defs, LinearGradient, Stop } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function FocusedButtonTint(props) {
  return (
    <Svg width={88} height={31} viewBox="0 0 88 31" fill="none" {...props}>
      <G filter="url(#prefix__filter0_f)">
        <Path
          fill="url(#prefix__paint0_linear)"
          fillOpacity={0.08}
          d="M4 4h80v23H4z"
        />
      </G>
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={44}
          y1={4}
          x2={44}
          y2={27}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.172} stopColor="#E35205" />
          <Stop offset={0.76} stopColor="#E35205" stopOpacity={0} />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default FocusedButtonTint
