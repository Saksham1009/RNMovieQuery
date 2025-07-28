import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { Tabs } from 'expo-router'
import React from 'react'
import { Image, ImageBackground, Text, View } from 'react-native'

const TabIcon = ({ icon, focused, text } : { icon: any, focused: boolean, text: string }) => {
    if (focused) {
        return (
            <ImageBackground source={images.highlight} 
            className='flex flex-row w-full flex-1 min-w-[100px] min-h-16 items-center justify-center rounded-full overflow-hidden mt-4'>
                <Image source={icon} tintColor='#151312' className='size-5' />
                <Text className='text-seconday text-semibold ml-2 text-base'>{text}</Text>
            </ImageBackground>
        )
    } else {
        return (
            <View>
                <Image source={icon} tintColor='#A8B5DB' className='size-5 mt-4' />
            </View>
        )
    }
    
}

const TabsLayout = () => {
  return (
    <Tabs
    screenOptions={{
        tabBarShowLabel: false,
         tabBarItemStyle: {
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center'
         },
         tabBarStyle: {
            backgroundColor: '#0f0D23',
            borderRadius: 50,
            marginHorizontal: 20,
            marginBottom: 36,
            height: 52,
            position: 'absolute',
            overflow: 'hidden',
            borderWidth: 1,
            borderColor: '#0f0D23'
         }
    }}
    >
        <Tabs.Screen name='index' options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ focused}) => {
                return <TabIcon icon={icons.home} focused={focused} text='Home' />
            }
        }} />
        <Tabs.Screen name='search' options={{
            title: 'Search',
            headerShown: false,
            tabBarIcon: ({ focused }) => {
                return <TabIcon icon={icons.search} focused={focused} text='Search' />
            }
        }} />
        {/* <Tabs.Screen name='saved' options={{
            title: 'Saved',
            headerShown: false,
            tabBarIcon: ({ focused }) => {
                return <TabIcon icon={icons.save} focused={focused} text='Saved' />
            }
        }} />
        <Tabs.Screen name='profile' options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({ focused }) => {
                return <TabIcon icon={icons.person} focused={focused} text='Profile' />
            }
        }} /> */}
    </Tabs>
  )
}

export default TabsLayout