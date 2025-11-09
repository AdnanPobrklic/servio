import { Stack } from 'expo-router';
import '../global.css';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: 'none', // disables the slide transition
      }}
    />
  );
}
