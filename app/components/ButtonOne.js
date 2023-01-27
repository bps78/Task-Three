import * as React from 'react';
import { Text, StyleSheet } from 'react-native';
import { TouchableHighlight } from 'react-native';


function ButtonOne({title, onPress, underColor, backColor, borderColor}) {
  return(
              <TouchableHighlight
          onPress={onPress}
          underlayColor={underColor}   // changes color when pressed
          style={[styles.button, {backgroundColor: backColor}, {borderColor: borderColor}]}>
          <Text style={styles.text}>{title}</Text>
        </TouchableHighlight>
  );
}


const styles = StyleSheet.create({
 button: {
    height: 60,
    width: 180,
    margin: 10,
    padding: 5,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: 'black',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
  },
})
export default ButtonOne;
