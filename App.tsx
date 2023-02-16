import "./src/lib/dayjs"
import { StatusBar } from 'react-native';
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold } from '@expo-google-fonts/inter'
import { Loading } from './src/components/Loading';
import { Routes } from "./src/routes";
import * as Notifications from 'expo-notifications';


Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
})


export default function App() {

  const [fontsLoded] = useFonts({
    Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold
  })

  async function scheduleNotification(){
    const trigger = new Date(Date.now())
    trigger.setMinutes(trigger.getMinutes() + 1)

    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Ola, teste!",
        body: "Voçê praticou seus habitos hoje?"
      },
      trigger
    })

  }
  

  if (!fontsLoded) {
    return (
      <Loading />
    )
  }

  return (
    <>
      <Routes />
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
    </>
  );
}

