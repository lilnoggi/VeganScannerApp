import { Stack } from 'expo-router'; // <-- Import Stack
import { ThemeProvider } from '@/theme/ThemeContext';

export default function RootLayout() {
  return (
    <ThemeProvider>
      
      {/* headerShown: false hides the default black 'Expo Starter' header */}
      <Stack screenOptions={{ headerShown: false }} />
      
    </ThemeProvider>
  );
}