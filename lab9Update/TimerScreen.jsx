import React, { useState, useEffect } from 'react';
import {View, Text} from 'react-native';

export default function TimerScreen(props) {
   // let [searchParams, setSearchParams] = "By"
    const parm = "Bicycling"

    let [seconds, setSeconds] = useState(0);
    let [isActive, setIsActive] = useState(false);

    function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
      setSeconds(0);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  function timerDisplay(seconds) {
    var q = Math.floor(seconds/60);
    var r = seconds % 60;
    if (r < 10) {
      r = "0" + r;
    };
    if (q < 10) {
      q = "0" + q;
    };
    
    var v1 = q + ":" + r
    return v1;
  }

      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>{parm}</Text>
          <Text>Timer: {timerDisplay(seconds)}</Text>
          <Text>Cal: {(seconds) * 0.14}</Text>
          <Text>{(seconds) < 300 ? 'You can do this!' : 'Great job! Stop anytime if you do not have the energy!'}</Text>
          <button onClick={() => toggle()}>{isActive ? 'Reset' : 'Start'}</button>
        </View>
      );
    }