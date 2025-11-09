import { View, Text, TextInput, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { Link } from 'expo-router';

export default function Register() {
  return (
    <ImageBackground
      source={require('../../assets/bg-login.png')}
      resizeMode="cover"
      className="flex-1 bg-[#f4f4f4]">
      <View className="absolute inset-0 bg-black/50" />

      <View className="flex-1 items-center justify-start pt-24">
        <View className="w-11/12 max-w-md rounded-3xl bg-white p-8 shadow-md">
          {/* Title */}
          <View className="mb-3 flex-col justify-between">
            <Text className="text-[32px] font-extrabold text-[#2B959C]">Servio</Text>
          </View>
          <Text className="mt-3 text-[18px] font-semibold text-[#6B6B6B]">Registracija</Text>

          {/* Email / Phone input */}
          <Text className="mb-2 mt-6 font-semibold text-[#2B959C]">E-mail / telefon</Text>
          <TextInput
            placeholderTextColor="#A1A1A1"
            placeholder="Unesite vaš e-mail ili telefon"
            className="h-11 w-full rounded-md border-b-2 border-[#7DE6F1] bg-transparent px-2 text-[15px] text-gray-800"
          />

          {/* Password input */}
          <Text className="mb-2 mt-6 font-semibold text-[#2B959C]">Šifra</Text>
          <TextInput
            placeholderTextColor="#A1A1A1"
            secureTextEntry
            placeholder="••••••••"
            className="h-11 w-full rounded-md border-b-2 border-[#7DE6F1] bg-transparent px-2 text-[15px] text-gray-800"
          />

          {/* Checkbox / Forgot password */}
          {/* Forgot password link */}
          <View className="mb-12 mt-6 flex-row items-center justify-between">
            <Link href="/register-company" className="font-extrabold text-[#2B959C] underline">
              Poveži firmu
            </Link>
          </View>

          {/* Register button */}
          <TouchableOpacity className="mt-10 rounded-full bg-[#5AD2DF] py-3">
            <Text className="text-center text-[17px] font-extrabold text-white">Registracija</Text>
          </TouchableOpacity>

          {/* Login link */}
          <Text className="mt-5 text-center text-[#6B6B6B]">
            Već imate profil?{' '}
            <Link href="/login" className="font-semibold text-[#6B6B6B] underline">
              Prijavite se
            </Link>
          </Text>

          {/* Divider */}
          <View className="mt-8 flex-row items-center">
            <View className="h-[1px] flex-1 bg-gray-300" />
            <Text className="mx-2 text-sm text-gray-500">Prijava pomoću</Text>
            <View className="h-[1px] flex-1 bg-gray-300" />
          </View>

          {/* Google Sign-Up */}
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
