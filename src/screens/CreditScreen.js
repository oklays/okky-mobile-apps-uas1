import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import { View, Text } from 'react-native'
import Gap from '../components/Gap'
import CustomHeader from '../components/CustomHeader'

const CreditScreen = ({ navigation }) => (
  <Background>
    <View style={{ flex: 1, padding: 16, width: '100%' }}>
      <CustomHeader title="Kembali" onPress={navigation.goBack} />
      <Logo />
      <Header>Developer</Header>
      <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
        Okky Alwan Baidhoo
      </Text>
      <Text style={{ fontSize: 16, fontWeight: '300' }}>IG : @okky_alwan</Text>
      <Text style={{ fontSize: 16, fontWeight: '300' }}>
        Twitter : @Baidhoo_okky
      </Text>
      <Gap height={10} />
      {/* Section 2 */}
      <Header>Icons & Illustration</Header>
      <Text style={{ fontSize: 16, fontWeight: 'bold' }}>FlatIcons</Text>
      <Text style={{ fontSize: 16, fontWeight: '300' }}>
        https://www.flaticon.com/
      </Text>
      <Gap height={10} />
      {/* Section 3 */}
      <Header>Video Streaming</Header>
      <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Youtube</Text>
      <Text style={{ fontSize: 16, fontWeight: '300' }}>
        https://www.youtube.com/
      </Text>
    </View>
  </Background>
)

export default CreditScreen
