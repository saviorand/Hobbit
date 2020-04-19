import * as React from "react"
import Svg, { Path } from "react-native-svg"

function AddToBasket(props) {
  return (
    <Svg width={14} height={14} viewBox="0 0 12 12" fill="none" {...props}>
      <Path
        opacity={0.8}
        d="M10.908 4.87H7.13V1.093c0-1.457-2.26-1.457-2.26 0V4.87H1.092c-1.456 0-1.456 2.26 0 2.26H4.87v3.777c0 1.457 2.26 1.457 2.26 0V7.13h3.778c1.456 0 1.456-2.26 0-2.26z"
        fill="#FC8D24"
      />
    </Svg>
  )
}

export default AddToBasket
