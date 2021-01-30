import React, { useState } from 'react'
import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native'
import { WebView } from 'react-native-webview'
import Background from '../components/Background'
import Button from '../components/Button'
import CustomHeader from '../components/CustomHeader'
import Gap from '../components/Gap'
import Header from '../components/Header'
import Logo from '../components/Logo'
import TextInput from '../components/TextInput'
const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
const fullScreen =
  '?rel=0&controls=0&showinfo=0&loop=1&hd=1&modestbranding=1&enablejsapi=1&playerapiid=ytplayer'

const VideoStreaming = ({ navigation }) => {
  const [url, setUrl] = useState('')
  const [videoId, setVideoId] = useState('')
  const [isLoad, setIsLoad] = useState(true)

  const onSubmit = () => {
    if (url.length > 0) {
      let resultId = getId(url)
      if (resultId) {
        setVideoId(resultId)
        setIsLoad(false)
        setTimeout(() => {
          setIsLoad(true)
        }, 1500)
      } else {
        alert('URL tidak sesuai')
      }
    } else {
      alert('Masukan URL terlebih dahulu')
    }
  }

  const getId = (url) => {
    var video_id = url.split('v=')[1]
    if (video_id) {
      var ampersandPosition = video_id.indexOf('&')
      if (ampersandPosition != -1) {
        video_id = video_id.substring(0, ampersandPosition)
        return video_id
      }
    } else {
      return false
    }
  }

  return (
    <Background>
      <View style={{ flex: 1 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ flex: 1, width: '100%' }}
        >
          <CustomHeader onPress={navigation.goBack} title="Video Streaming" />
          <View
            style={{
              borderWidth: 1,
              borderRadius: 16,
              borderColor: '#ccc',
              width: width - 30,
              height: height * 0.4,
              padding: 10,
              marginTop: 20,
            }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Logo size={42} />
              <Gap width={10} />
              <Header>Youtube Streaming</Header>
            </View>
            {isLoad ? (
              <WebView
                containerStyle={{ borderRadius: 10 }}
                styl
                style={{ borderRadius: 10 }}
                source={{
                  uri: `http://www.youtube.com/embed/${
                    videoId ? videoId : 'ynn_YL1GsYE'
                  }${fullScreen}`,
                }}
              />
            ) : (
              <View
                style={{ flex: 1, height: '100%', justifyContent: 'center' }}
              >
                <ActivityIndicator size="large" color="red" />
              </View>
            )}
          </View>
          <View>
            <Gap height={20} />
            <Text
              style={{
                fontSize: 12,
                textAlign: 'justify',
                paddingHorizontal: 16,
              }}
            >
              Silahkan input/copy URL dari youtube kedalam field diabwah ini :
            </Text>
            <TextInput
              label="URL"
              returnKeyType="next"
              value={url}
              onChangeText={(text) => setUrl(text)}
              // error={!!email.error}
              // errorText={email.error}
              autoCapitalize="none"
              keyboardType="default"
            />
            <Button mode="contained" onPress={onSubmit}>
              Cari
            </Button>
          </View>
        </ScrollView>
      </View>
    </Background>
  )
}

export default VideoStreaming

const styles = StyleSheet.create({})
