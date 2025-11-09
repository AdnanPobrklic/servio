import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function RegisterCompany() {
  const [step, setStep] = useState(1);

  // Form state
  const [companyName, setCompanyName] = useState('');
  const [service, setService] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [documents, setDocuments] = useState(''); // placeholder for file input

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <ImageBackground
      source={require('../../assets/bg-login.png')}
      resizeMode="cover"
      className="flex-1 bg-[#f4f4f4]">
      <View className="absolute inset-0 bg-black/50" />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="px-6 pt-24">
        <View className="mx-auto w-full max-w-md rounded-3xl bg-white p-8 shadow-md">
          {/* Step 1: Company info */}
          {step === 1 && (
            <View>
              <Text className="mb-2 text-[24px] font-extrabold text-[#2B959C]">
                Prijavite svoju firmu
              </Text>
              <Text className="mb-6 text-[#6B6B6B]">
                Popunite formular ispod i naš tim će pregledati podatke vaše firme. Nakon provjere,
                kontaktiraćemo vas.
              </Text>

              <Text className="mb-2 font-semibold text-[#2B959C]">Ime firme</Text>
              <TextInput
                placeholder="Unesite ime firme"
                placeholderTextColor="#A1A1A1"
                className="mb-4 h-11 w-full rounded-md border-b-2 border-[#7DE6F1] px-2 text-[15px] text-gray-800"
                value={companyName}
                onChangeText={setCompanyName}
              />

              <Text className="mb-2 font-semibold text-[#2B959C]">Usluga koju pružate</Text>
              <TextInput
                placeholder="Unesite uslugu"
                placeholderTextColor="#A1A1A1"
                className="mb-4 h-11 w-full rounded-md border-b-2 border-[#7DE6F1] px-2 text-[15px] text-gray-800"
                value={service}
                onChangeText={setService}
              />

              <Text className="mb-2 font-semibold text-[#2B959C]">Telefon</Text>
              <TextInput
                placeholder="Unesite broj telefona"
                placeholderTextColor="#A1A1A1"
                className="mb-4 h-11 w-full rounded-md border-b-2 border-[#7DE6F1] px-2 text-[15px] text-gray-800"
                value={phone}
                onChangeText={setPhone}
              />

              <Text className="mb-2 font-semibold text-[#2B959C]">Adresa</Text>
              <TextInput
                placeholder="Unesite adresu"
                placeholderTextColor="#A1A1A1"
                className="mb-6 h-11 w-full rounded-md border-b-2 border-[#7DE6F1] px-2 text-[15px] text-gray-800"
                value={address}
                onChangeText={setAddress}
              />

              {/* Footer */}
              <View className="mt-8 flex-row items-center justify-between">
                <Link href="/login" className="font-semibold text-[#6B6B6B] underline">
                  Već imate nalog? Prijavite se
                </Link>
                <TouchableOpacity
                  onPress={nextStep}
                  className="rounded-full bg-[#5AD2DF] px-6 py-3">
                  <Text className="text-[17px] font-extrabold text-white">Dalje</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}

          {/* Step 2: Documents */}
          {step === 2 && (
            <View>
              <Text className="mb-2 text-[24px] font-extrabold text-[#2B959C]">
                Pošaljite dokumente firme
              </Text>
              <Text className="mb-6 text-[#6B6B6B]">
                Pošaljite nam relevantne dokumente vaše firme. Da li ste registrovani? Molimo da
                priložite sve neophodne papire kako bismo mogli nastaviti sa verifikacijom.
              </Text>

              <Text className="mb-2 font-semibold text-[#2B959C]">Dokumenti</Text>
              <TextInput
                placeholder="Odaberite datoteke (PDF, JPG, PNG)"
                placeholderTextColor="#A1A1A1"
                className="mb-6 h-11 w-full rounded-md border-b-2 border-[#7DE6F1] px-2 text-[15px] text-gray-800"
                value={documents}
                onChangeText={setDocuments}
              />

              {/* Footer */}
              <View className="mt-8 flex-row items-center justify-between">
                <TouchableOpacity onPress={prevStep} className="rounded-full bg-gray-300 px-6 py-3">
                  <Text className="text-[17px] font-semibold text-gray-800">Nazad</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={nextStep}
                  className="rounded-full bg-[#5AD2DF] px-6 py-3">
                  <Text className="text-[17px] font-extrabold text-white">Dalje</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}

          {/* Step 3: Success */}
          {step === 3 && (
            <View className="items-center justify-center py-12">
              <View className="mb-6 rounded-full bg-[#5AD2DF] p-6">
                <MaterialIcons name="check" size={64} color="white" />
              </View>
              <Text className="mb-4 text-center text-[24px] font-extrabold text-[#2B959C]">
                Uspješno poslano!
              </Text>
              <Text className="mb-6 text-center text-[#6B6B6B]">
                Vaša prijava je poslata. Kontaktiraćemo vas u najkraćem mogućem roku.
              </Text>
              <TouchableOpacity
                onPress={() => setStep(1)}
                className="mt-8 rounded-full bg-[#5AD2DF] px-6 py-3">
                <Text className="text-[17px] font-extrabold text-white">Početak</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
