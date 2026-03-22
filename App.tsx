import AppRoutes from './Routes';
import { Inter_800ExtraBold, Inter_400Regular, Inter_400Regular_Italic, useFonts } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded, error] = useFonts({ 
    extraBold: Inter_800ExtraBold, 
    regular: Inter_400Regular, 
    regularItalic: Inter_400Regular_Italic 
  })

  useEffect(() => {
    if (fontsLoaded || error) {
      SplashScreen.hideAsync();
    }
  },[fontsLoaded, error])

  if (!fontsLoaded && error) {
    return null;
  } 


  return <AppRoutes />;
}

