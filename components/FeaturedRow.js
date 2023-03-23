import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({ id, title, description }) => {
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
        <RestaurantCard
          id={1}
          imgUrl="https://jkimtech.web.app/044af99d3d73bd9f8ba8.png"
          title="Restaurant 1"
          rating="4.5"
          genre="American"
          address="123 Main St"
          short_desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          dishes={["Lorem ipsum "]}
          long={123}
          lat={123}
        />

        <RestaurantCard
          id={1}
          imgUrl="https://jkimtech.web.app/044af99d3d73bd9f8ba8.png"
          title="Restaurant 1"
          rating="4.5"
          genre="American"
          address="123 Main St"
          short_desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          dishes={["Lorem ipsum "]}
          long={123}
          lat={123}
        />

        <RestaurantCard
          id={1}
          imgUrl="https://jkimtech.web.app/044af99d3d73bd9f8ba8.png"
          title="Restaurant 1"
          rating="4.5"
          genre="American"
          address="123 Main St"
          short_desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          dishes={["Lorem ipsum "]}
          long={123}
          lat={123}
        />

        <RestaurantCard
          id={1}
          imgUrl="https://jkimtech.web.app/044af99d3d73bd9f8ba8.png"
          title="Restaurant 1"
          rating="4.5"
          genre="American"
          address="123 Main St"
          short_desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          dishes={["Lorem ipsum "]}
          long={123}
          lat={123}
        />

        <RestaurantCard
          id={1}
          imgUrl="https://jkimtech.web.app/044af99d3d73bd9f8ba8.png"
          title="Restaurant 1"
          rating="4.5"
          genre="American"
          address="123 Main St"
          short_desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          dishes={["Lorem ipsum "]}
          long={123}
          lat={123}
        />

        <RestaurantCard
          id={1}
          imgUrl="https://jkimtech.web.app/044af99d3d73bd9f8ba8.png"
          title="Restaurant 1"
          rating="4.5"
          genre="American"
          address="123 Main St"
          short_desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          dishes={["Lorem ipsum "]}
          long={123}
          lat={123}
        />

        <RestaurantCard
          id={1}
          imgUrl="https://jkimtech.web.app/044af99d3d73bd9f8ba8.png"
          title="Restaurant 1"
          rating="4.5"
          genre="American"
          address="123 Main St"
          short_desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          dishes={["Lorem ipsum "]}
          long={123}
          lat={123}
        />
      </ScrollView>
    </View>
  )
}

export default FeaturedRow