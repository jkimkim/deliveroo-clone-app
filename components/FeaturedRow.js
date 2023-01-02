import { View, Text } from 'react-native'
import React from 'react'
import {ArrowRightIcon } from 'react-native-heroicons/outline'

const FeaturedRow = ({id, title, description}) => {
  return (
    <View>
          <View>
              <Text className="text-bold text-lg">{title}</Text>
              <ArrowRightIcon color="#00cc88" />
         </View>
    </View>
  )
}

export default FeaturedRow