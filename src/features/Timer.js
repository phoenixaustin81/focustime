import React, { useState } from 'react';
import { View, StyleSheet, Text, Vibration } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { useKeepAwake } from 'expo-keep-awake'
import { Countdown } from '../components/Countdown';
import { RoundedButton } from '../components/RoundedButton';
import Timing from './Timing'
import { spacing } from '../utils/sizes';
import { colors } from '../utils/colors';

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];


export const Timer = ({ focusSubject, clearSubject, appendHistory }) => {
  useKeepAwake()
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1)
  const [minutes, setMinutes] = useState(0.1)
  console.log(focusSubject)
  const onEnd = () => {
    Vibration.vibrate(PATTERN)
    setIsStarted(false)
    appendHistory(focusSubject)
  }

  return (
    <View style={styles.container}>
      <View style={styles.countdownWrapper}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={setProgress}
          onEnd={onEnd}
        />
        <View style={styles.focusSubjectWrapper}>
          <Text style={styles.header}>Focusing on:</Text>
          <Text style={styles.text}>{focusSubject}</Text>
        </View>
      </View>
      <View style={{ paddingTop: spacing.sm }}>
        <ProgressBar progress={progress} style={{ height: spacing.sm }} color={ colors.denham } />
      </View>
      <View style={styles.timingButton}>
        <Timing setMinutes={setMinutes} />
      </View>
      <View style={styles.startButtonWrapper}>
        {!isStarted ? (
          <RoundedButton title="start" onPress={() => setIsStarted(true)} />
        ) : (
          <RoundedButton title="stop" onPress={() => setIsStarted(false)} />
        )}
      </View>
      <View style={styles.clearSubjectWrapper}>
        <RoundedButton title='-' size={50} onPress={clearSubject} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdownWrapper: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  startButtonWrapper: {
    flex: 0.2,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  focusSubjectWrapper: {
    paddingTop: spacing.xxl,
  },
  clearSubjectWrapper: {
    flex: 0.1,
    alignItems: 'center',
  },
  header: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    color: colors.white,
    textAlign: 'center',
  },
  timingButton: {
    flex: 0.2,
    flexDirection: 'row',
    // paddingTop: spacing.md,
    // justifyContent: 'center',
    alignItems: 'center'
  }
});
