import React from 'react'
import { View, StyleSheet } from 'react-native'
import { RoundedButton } from '../components/RoundedButton'
import { spacing } from '../utils/sizes'

export default Timing = ({ setMinutes }) => {
  return (
    <>
    <View style={styles.timingButton}>
      <RoundedButton title='10' size={75} onPress={() => setMinutes(10)} />
    </View>
    <View style={styles.timingButton}>
      <RoundedButton title='15' size={75} onPress={() => setMinutes(15)} />
    </View>
    <View style={styles.timingButton}>
      <RoundedButton title='20' size={75} onPress={() => setMinutes(20)} />
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: 'center',
    paddingTop: spacing.md,
  }
})