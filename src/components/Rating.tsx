import * as React from 'react';
import { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Rating as RatingStars } from 'react-native-ratings';

import { RatingType } from '../types';

export const Rating: FC<RatingType> = ({ rating }) => {
  return (
    <View style={styles.rating}>
      <Text style={styles.ratingNumber}>{rating}</Text>
      <RatingStars
        type="star"
        ratingCount={5}
        startingValue={rating ? rating / 2 : 0}
        imageSize={20}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ratingNumber: {
    marginRight: 4,
    fontFamily: 'Menlo',
    fontSize: 14,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 4,
  },
});
