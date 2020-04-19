import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function CirclePlus(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg width={28} height={28} viewBox="0 0 22 22" fill="none" {...props}>
      <Rect
        opacity={0.8}
        x={0.5}
        y={0.5}
        width={21}
        height={21}
        rx={10.5}
        fill="#fff"
        stroke="#FC8D24"
      />
      <Path
        opacity={0.8}
        d="M15.152 10.044h-3.196V6.848c0-1.233-1.912-1.233-1.912 0v3.196H6.847c-1.232 0-1.232 1.912 0 1.912h3.197v3.197c0 1.232 1.912 1.232 1.912 0v-3.197h3.197c1.232 0 1.232-1.912 0-1.912z"
        fill="#FC8D24"
      />
    </Svg>
  )
}

export default CirclePlus
