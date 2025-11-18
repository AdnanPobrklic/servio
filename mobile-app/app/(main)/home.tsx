import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native';
import { Link } from 'expo-router';
import NavBar from 'components/NavBar';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';

export default function Home() {
  const CATEGORIES = [
    'Čišćenje',
    'Transport i selidba',
    'Gradnja i renovacija',
    'Imovina',
    'Enterijer',
    'Web i grafički dizajn',
  ];

  const STEPS = [
    {
      number: 1,
      title: 'Definisanje posla',
      description:
        'Opisi šta želiš da uradiš bilo da je u pitanju čišćenje, renoviranje ili popravka. Unesi detalje i obim posla.',
      icon: <MaterialIcons name="assignment" size={40} color="#2B959C" />,
    },
    {
      number: 2,
      title: 'Slanje zahtjeva',
      description: 'Pošalji svoj zahtjev i firme koje nude tu uslugu će biti obaviještene.',
      icon: <FontAwesome5 name="paper-plane" size={40} color="#2B959C" />,
    },
    {
      number: 3,
      title: 'Pregled ponuda i dogovor',
      description:
        'Pregledaj pristigle ponude, uporedi cijene i dogovori posao sa firmom koja ti najviše odgovara.',
      icon: <MaterialIcons name="check-circle" size={40} color="#2B959C" />,
    },
  ];

  return (
    <View className="flex-1 bg-white">
      <NavBar />

      <ScrollView className="flex-1">
        {/* Main content */}
        <View className="items-center px-6">
          {/* Title */}
          <Text className="w-full  text-start text-4xl font-bold text-[#2B959C]">
            Traži, uporedi i angažuj.
          </Text>
          <Text className="w-full pb-10 text-center text-3xl font-bold text-[#2B959C]">
            Sve na jednom mjestu.
          </Text>
          {/* Search Input */}
          <View className="mb-6 w-full max-w-[400px]">
            <TextInput
              className="w-full rounded-full border-2 border-[#2B959C] bg-white px-5 py-3 text-base shadow-lg"
              placeholder="Pretraži"
              placeholderTextColor="#666"
            />
          </View>

          {/* Categories */}
          <View className="my-4 flex-row flex-wrap justify-center pb-4">
            {CATEGORIES.map((cat, i) => (
              <TouchableOpacity key={i} className="m-1 rounded-full  bg-[#2B959C] px-4 py-2">
                <Text className="text-md py-2 font-semibold text-white">{cat}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Image Section */}
          <View className="mb-8 w-full items-center">
            <Image
              source={require('../../assets/main-bg.png')} // Replace with your actual image
              className="h-60 w-full max-w-[350px] rounded-2xl sm:h-72 md:h-80"
              resizeMode="cover"
            />
          </View>
        </View>

        {/* Zašto Servio Section */}
        <View className="mt-6 rounded-lg bg-[#7DE6F1] px-6 py-10">
          <Text className="text-light-blue-green mb-4 text-center text-3xl font-black">
            Zašto baš Servio?
          </Text>
          <Text className="text-center text-lg leading-8">
            Servio ti štedi vrijeme i novac. Umjesto da gubiš sate pretražujući različite sajtove i
            pozivajući desetine firmi, na jednom mjestu pronađi, uporedi i angažuj provjerene
            pružaoce usluga. Bez stresa, bez nepotrebnog pregovaranja - samo brzo i pouzdano
            rješenje prilagođeno tvojim potrebama.
          </Text>
        </View>

        {/* Kako koristiti Servio */}
        <View className="mt-6 px-6 py-10">
          <Text className="mb-10 text-center text-3xl font-black text-[#2B959C]">
            Kako koristiti Servio
          </Text>

          {STEPS.map((step) => (
            <View
              key={step.number}
              className="mb-8 items-center rounded-2xl border-2 border-[#2B959C] bg-white p-8 shadow-lg">
              <View className="mb-2">{step.icon}</View>
              <View className="absolute left-1/2 top-0 flex h-10 w-10 -translate-y-5 translate-x-[10px] items-center justify-center rounded-full border-2 border-white bg-white shadow-md">
                <Text className="text-3xl font-bold text-[#2B959C]">{step.number}</Text>
              </View>
              <Text className="mb-1 mt-2 text-center text-2xl font-bold text-[#2B959C]">
                {step.title}
              </Text>
              <Text className="text-light-blue-green-darker text-md text-center ">
                {step.description}
              </Text>
            </View>
          ))}
        </View>

        {/* Connect Firm Section */}
        <View className="mt-6 items-center overflow-hidden">
          <ImageBackground
            source={require('../../assets/bg-login.png')}
            className="w-full px-6 py-24"
            resizeMode="cover">
            <View className="items-center rounded-2xl bg-white px-6 py-12">
              <Text className="mb-6 text-center text-3xl font-black text-[#2B959C]">
                Imate uslugu koju želite približiti klijentima?
              </Text>
              <Text className="text-md mb-6 text-center text-gray-700">
                Registrujte se na Servio, povežite firmu i počnite nuditi usluge!
              </Text>
              <Link href="/register-company" asChild>
                <TouchableOpacity className="rounded-full bg-[#7DE6F1] px-8 py-3 shadow-lg">
                  <Text className="text-lg font-bold text-black">Poveži firmu</Text>
                </TouchableOpacity>
              </Link>
            </View>
          </ImageBackground>
        </View>

        {/* Coverage Section */}
        <View className="w-full items-center overflow-hidden py-16">
          <ImageBackground
            source={require('../../assets/map-of-bosnia.png')}
            className="w-full px-6 py-24"
            resizeMode="cover">
            {/* Overlay behind the text */}
            <View className="absolute inset-0 bg-black/40" />

            {/* Content on top */}
            <View className="z-10 w-full items-center rounded-2xl px-6 py-12">
              <Text className="mb-4 text-center text-3xl font-black text-white">
                Tražite provjerenu uslugu u svom gradu?
              </Text>
              <Text className="text-center text-lg text-white">
                Djelujemo u svim gradovima Bosne i Hercegovine, naša mreža pokriva cijelu zemlju.
              </Text>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    </View>
  );
}
