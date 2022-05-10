import * as React from 'react';
import { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { GenresType } from '../types';

export const Genres: FC<GenresType> = ({ genres }) => {
  return (
    <View style={styles.genres}>
      {genres?.map((genre: string) => {
        return (
          <View key={genre} style={styles.genre}>
            <Text style={styles.genreText}>{genre}</Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  genres: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 4,
  },
  genre: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderWidth: 1,
    borderRadius: 14,
    borderColor: '#ccc',
    marginRight: 4,
    marginBottom: 4,
  },
  genreText: {
    fontSize: 9,
    opacity: 0.4,
  },
});
