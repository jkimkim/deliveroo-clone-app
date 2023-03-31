import { View, Text, Image, TextInput, ScrollView } from "react-native";
import React, { useLayoutEffect, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
    AdjustmentsHorizontalIcon,
    ChevronDownIcon,
    MagnifyingGlassCircleIcon,
    UserIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import client from "../sanity";
import 'react-native-url-polyfill/auto';


export default function HomeScreen() {
    const navigation = useNavigation();

    const [featuredCategories, setFeaturedCategories] = useState([]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [navigation]);

    useEffect(() => {
        client.fetch(`
        *[_type == "featured"] {
           ...,
             restaurants[]->{
                 ...,
                     dishes[]->,
                         type->{
                             ...,}
                 },
         }
        `).then(data => {
            setFeaturedCategories(data);
        }).catch(err => console.error(err));
    }, []);

    return (
        <SafeAreaView className="bg-white pt-4">
            <View style={{height: "100%" }}>
                {/** Header */}
                <View className=" flex flex-row pb-3 items-center mx-4 space-x-2">
                    <Image
                        source={{ uri: "https://jkimtech.web.app/044af99d3d73bd9f8ba8.png" }}
                        className="h-7 w-7 bg-slate-300 rounded-full p-4 px-4"
                    />
                    <View className=" flex flex-1">
                        <Text className=" font-bold text-gray-400 text-xs">Deliver now</Text>
                        <Text className="font-bold text-xl">
                            Current location
                            <ChevronDownIcon size={20} color="#00cc88" />
                        </Text>
                    </View>
                    <UserIcon size={35} color="#00cc88" />
                </View>
                {/* Search Bar */}
                <View className=" flex-row items-center space-x-2 pb-2 px-4">
                    <View className=" flex-row flex-1 items-center space-x-2 bg-gray-200 p-3">
                        <MagnifyingGlassCircleIcon color="grey" size={20} />
                        <TextInput placeholder="Restaurants and quisines" />
                    </View>
                    <AdjustmentsHorizontalIcon color="#00cc88" />
                </View>
                {/* Body */}
                <ScrollView className=" bg-gray-100">
                    {/** Categories */}
                    <Categories />
                    {
                        featuredCategories.map((item) => (
                            <FeaturedRow
                                key={item._id}
                                id={item._id}
                                title={item.name}
                                description={item.short_desc} />
                        ))
                    }
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}
