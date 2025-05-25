import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

export default function Index() {
  return (
	<View>
	  <Text>Index home</Text>

	  <Link href='/camera'> Camera Page</Link>
	</View>
  )
}