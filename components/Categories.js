import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import CategoriesCard from './CategoriesCard'

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}>
      <CategoriesCard imgUrl='https://links.papareact.com/3pn' title='Testing' />
      <CategoriesCard imgUrl='https://links.papareact.com/3pn' title='Testing'/>
      <CategoriesCard imgUrl='https://links.papareact.com/3pn' title='Testing'/>
    </ScrollView>
  )
}

export default Categories