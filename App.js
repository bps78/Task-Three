import { StatusBar } from 'expo-status-bar';
import { Alert, Pressable, SafeAreaView, StyleSheet, Text, View, } from 'react-native';
import { useState } from 'react';
import MyTextBox from './app/components/MyTextBox.js';
import { Image } from 'react-native';
import Colors from './app/config/colors.js'
import ButtonOne from './app/components/ButtonOne.js';
import MyIcons from './app/components/MyIcon.js';

export default function App() {
  const [playing, setplaying] = useState(true);
  return (
    <View style={styles.container}>
      <SafeAreaView>
      <MyTextBox 
        title = "Task Three  by: Ben and Sid"
        color = {Colors.secondaryLight}
        rectWidth = {350}
        rectHeight = {75}

      />
      </SafeAreaView>

      <Image
      style={styles.image}
      source={{
        uri: 'https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/82/f7/2b/82f72ba4-524c-fc9d-cb8c-5a96d2ddf536/22UM1IM35267.rgb.jpg/1200x1200bb.jpg'
        
      }}
      />
     
     <View style={{marginTop: 75}}>
     <ButtonOne
      title="Shuffle"
      backColor={Colors.secondary}
      underColor={Colors.secondaryLight}
      onPress={() => Alert.alert('Music Shuffled')}
      borderColor={Colors.accent}
      />
      </View> 

      <View style={{flexDirection: 'row', marginTop: 20}}>
      <MyIcons
          name="step-backward"
          size={50}
          color={Colors.accent}
        />
        
        <View>
        <Pressable 
        onPress= {() => {setplaying(!playing)}}
        style={{color: Colors.primary}}>

          <MyIcons
          name={playing? "play" : "pause"}
          size={50}
          color={Colors.accent}
        />
        </Pressable>
        
      
        </View>
       
     

        <MyIcons
          name="step-forward"
          size={50}
          color={Colors.accent}
        />

        
      </View>

      <View style={{flexDirection: 'row', marginTop: 30}}>
      <ButtonOne
       title="Like Song"
       backColor={Colors.accent}
       underColor={Colors.primary}
       borderColor={Colors.secondary}
       onPress= {() => Alert.alert("Song Liked")}
      />
      <ButtonOne
       title="Loop Song"
       backColor={Colors.accent}
       underColor={Colors.primary}
       borderColor={Colors.secondary}
       onPress= {() => Alert.alert("Song Looped")}
      />
      </View>
      

     
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: 'center',
   
  },
  image: {
    width: 250,
    height: 250,
    marginTop: 50,
  }
});
