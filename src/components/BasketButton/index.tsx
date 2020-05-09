import * as React from "react"
import Svg, {
  G,
  Circle,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function BasketButton(props) {
  return (
    <Svg width={68} height={70} viewBox="0 0 56 59" fill="none" {...props}>
      <G >
        <Circle
          cx={29}
          cy={28.326}
          r={22.256}
          fill="url(#prefix__paint0_linear)"
        />
      </G>
      <Path
        d="M36.277 35.602a2.769 2.769 0 110 5.537 2.769 2.769 0 010-5.537zm0 1.385a1.384 1.384 0 100 2.768 1.384 1.384 0 000-2.769zm-12.46-1.385a2.769 2.769 0 110 5.537 2.769 2.769 0 010-5.537zm0 1.385a1.384 1.384 0 100 2.768 1.384 1.384 0 000-2.769zM39.046 18.99H20.042l3.526 8.306h11.324A1.376 1.376 0 0036 26.74l4.153-5.538h.001a1.385 1.385 0 00-1.109-2.212zm-4.153 9.69h-11.26l-1.06 2.16-.139.61a1.384 1.384 0 001.385 1.384h15.227v1.384H23.818a2.769 2.769 0 01-2.423-4.112l.997-2.04-5.028-11.844H15.51v-1.385h2.77l1.175 2.769h19.59a2.769 2.769 0 012.15 4.513l-4.035 5.38a2.766 2.766 0 01-2.269 1.181z"
        fill="#fff"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={29}
          y1={6.07}
          x2={29}
          y2={50.581}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FC8D24" />
          <Stop offset={1} stopColor="#FFC86B" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default BasketButton
