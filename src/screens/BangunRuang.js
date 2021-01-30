import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import BackButton from '../components/BackButton'
import Background from '../components/Background'
import Button from '../components/Button'
import CustomHeader from '../components/CustomHeader'
import Gap from '../components/Gap'
import Header from '../components/Header'
import Logo from '../components/Logo'
import TextInput from '../components/TextInput'

const BangunRuang = ({ navigation }) => {
  const [form, setForm] = useState({
    sisi: '',
    result: '',
  })

  const onChangeState = (key, val) => {
    setForm({
      ...form,
      [key]: val,
    })
  }

  const onSubmit = () => {
    let result = 6 * form.sisi
    onChangeState('result', result)
  }

  return (
    <Background>
      <View style={{ flex: 1, width: '100%', height: '100%' }}>
        <CustomHeader onPress={navigation.goBack} title="Bangun Ruang" />
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Header>KUBUS</Header>
        </View>
        <View>
          <Image
            source={require('../assets/kubus-rumus.jpg')}
            style={{
              width: '100%',
              height: Dimensions.get('window').height * 0.25,
            }}
          />
          <Gap height={30} />
          <Text style={styles.titleText}>Hitung Luas Kubus : </Text>
          <TextInput
            label="Panjang Sisi"
            returnKeyType="next"
            value={form.sisi}
            onChangeText={(text) => onChangeState('sisi', text)}
            // error={!!email.error}
            // errorText={email.error}
            autoCapitalize="none"
            keyboardType="default"
          />
          <Text style={styles.titleText}>Hasil : </Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.titleText}>
              {form.result ? form.result : 0} cm
            </Text>
            <Text style={{ fontSize: 10 }}>2</Text>
          </View>
        </View>
        {/* End CardView */}
        <Button mode="contained" onPress={onSubmit}>
          Hitung
        </Button>
      </View>
    </Background>
  )
}

export default BangunRuang

const styles = StyleSheet.create({
  titleText: { fontSize: 16, fontWeight: 'bold' },
})
