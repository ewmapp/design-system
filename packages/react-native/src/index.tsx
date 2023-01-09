import { colors } from '@ewmapp/tokens'
import React, { ComponentProps } from 'react'
import { Text, View } from 'react-native'

export type HomeProps = ComponentProps<typeof View>

export function Home({ ...props }: HomeProps) {
  return (
    <View {...props} style={{ backgroundColor: colors.primary, flex: 1 }}>
      <Text style={{ color: colors.blue300 }}>Hello World</Text>
    </View>
  )
}
