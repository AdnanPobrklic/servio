import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { Link } from 'expo-router';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');

  return (
    <ImageBackground
      source={require('../../assets/bg-login.png')}
      resizeMode="cover"
      className="flex-1 bg-[#f4f4f4]">
      <View className="absolute inset-0 bg-black/50" />

      <View className="flex-1 items-center justify-start pt-24">
        <View className="w-11/12 max-w-md rounded-3xl bg-white p-8 shadow-md">
          {/* Title */}
          <Text className="text-[32px] font-extrabold text-[#2B959C]">Servio</Text>
          <Text className="mt-3 text-[18px] font-semibold text-[#6B6B6B]">
            Zaboravili ste šifru?
          </Text>

          {/* Email input */}
          <Text className="mb-2 mt-6 font-semibold text-[#2B959C]">E-mail / Telefon</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Unesite vaš e-mail ili broj telefona"
            placeholderTextColor="#A1A1A1"
            className="h-11 w-full rounded-md border-b-2 border-[#7DE6F1] bg-transparent text-[15px] text-gray-800"
          />

          {/* Submit button */}
          <TouchableOpacity className="mt-10 rounded-full bg-[#5AD2DF] py-3">
            <Text className="text-center text-[17px] font-extrabold text-white">
              Pošalji uputstva
            </Text>
          </TouchableOpacity>

          {/* Back to login */}
          <Text className="mt-5 text-center text-[#6B6B6B]">
            <Link href="/login" className="font-semibold text-[#6B6B6B] underline">
              Nazad na prijavu
            </Link>
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}
