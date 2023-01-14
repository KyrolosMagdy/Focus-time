import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import { Colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';

export const FocusHistory = ({ history }) => {
  const renderItem = ({ item }) => {
    return <Text style={styles.item}> - {item}</Text>;
  };

  if (!history || !history.length) return <Text style={styles.title}> we haven't focused on anything yet</Text>;

  return (
    <View style={styles.constainer}>
      <Text style={styles.title}>Thing we've foucused on:</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {
    padding: spacing.md,
    flex: 1,
  },
  title: {
    color: Colors.white,
    fontSize: fontSizes.md,
    fontWeight: 'bold',
  },
  item: {
    color: Colors.white,
    fontSize: fontSizes.md,
    paddingTop: fontSizes.sm,
  },
});
