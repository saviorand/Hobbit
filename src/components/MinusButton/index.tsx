import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function CircleMinus(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg width={28} height={28} viewBox="0 0 22 22" fill="none" {...props}>
      <Rect
        opacity={0.8}
        x={0.5}
        y={0.5}
        width={21}
        height={21}
        rx={10.5}
        stroke="#FC8D24"
      />
      <Path
        opacity={0.8}
        d="M15.152 10.154H6.848c-1.232 0-1.232 2.538 0 2.538h8.306c1.232 0 1.232-2.538 0-2.538z"
        fill="#FC8D24"
      />
    </Svg>
  )
}

export default CircleMinus
