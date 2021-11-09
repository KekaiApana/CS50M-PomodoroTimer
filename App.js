import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from './components';
import TimerToggle from './components/timerToggle';

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

    toggleTimer = () => {
        if (!this.timer) return
        if (this.timer.isRunning) {
            this.timer.stop()
        } else {
            this.timer.start()
        }
        
        this.setState({isRunning: this.timer.isRunning})
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar style="auto" />
                <Text style={[styles.title, styles.center]}>{/*TimerChangerHere.toUpperCase()*/} TIMER</Text>
                <Text style={[styles.timeOnTimer, styles.center]}>00:00</Text>
                <View style={styles.rows}>
                    <TimerToggle onToggle={this.toggleTimer} isRunning={this.timer.isRunning} />
                    <Button title="Reset" onPress={this.resetTimer} />
                </View>
                <Text>{this.state.startText}</Text>
                <Text>{this.state.stopText}</Text>
            </View>
        );
    }
}