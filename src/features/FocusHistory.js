import React from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import { colors } from '../utils/colors'

const renderItem = ({ item }) => <Text style={styles.item}>- {item}</Text> 

export default FocusHistory = ({ history }) => {
  if (history.length === 0) return null
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things we've focused on:</Text>
      <FlatList 
        data={history}
        renderItem={renderItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  title: {
    color: colors.white,
    fontWeight: 'bold'
  },
  item: {
    color: colors.white,
    paddingTop: 10,
  }
})