import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native'
import Background from '../components/Background'
import Button from '../components/Button'
import CustomHeader from '../components/CustomHeader'
import Gap from '../components/Gap'
import Header from '../components/Header'
import TextInput from '../components/TextInput'

const BangunDatarSegitiga = ({ navigation }) => {
  const [form, setForm] = useState({
    alas: '',
    tinggi: '',
    result: '',
  })

  const onChangeState = (key, val) => {
    setForm({
      ...form,
      [key]: val,
    })
  }

  const onSubmit = () => {
    let result = 0.5 * form.alas * form.tinggi
    onChangeState('result', result)
  }

  return (
    <Background>
      <View style={{ flex: 1, width: '100%', height: '100%' }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <CustomHeader onPress={navigation.goBack} title="Bangun Datar" />
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Header>SEGITIGA</Header>
          </View>
          <View>
            <Image
              source={require('../assets/segitiga.jpg')}
              style={{
                width: '100%',
                height: Dimensions.get('window').height * 0.2,
                borderRadius: 16,
              }}
            />
            <Gap height={30} />
            <Text style={styles.titleText}>Hitung Luas Segitiga : </Text>
            <TextInput
              label="Alas"
              returnKeyType="next"
              value={form.sisi}
              onChangeText={(text) => onChangeState('alas', text)}
              // error={!!email.error}
              // errorText={email.error}
              autoCapitalize="none"
              keyboardType="default"
            />
            <TextInput
              label="Tinggi"
              returnKeyType="next"
              value={form.sisi}
              onChangeText={(text) => onChangeState('tinggi', text)}
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
        </ScrollView>
        {/* End CardView */}
        <Button mode="contained" onPress={onSubmit}>
          Hitung
        </Button>
      </View>
    </Background>
  )
}

export default BangunDatarSegitiga

const styles = StyleSheet.create({
  titleText: { fontSize: 16, fontWeight: 'bold' },
})
