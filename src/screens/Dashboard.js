import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'

const Dashboard = ({ navigation }) => (
  <Background>
    <Logo />
    <Header>Pilih ya..</Header>
    <Paragraph>Silahkan pilih menu pilihan dibawah ini</Paragraph>
    <Button mode="outlined" onPress={() => navigation.navigate('BangunRuang')}>
      Bangun Ruang
    </Button>
    <Button
      mode="outlined"
      onPress={() => navigation.navigate('BangunDatarSegitiga')}
    >
      Bangun Datar
    </Button>
    <Button
      mode="outlined"
      onPress={() => navigation.navigate('VideoStreaming')}
    >
      Video Streaming
    </Button>
    <Button
      mode="contained"
      onPress={() => navigation.navigate('CreditScreen')}
    >
      About
    </Button>
    <Button
      icon={require('../assets/exit.png')}
      mode="outlined"
      onPress={() => navigation.navigate('StartScreen')}
    >
      Keluar
    </Button>
  </Background>
)

export default Dashboard
