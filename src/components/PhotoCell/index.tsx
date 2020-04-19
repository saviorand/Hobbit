import * as React from "react"
import { View, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg"

function PhotoWrap(props: React.SVGProps<SVGSVGElement>) {
  return (
  	
    <Svg width={82} height={80} viewBox="0 0 62 60" fill="none" {...props}>
      <Path
        d="M.5 20C.5 9.23 9.23.5 20 .5h22C52.77.5 61.5 9.23 61.5 20v20c0 10.77-8.73 19.5-19.5 19.5H20C9.23 59.5.5 50.77.5 40V20z"
        stroke="#E0E0E0"
        strokeOpacity={0.5}
      />
    </Svg>
  )
}

export default PhotoWrap

const styles = StyleSheet.create({
  cellContainer: {
    position: 'absolute',

  },
})