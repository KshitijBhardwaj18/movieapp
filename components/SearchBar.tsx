import { Text, View, Image,TextInput } from 'react-native'
import React, { Component } from 'react'
import { icons } from '@/constants/icons'

interface SearchBarProps {
    placeholderText: string,
    onPress: () => void;
}


const SearchBar = ({onPress, placeholderText} : SearchBarProps) => {
    return (
        <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4 ">
            <Image source={icons.search} className='size-5' resizeMode='contain' tintColor="#ab8bff"/>
            <TextInput onPress={onPress}  placeholder={placeholderText} value="" onChangeText={() => {}} placeholderTextColor="#a8b5db" className='flex-1 ml-2 text-white'/>
        </View>
      )
}

export default SearchBar