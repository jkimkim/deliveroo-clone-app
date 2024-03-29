import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {
  StarIcon,
  MapPinIcon
} from 'react-native-heroicons/outline'
import { urlFor } from '../sanity'

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_desc,
  dishes,
  long,
  lat,
}) => {
  return (
    <TouchableOpacity className='bg-white mr-3 shadow-sm'>
      <Image
        source={{
          uri: urlFor(imgUrl).url(),
        }}
        className="h-36 w-64 rounded-sm"
      />
      <View className="px-3 pb-4">
        <Text className="text-bold text-lg pt-2">
          {title}
        </Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className=" text-gray-400 text-xs">
            <Text className=" text-green-500">{rating}</Text>
            . {genre}
          </Text>
        </View>

        <View className='flex flex-row items-center space-x-1'>
          <MapPinIcon color="green" opacity={0.5} size={22} />
          <Text className="text-gray-400 text-xs">
            {address}
          </Text>
        </View>

      </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard