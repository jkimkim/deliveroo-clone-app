import { View, Text, Image} from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronDownIcon, UserIcon } from 'react-native-heroicons/outline';

export default function HomeScreen() {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [navigation]);
  return (
    <SafeAreaView>
          <Text>
              {/** Header */}
              <View className=" flex-row pb-3 items-center mx-4 space-x-2">
                  <Image
                      source={{ uri: 'https://links.papareact.com/3pn' }}
                      className="h-7 w-7 bg-slate-300 rounded-full p-4"
                  />
                  <View className=" flex-1">
                      <Text className=" font-bold text-gray-400 text-xs">Deliver now</Text>
                      <Text className="font-bold text-xl">
                          Current location
                          <ChevronDownIcon size={20} color="#00cc88" />
                      </Text>
                  </View>
                  <UserIcon className="absolute inset-y-0 right-0" size={35} color="#00cc88" />
              </View>
          </Text>
          
    </SafeAreaView>
  )
}