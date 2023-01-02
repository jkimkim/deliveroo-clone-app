import { View, Text,ScrollView } from 'react-native'
import React from 'react'

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
      <CategoriesCard imgUrl='https://jkimtech.web.app/044af99d3d73bd9f8ba8.png' title='Testing' />
      <CategoriesCard imgUrl='https://links.papareact.com/3pn' title='Testing'/>
      <CategoriesCard imgUrl='https://links.papareact.com/3pn' title='Testing' />
      <CategoriesCard imgUrl='https://links.papareact.com/3pn' title='Testing' />
      <CategoriesCard imgUrl='https://links.papareact.com/3pn' title='Testing' />
      <CategoriesCard imgUrl='https://links.papareact.com/3pn' title='Testing' />
      <CategoriesCard imgUrl='https://links.papareact.com/3pn' title='Testing' />
      <CategoriesCard imgUrl='https://links.papareact.com/3pn' title='Testing' />
      <CategoriesCard imgUrl='https://links.papareact.com/3pn' title='Testing' />
    </ScrollView>
  )
}

export default Categories