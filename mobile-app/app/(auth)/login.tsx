import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { Link } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

export default function Login() {
  const [stayLoggedIn, setStayLoggedIn] = useState(false);

  return (
    <ImageBackground
      source={require('../../assets/bg-login.png')}
      resizeMode="cover"
      className="flex-1 bg-[#f4f4f4]">
      <View className="absolute inset-0 bg-black/50" />

      <View className="flex-1 items-center justify-start pt-24">
        <View className="w-11/12 max-w-md rounded-3xl bg-white p-8 shadow-md">
          {/* Top row: Logo + Admin link */}
          <View className="mb-3 flex-col justify-between">
            <Text className="text-[32px] font-extrabold text-[#2B959C]">Servio</Text>
            <Text
              className="pb-4 text-[#6B6B6B]"
              style={{ marginBottom: 4 }} // nudge it down to match the bottom
            >
              Prijavite se kao kompanija ili korisnik
            </Text>
          </View>

          {/* Title */}
          <Text className="mt-3 text-[18px] font-semibold text-[#6B6B6B]">Prijavi se</Text>

          {/* Email / Phone input */}
          <Text className="mb-2 mt-6 font-semibold text-[#2B959C]">E-mail / telefon</Text>
          <TextInput
            placeholder="Unesite vaš e-mail ili telefon"
            placeholderTextColor="#A1A1A1"
            className="h-11 w-full rounded-md border-b-2 border-[#7DE6F1] bg-transparent px-0 text-[15px] text-gray-800"
          />

          {/* Password label row */}
          <View className="mt-6 flex-row items-center justify-between">
            <Text className="font-semibold text-[#2B959C]">Šifra</Text>
            <Link href="/forgot-password" className="text-[#2B959C p-2 text-sm font-semibold">
              Zaboravili ste šifru?
            </Link>
          </View>

          {/* Password input */}
          <TextInput
            placeholderTextColor="#A1A1A1"
            secureTextEntry
            placeholder="••••••••"
            className="mt-2 h-11 w-full rounded-md border-b-2 border-[#7DE6F1] bg-transparent text-[15px] text-gray-800"
          />

          {/* Ostani prijavljen checkbox */}
          <View className="mb-12 mt-6 flex-row items-center justify-between">
            {/* Poveži firmu as a link */}
            <Link href="/register-company" className="p-2 font-extrabold text-[#2B959C] underline">
              Poveži firmu
            </Link>

            {/* Ostani prijavljen checkbox */}
            <TouchableOpacity
              onPress={() => setStayLoggedIn(!stayLoggedIn)}
              className="flex-row items-center"
              activeOpacity={0.8}>
              <Text className="mr-2 text-[#2B959C]">Ostani prijavljen</Text>
              <View
                className={`h-5 w-5 items-center justify-center rounded-full ${
                  stayLoggedIn ? 'bg-[#2B959C]' : 'border-2 border-[#2B959C]'
                }`}>
                {stayLoggedIn && <MaterialIcons name="check" size={14} color="white" />}
              </View>
            </TouchableOpacity>
          </View>

          {/* Login button */}
          <TouchableOpacity className="mt-4 rounded-full bg-[#5AD2DF] py-3">
            <Text className="text-center text-[17px] font-extrabold text-white">Prijava</Text>
          </TouchableOpacity>

          {/* Register link */}
          <Text className="mt-5 p-1 text-center text-[#6B6B6B] ">
            Nemate profil?{' '}
            <Link href="/register" className="p-2 font-semibold text-[#6B6B6B] underline">
              Registrujte se
            </Link>
          </Text>

          {/* Divider / Social login */}
          <View className="mt-8 flex-row items-center">
            <View className="h-[1px] flex-1 bg-gray-300" />
            <Text className="mx-2 text-sm text-gray-500">Prijava pomoću</Text>
            <View className="h-[1px] flex-1 bg-gray-300" />
          </View>

          <View className="mt-5 items-center">
            <TouchableOpacity className="rounded-full p-3">
              <Image
                source={require('../../assets/google-icon.png')}
                className="h-12 w-12"
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
