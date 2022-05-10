import * as React from "react";
import { Animated, Dimensions, FlatList, Image, Platform, StyleSheet, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";


const { width, height } = Dimensions.get("window");

const ITEM_SIZE = Platform.OS === "ios" ? width * 0.72 : width * 0.74;
const BACKDROP_HEIGHT = height * 0.65;

export const Backdrop = ({ movies, scrollX }: any) => {
  return (
    <View style={styles.backdrop}>
      <FlatList
        data={movies.reverse()}
        keyExtractor={item => item.key + "-backdrop"}
        removeClippedSubviews={false}
        contentContainerStyle={{ width, height: BACKDROP_HEIGHT }}
        renderItem={({ item, index }) => {

          if (!item.backdrop) {
            return null;
          }

          const translateX = scrollX.interpolate({
            inputRange: [(index - 2) * ITEM_SIZE, (index - 1) * ITEM_SIZE],
            outputRange: [0, width],
          });

          return (
            <Animated.View
              removeClippedSubviews={false}
              style={[
                styles.AnimatedContainer,
                { width: translateX }
              ]}>
              <Image
                source={{ uri: item.backdrop }}
                style={styles.backdrop}
              />
            </Animated.View>
          );
        }}
      />

      <LinearGradient
        colors={["rgba(0, 0, 0, 0)", "white"]}
        style={styles.linearGradient}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  backdrop: {
    height: BACKDROP_HEIGHT,
    width,
    position: "absolute",
  },
  linearGradient: {
    height: BACKDROP_HEIGHT,
    width,
    position: "absolute",
    bottom: 0,
  },
  AnimatedContainer: {
    position: "absolute",
    height,
    overflow: "hidden",
  },
});