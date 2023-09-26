
import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import { useHeaderHeight} from "@react-navigation/elements"

const Layout = ({ children }) => {
    const headerHeight = useHeaderHeight();
    const insets = useSafeAreaInsets();
  return (
    <SafeAreaView
        style={{
            flex: 1,
            justifyContent: 'space-between',
            alignItems: 'center',


            paddingTop: headerHeight,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
        }}     
    >
      {children}
    </SafeAreaView>
  )
}

export default Layout