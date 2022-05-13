import * as React from 'react';
import { FC, useEffect, useRef, useState } from 'react';

import {
  Animated,
  Dimensions,
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { getMovies } from './api';
import { Backdrop } from './components/Backdrop';
import { Genres } from './components/Genres';
import { Loading } from './components/Loading';
import { Rating } from './components/Rating';

import { FetchDataType, MovieType } from './types';

const { width } = Dimensions.get('window');

const SPACING = 10;
const isIos = Platform.OS === 'ios';
const ITEM_SIZE = isIos ? width * 0.72 : width * 0.74;
const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;

export const App: FC = () => {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const scrollX = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    const fetchData: FetchDataType = async () => {
      const moviesList = await getMovies();
      setMovies([{ key: 'empty-left' }, ...moviesList, { key: 'empty-right' }]);
    };

    if (!movies.length) {
      fetchData();
    }
  }, [movies]);

  if (!movies.length) {
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
        contentContainerStyle={styles.contentContainer}
        snapToInterval={ITEM_SIZE}
        snapToAlignment='start'
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false },
        )}
        scrollEventThrottle={16}
        renderItem={({ index, item }) => {
          if (!item.poster) {
            return <View style={styles.emptyItem} />;
          }

          const inputRange = [
            (index - 2) * ITEM_SIZE,
            (index - 1) * ITEM_SIZE,
            index * ITEM_SIZE,
          ];

          const translateY = scrollX.interpolate({
            extrapolate: 'clamp',
            inputRange,
            outputRange: [100, 50, 100],
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
                <Text style={styles.title} numberOfLines={1}>
                  {item.title}
                </Text>
                <Rating rating={item.rating} />
                <Genres genres={item.genres} />
                <Text style={styles.description} numberOfLines={3}>
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
  animatedContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 34,
    marginHorizontal: SPACING,
    padding: SPACING * 2,
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    alignItems: 'center',
  },
  description: {
    fontSize: 12,
  },
  emptyItem: {
    width: EMPTY_ITEM_SIZE,
  },
  itemContainer: {
    width: ITEM_SIZE,
  },
  posterImage: {
    borderRadius: 24,
    height: ITEM_SIZE * 1.2,
    margin: 0,
    marginBottom: 10,
    resizeMode: 'cover',
    width: '100%',
  },
  title: {
    fontSize: 24,
  },
});
