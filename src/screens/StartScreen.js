import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import { Text, View, Image } from 'react-native'

const StartScreen = ({ navigation }) => (
  <Background>
    <Logo />
    <Header>Mulai dari sini ya...</Header>
    <Paragraph>
      Aplikasi ini dibuat untuk kebutuhan UAS kampus
      <Text style={{ fontWeight: 'bold' }}> Bina Insani University</Text>
    </Paragraph>
    <Button mode="contained" onPress={() => navigation.navigate('LoginScreen')}>
      Masuk
    </Button>
    <Button
      mode="outlined"
      onPress={() => navigation.navigate('RegisterScreen')}
    >
      Daftar
    </Button>
    <View style={{ position: 'absolute', bottom: 30, alignItems: 'center' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ fontWeight: '200' }}>made with </Text>
        <Image
          source={require('../assets/hearth.png')}
          style={{ width: 19, height: 18 }}
        />
        <Text style={{ fontWeight: '200' }}> in bekasi</Text>
      </View>
      <Text style={{ fontWeight: '600' }}>V.1.0</Text>
    </View>
  </Background>
)

export default StartScreen
