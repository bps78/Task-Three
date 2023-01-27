import * as React from 'react';
import { Text, StyleSheet, View } from 'react-native';


function MyTextBox({title, color, rectWidth, rectHeight}) {
  return(
          <View 
          style={[styles.rectangle, {backgroundColor: color}, {width: rectWidth}, {height: rectHeight}]}>
          <Text style={{fontSize: 24}}> {title} </Text>
        </View>
  );
}
const styles = StyleSheet.create({
rectangle: {
    height: 40,
    margin: 10,
    padding: 5,
    width: 10,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: 'black'
  },
})
export default MyTextBox;      
