import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from './components';

let ifPressedStart = 0
let ifPressedStop = 0
const DefaultWorkTime = 25
const DefaultBreakTime = 5

const minToSecond = min => min * 60

export default class App extends React.Component {
    state = {
        workTime: minToSecond(DefaultWorkTime),
        breakTime: minToSecond(DefaultBreakTime),
        startText: ' ',
        stopText: ' ',
    }

    componentDidMount() {
        this.timer = new Timer(this.state.timeRemaining, this.updateTimeRemaining, this.handleTimerEnd)
        this.setState({isRunning: this.timer.isRunning})
    }

    printsOutputStart = () => {
        if (ifPressedStart === 0) {
            this.setState(() => ({startText: 'Pressed Start'}))
            ifPressedStart = 1
        } else {
            this.setState(() => ({startText: ' '}))
            ifPressedStart = 0
        }
    }

    printsOutputStop = () => {
        if (ifPressedStop === 0) {
            this.setState(() => ({stopText: 'Pressed Stop'}))
            ifPressedStop = 1
        } else {
            this.setState(() => ({stopText: ' '}))
            ifPressedStop = 0
        }
    }

  render() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text style={[styles.title, styles.center]}>Hello, World!</Text>
            <Text style={[styles.timeOnTimer, styles.center]}>00:00</Text>
            <View style={styles.rows}>
                {/* Buttons should go here*/}
                <Button title="Start" onPress={this.printsOutputStart} />
                <Button title="Stop" onPress={this.printsOutputStop} />
            </View>
            <Text>{this.state.startText}</Text>
            <Text>{this.state.stopText}</Text>
        </View>
    );
  }
}