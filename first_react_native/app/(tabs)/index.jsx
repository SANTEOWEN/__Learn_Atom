import { StyleSheet, View, Text, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';
import { useState } from 'react';


const HomeScreen = () => {

  const [counter, setCounter] = useState(0);
  const incrementHandler = () => {
    setCounter(counter + 1);
  }
  const dicrementHandler = () => {
    setCounter(counter - 1);
    if (counter == 0) {
      return;
    }
  }
  return (
    <View style={styles.container}>
      <Text>{`count: ${counter}`}</Text>
      <Text style={{ color: 'red' }}>Owen's first React-Native App</Text>
      <View style={styles.button_container}>
        <Button
          title="INCREMENT"
          onPress={incrementHandler}
        />
        <Button
          title="DICREMENT"
          onPress={dicrementHandler}
        />
      </View>
      <StatusBar style='auto' />
      <Link href="/Profile" style={{ color: 'blue' }}>Go to Profile</Link>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({

  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    margin: 10,
  },

  button_container: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: 5,
  }

});
