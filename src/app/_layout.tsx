import { Stack } from 'expo-router'; // <-- Import Stack
import { ThemeProvider } from '@/theme/ThemeContext';
import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'Nunito-Regular': Nunito_400Regular,
    'Nunito-Bold': Nunito_700Bold,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  
  return (
    <ThemeProvider>
      
      {/* headerShown: false hides the default black 'Expo Starter' header */}
      <Stack screenOptions={{ headerShown: false }} />
      
    </ThemeProvider>
  );
}