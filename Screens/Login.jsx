import React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  Button,
} from 'react-native'
import { TouchableOpacity } from 'react-native'

import tw from 'tailwind-react-native-classnames'
const Login = () => {
  return (
    <View style={[styles.body, tw`bg-blue-50 h-full`]}>
      {/* logo view  */}
      <View style={tw`p-4 py-8 pt-12`}>
        <Text style={tw`text-4xl text-blue-500 px-2 font-bold tracking-wider`}>
          DairyLink
        </Text>
        <Text
          style={[
            tw`text-sm text-black px-2 -mt-1 tracking-wider `,
            { color: 'gray' },
          ]}
        >
          linking dairy farmers !
        </Text>
      </View>
      {/* login screen view  */}
      <View
        style={[
          tw`w-96 mx-auto bg-white h-96 mt-4 rounded-lg shadow-sm my-auto`,
          {
            height: '70%',
            width: '90%',
          },
        ]}
      >
        <View
          style={[
            tw` mx-auto rounded-md mt-6`,
            { width: '90%', backgroundColor: '#eee' },
          ]}
        >
          <TouchableOpacity
            style={[
              tw` my-auto  bg-blue-400 rounded-md rounded-br-none rounded-tr-none`,
              {
                width: '50%',
              },
            ]}
          >
            <Text style={[tw`h-12 text-white text-lg py-4 px-6`]}>
              Farmer login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  body: {
    paddingVertical: 25,
    paddingHorizontal: 10,
  },
  logo: {
    color: 'grey',
    fontSize: 25,

    fontFamily: 'Padauk_400Regular',
    fontWeight: '600',
  },
  tagline: {
    fontSize: 18,
  },
  safeArea: {
    flex: 0,
  },
})
