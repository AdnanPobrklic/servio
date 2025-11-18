import { useState } from 'react';
import { View, Text, TouchableOpacity, Pressable, Modal } from 'react-native';
import { Link } from 'expo-router';
import { FontAwesome5, FontAwesome, FontAwesome6 } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showUsluge, setShowUsluge] = useState(false);

  const USLUGE = [
    'Čišćenje',
    'Transport i selidba',
    'Gradnja i renovacija',
    'Imovina',
    'Enterijer',
    'IT, Web i grafički dizajn',
  ];

  return (
    <>
      {/* TOP BAR - Wrapped in SafeAreaView to respect status bar */}
      <SafeAreaView className="w-full bg-white">
        <View className="w-full flex-row items-center justify-between border-b-2 border-[#7DE6F1] px-6 py-4">
          <Text className="font-archivo text-[28px] font-black text-[#2B959C]">Servio</Text>
          <TouchableOpacity onPress={() => setIsMenuOpen(true)}>
            <FontAwesome name="bars" size={28} color="#2B959C" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      {/* FULLSCREEN MENU */}
      <Modal visible={isMenuOpen} transparent={false} animationType="slide">
        <SafeAreaView className="flex-1 bg-[#2B959C]">
          {/* Close */}
          <Pressable
            onPress={() => setIsMenuOpen(false)}
            className="absolute right-6 top-6 z-10 h-6 w-6 items-center justify-center">
            <FontAwesome6 name="xmark" size={28} color="white" />
          </Pressable>

          {/* Menu */}
          <View className="flex-1 justify-between px-6 pb-6 pt-24">
            {/* TOP SECTION */}
            <View className="space-y-10">
              {/* Usluge with toggle */}
              <TouchableOpacity
                onPress={() => setShowUsluge(!showUsluge)}
                className="flex-row items-center justify-between border-b border-white pb-2">
                <Text className="text-xl font-bold text-white">Usluge</Text>
                <FontAwesome5
                  name={showUsluge ? 'chevron-up' : 'chevron-down'}
                  size={18}
                  color="white"
                />
              </TouchableOpacity>

              {/* Dropdown */}
              {showUsluge && (
                <View className="ml-2 mt-3 space-y-8">
                  {USLUGE.map((u, index) => {
                    return (
                      <Text className="p-1 text-lg font-semibold text-white" key={index}>
                        {u}
                      </Text>
                    );
                  })}
                </View>
              )}

              {/* Poveži firmu */}
              <Link href="/register-company" asChild>
                <TouchableOpacity className="mt-4 border-b border-white pb-2">
                  <Text className="text-xl font-bold text-white">Poveži firmu</Text>
                </TouchableOpacity>
              </Link>
            </View>
            {/* PRIJAVA BUTTON AT BOTTOM */}
            <Link
              href="/login"
              onPress={() => setIsMenuOpen(false)}
              className="w-full self-start rounded-full bg-white px-12 py-4">
              <Text className="text-xl font-bold text-[#2B959C]">Prijava</Text>
            </Link>
          </View>
        </SafeAreaView>
      </Modal>
    </>
  );
}
