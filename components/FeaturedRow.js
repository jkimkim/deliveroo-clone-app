import { View, Text, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'
import client from '../sanity'

const FeaturedRow = ({ id, title, description }) => {
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    client.fetch(`
      *[_type == "featured" && _id == $id] {
        ...,
        restaurants[]->{
          ...,
          dishes[]->,
          type->{
            ...,
          }
        },
      }[0]
    `,
    {id}
    ).then(data => {
      setRestaurants(data?.restaurants)
    })
  }, [])

  return (
    <View>
      <View className="mt-4 flex flex-row  justify-between px-4">
        <Text className="text-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00cc88" />
      </View>
      <Text className="text-gray-400 text-xs px-4">{description}</Text>
      <ScrollView horizontal className="pt-4"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15, }}
      >
        {/** Restaurant cards */}

        {
          restaurants?.map((restaurant) => (
            <RestaurantCard
              key={restaurant._id}
              id={restaurant._id}
              imgUrl={restaurant.image}
              title={restaurant.name}
              rating={restaurant.rating}
              genre={restaurant.type?.name}
              address={restaurant.address}
              short_desc={restaurant.short_desc}
              dishes={restaurant.dishes}
              long={restaurant.long}
              lat={restaurant.lat}
            />
          ))
        }

      </ScrollView>
    </View>
  )
}

export default FeaturedRow