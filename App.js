import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View } from 'react-native';
import { Video } from 'expo-av'
import React from 'react';


export default function App() {
  const video = React.useRef(null);
  const secondVideo = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [statusSecondVideo, setStatusSecondVideo] = React.useState({});

  return (
    <View style={styles.container}>

      <Video
        ref={video}
        style={styles.videoContainer}
        source={{ uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4" }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={setStatus}
      />
      <View style={styles.buttonContainer}>

        <Button title="Play from 5s" onPress={() => video.current.playFromPositionAsync(5000)} />
        <Button title={status.isLooping ? "set to not loop" : "set to loop"} onPress={() => video.current.setIsLoopingAsync(!status.isLooping)} />
      </View>

      <Video
        ref={secondVideo}
        style={styles.videoContainer}
        source={require("./demo.mp4")}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={setStatusSecondVideo}
      />
      <View style={styles.buttonContainer}>

        <Button title="Play from 50s" onPress={() => secondVideo.current.playFromPositionAsync(50000)} />
        <Button title={statusSecondVideo.isLooping ? "set to not loop" : "set to loop"} onPress={() => secondVideo.current.setIsLoopingAsync(!statusSecondVideo.isLooping)} />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  videoContainer: {
    flex: 1,
    alignSelf: 'stretch'
  },
  buttonContainer: {
    margin: 16
  }
});
