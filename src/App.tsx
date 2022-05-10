import * as React from "react";
import { FC } from "react";
import { Animated, Dimensions, Image, Platform, StatusBar, StyleSheet, Text, View } from "react-native";

import { getMovies } from "./api";
import { Genres } from "./components/Genres";
import { Rating } from "./components/Rating";
import { Loading } from "./components/Loading";
import { Backdrop } from "./components/Backdrop";


const { width } = Dimensions.get("window");

const SPACING = 10;
const isIos = Platform.OS === "ios";
const ITEM_SIZE = isIos ? width * 0.72 : width * 0.74;
const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;

export const App: FC = () => {
  const [movies, setMovies] = React.useState<any>([]);
  const scrollX = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    const fetchData = async () => {
      const movies = await getMovies();
      setMovies([{ key: "empty-left" }, ...movies, { key: "empty-right" }]);
    };

    if (movies.length === 0) {
      fetchData();
    }
  }, [movies]);

  if (movies.length === 0) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <Backdrop movies={movies} scrollX={scrollX} />
      <StatusBar hidden />
      <Animated.FlatList
        showsHorizontalScrollIndicator={false}
        data={movies}
        keyExtractor={item => item.key}
        horizontal
        bounces={false}
        decelerationRate={isIos ? 0 : 0.98}
        renderToHardwareTextureAndroid
        contentContainerStyle={{ alignItems: "center" }}
        snapToInterval={ITEM_SIZE}
        snapToAlignment="start"
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false },
        )}
        scrollEventThrottle={16}
        renderItem={({ item, index }) => {

          if (!item.poster) {
            return <View style={styles.emptyItem} />;
          }

          const inputRange = [
            (index - 2) * ITEM_SIZE,
            (index - 1) * ITEM_SIZE,
            index * ITEM_SIZE,
          ];

          const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [100, 50, 100],
            extrapolate: "clamp",
          });

          return (
            <View style={styles.itemContainer}>
              <Animated.View
                style={[
                  styles.animatedContainer,
                  { transform: [{ translateY }] },
                ]}>
                <Image
                  style={styles.posterImage}
                  source={{ uri: item.poster }}
                  />
                <Text
                  style={{ fontSize: 24 }}
                  numberOfLines={1}>
                  {item.title}
                </Text>
                <Rating rating={item.rating} />
                <Genres genres={item.genres} />
                <Text
                  style={{ fontSize: 12 }}
                  numberOfLines={3}>
                  {item.description}
                </Text>
              </Animated.View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  posterImage: {
    width: "100%",
    height: ITEM_SIZE * 1.2,
    resizeMode: "cover",
    borderRadius: 24,
    margin: 0,
    marginBottom: 10,
  },
  emptyItem: {
    width: EMPTY_ITEM_SIZE,
  },
  itemContainer: {
    width: ITEM_SIZE,
  },
  animatedContainer: {
    marginHorizontal: SPACING,
    padding: SPACING * 2,
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 34,
  },
});
