import React, { useState } from 'react';
import { StyleSheet, Platform, SafeAreaView, StatusBar } from 'react-native';

import { Colors } from './src/utils/colors';
import { Focus } from './src/features/Focus';
import { Timer } from './src/features/Timer';
import { FocusHistory } from './src/features/FocusHistory';

export default function App() {
  const [currentSubject, setCurrentSubject] = useState('');
  const [history, setHistory] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      {currentSubject ? (
        <Timer
          focusSubject={currentSubject}
          onTimerEnd={(subject) =>
            setHistory([...history, subject])
          }
          clearSubject={() => {
            setCurrentSubject('');
          }}
        />
      ) : (
        <>
          <Focus addSubject={setCurrentSubject} />
          <FocusHistory history={history} />
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: Colors.darkBlue,
  },
});
