import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import Header from '../components/Header'
const dataObj = [
  {
    title: 'Strawberry',
    uri:
      'https://d3m42m4kjymytz.cloudfront.net/kraft/v201909090353/img/fruits-for-a-smoothie.png',
  },
  {
    title: 'Avocado',
    uri:
      'https://californiaavocado.com/wp-content/uploads/2020/07/avocado-fruit-berry.jpg',
  },
  {
    title: 'Kiwi',
    uri:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/02/Kiwi-fruits-582a07b.jpg?quality=90&resize=960,872',
  },
  {
    title: 'Strawberry',
    uri:
      'https://d3m42m4kjymytz.cloudfront.net/kraft/v201909090353/img/fruits-for-a-smoothie.png',
  },
  {
    title: 'Avocado',
    uri:
      'https://californiaavocado.com/wp-content/uploads/2020/07/avocado-fruit-berry.jpg',
  },
  {
    title: 'Kiwi',
    uri:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/02/Kiwi-fruits-582a07b.jpg?quality=90&resize=960,872',
  },
]

const CardView = ({ data }) => {
  return data.map((item, index) => (
    <View
      key={('key-', index)}
      style={{
        borderRadius: 16,
        width: '100%',
        marginBottom: 16,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
      }}
    >
      <Image
        resizeMode="center"
        source={{ uri: item.uri }}
        style={{ width: 160, height: 140 }}
      />
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.title}</Text>
    </View>
  ))
}

const FruitListView = () => {
  return (
    <View style={styles.container}>
      <View>
        <Header>List Buah-Buahan</Header>
        <View style={{ width: '100%' }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 16 }}>
            Nama : Okky Alwan Baidhoo
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 16 }}>
            Kelas : TI-18B / Malam
          </Text>
          <ScrollView>
            <CardView data={dataObj} />
          </ScrollView>
        </View>
      </View>
    </View>
  )
}

export default FruitListView

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
})
