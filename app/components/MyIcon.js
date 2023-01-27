import { Entypo } from '@expo/vector-icons';
import { Text, View, StyleSheet } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';


function MyIcons({name, color, size}) {
  return (
    <View style={styles.icon}>
      <FontAwesome name={name} size={size} color={color} />
    </View>
  );
}

const styles = StyleSheet.create({
    icon:{
        margin: 10,
        padding: 10
    }
})
export default MyIcons;
