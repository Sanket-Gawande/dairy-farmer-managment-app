import React, { useState } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Button,
} from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Alert } from 'react-native'

import tw from 'tailwind-react-native-classnames'
const Login = () => {
  const [text, setText] = useState(null)
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
          tw`w-96 mx-auto h-96 mt-4 `,
          {
            height: '70%',
          },
        ]}
      >
        <Image
          style={[tw`h-44 w-full mt-12`, {}]}
          source={{
            uri:
              'https://raw.githubusercontent.com/Sanket-Gawande/dairy-farmer-managment-app/master/assets/images/image.png',
          }}
        />
        {/* form view  */}

        <View style={[tw`w-full px-8 mt-16`]}>
          <Text style={[tw`text-xl text-blue-500 `]}>Phone number</Text>
          <TextInput
            keyboardType="numeric"
            placeholder="eg 90000 80000"
            onChangeText={(text) => setText(text)}
            style={[
              tw`w-full my-0 text-lg px-4 py-1 border rounded-md mt-2`,
              {
                borderColor: '#ccc',
              },
            ]}
          ></TextInput>
          <TouchableOpacity
            style={[
              tw`mt-6 rounded-md  mx-auto w-full text-center text-white bg-blue-500`,
            ]}
          >
            <Text
              style={[tw`text-white py-1 text-center py-2 text-lg`]}
              onPress={() => Alert.alert(`Sending otp to : ${text}`)}
            >
              Send otp
            </Text>
          </TouchableOpacity>
        </View>
        {/* <View
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
        </View> */}
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
