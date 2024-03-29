import { View, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react'

const CategoriesCard = ({imgUrl,title}) => {
  return (
      <TouchableOpacity className=" relative mr-2">
          <Image
              source={{ uri: imgUrl , }}
              style={{ width: 120, height: 120, resizeMode: 'cover', borderRadius: 10 }}
          />
          <Text className="absolute bottom-1 left-1 text-white font-bold">
              {title}
          </Text>
    </TouchableOpacity>
  )
}

export default CategoriesCard