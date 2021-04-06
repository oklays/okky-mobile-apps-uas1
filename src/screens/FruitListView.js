import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import Header from '../components/Header'
import { useNavigation } from '@react-navigation/native'
const dataObj = [
  {
    name: 'Alpukat',
    code: '#1abc9c',
    url: 'https://id.wikipedia.org/wiki/Avokad',
    image: 'https://pngimg.com/uploads/avocado/avocado_PNG15489.png',
  },
  {
    name: 'Apel',
    code: '#2ecc71',
    url: 'https://id.wikipedia.org/wiki/Apel',
    image: 'https://pngimg.com/uploads/apple/apple_PNG12405.png',
  },
  {
    name: 'Ceri',
    code: '#3498db',
    url: 'https://id.wikipedia.org/wiki/Ceri',
    image: 'https://pngimg.com/uploads/cherry/cherry_PNG635.png',
  },
  {
    name: 'Durian',
    code: '#34495e',
    url: 'https://id.wikipedia.org/wiki/Durian',
    image: 'http://assets.stickpng.com/images/5a5f61a9ee40df432bfac542.png',
  },
  {
    name: 'Manggis',
    code: '#16a085',
    url: 'https://id.wikipedia.org/wiki/Manggis',
    image:
      'https://cdn.pixabay.com/photo/2013/07/12/15/34/mangosteen-150094_960_720.png',
  },
  {
    name: 'Strawberry',
    code: '#27ae60',
    url: 'https://id.wikipedia.org/wiki/Stroberi_kebun',
    image:
      'https://lh3.googleusercontent.com/proxy/DFx21jpjSZxrfcuX5xAPVf0gLT0JxOijnBHdHEqWPOW67BGVl-dCBkq-0djcoinlld4Cv1r8uGR6TWJBe3ZBp5Ld_1KgHkS4poM1IqyQejoMdxYhe6mgo_5h_kM_4nolRV7trw',
  },
  {
    name: 'Semangka',
    code: '#2980b9',
    url: 'https://id.wikipedia.org/wiki/Semangka',
    image:
      'https://cdn.pixabay.com/photo/2014/03/27/14/55/watermelon-299526_960_720.png',
  },
]

const CardView = ({ data }) => {
  const navigation = useNavigation()

  const onPress = (link) => {
    navigation.navigate('DetailScreen', {
      url: link,
    })
  }
  return data.map((item, index) => (
    <TouchableOpacity
      onPress={() => onPress(item.url)}
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
        resizeMode="contain"
        source={{ uri: item.image }}
        style={{ width: 160, height: 140 }}
      />
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
    </TouchableOpacity>
  ))
}

const FruitListView = ({ navigation }) => {
  const onClick = () => {
    navigation.navigate('GridScreen')
  }

  return (
    <View style={styles.container}>
      <View>
        <Header>List View</Header>
        <TouchableOpacity
          onPress={onClick}
          style={{
            alignSelf: 'center',
            padding: 12,
            backgroundColor: '#f1c40f',
            borderRadius: 10,
            marginBottom: 10,
          }}
        >
          <Text style={{ color: '#000' }}>Grid List</Text>
        </TouchableOpacity>
        <View style={{ width: '100%' }}>
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
