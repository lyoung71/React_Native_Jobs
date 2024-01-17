import { useState } from 'react';
import { StyleSheet, ScrollView, SafeAreaView  } from 'react-native';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../../constants';
import {
  Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome
} from '../../components';
import { DarkTheme } from '@react-navigation/native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Home = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
      options={{
        headerStyle: { backgroundColor: COLORS.lightWhite },
        headerShadowVisible: false,
        headerLeft: () => (
          <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
        ),
        headerRight: () => (
          <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
        ),
        headerTitle: ""
      }}
      />
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium
          }}
          darkColor="rgba(000,000,000,0)"

        >
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if(searchTerm) {
                router.push(`/search/${searchTerm}`)
              }
            }}

          />

          <Popularjobs/>
          <Nearbyjobs/>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home;
export function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
