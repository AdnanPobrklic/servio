import { View, Text, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="mb-6 text-3xl font-bold">Welcome Home 🎉</Text>
      <Link href="/login" asChild>
        <TouchableOpacity className="rounded bg-blue-500 p-4">
          <Text className="text-white">Log Out</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
