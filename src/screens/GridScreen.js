import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native'
import { FlatGrid } from 'react-native-super-grid'
import Button from '../components/Button'

const GridScreen = ({ navigation }) => {
  const [items, setItems] = React.useState([
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
  ])

  const onClick = () => {
    navigation.navigate('FruitListView')
  }

  const onPress = (link) => {
    navigation.navigate('DetailScreen', {
      url: link,
    })
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <TouchableOpacity
          onPress={onClick}
          style={{
            marginTop: 40,
            alignSelf: 'center',
            padding: 12,
            backgroundColor: '#f1c40f',
            borderRadius: 10,
          }}
        >
          <Text style={{ color: '#000' }}>ListView</Text>
        </TouchableOpacity>
        <FlatGrid
          itemDimension={130}
          data={items}
          style={styles.gridView}
          spacing={10}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => onPress(item.url)}
              style={[styles.itemContainer, { backgroundColor: item.code }]}
            >
              <Image
                source={{ uri: item.image }}
                style={{ width: '65%', height: '85%', resizeMode: 'contain' }}
              />
              <Text style={styles.itemName}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
        <Button
          mode="contained"
          onPress={() => navigation.navigate('StartScreen')}
        >
          Kembali ke Main Screen
        </Button>
      </ScrollView>
    </View>
  )
}

export default GridScreen

const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
})
