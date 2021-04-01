import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
// import { ILLogo } from 'assets'
// import { CustomButton } from 'components'
import { ILGetStarted } from '../../assets'
// import { Gap } from 'components'
import { colors, fonts } from '../../utils'

const GetStarted = (props) => {
  const { navigation } = props

  return (
    <ImageBackground source={ILGetStarted} style={styles.page}>
      <View style={styles.container}>
        {/* <ILLogo />
        <Text style={styles.title}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View>
        <CustomButton
          onPress={() => navigation.navigate('Register')}
          title="Get Started"
        />
        <Gap height={16} />
        <CustomButton
          onPress={() => navigation.replace('Login')}
          type="secondary"
          title="Sign In"
        /> */}
      </View>
    </ImageBackground>
  )
}

export default GetStarted

const styles = StyleSheet.create({
  page: {
    justifyContent: 'space-between',
    flex: 1,
    backgroundColor: colors.white,
  },
  container: { flex: 1, backgroundColor: '#000', opacity: 0.5, padding: 40 },
  title: {
    fontSize: 28,
    marginTop: 91,
    color: colors.white,
    // fontFamily: fonts.primary[600],
  },
})
