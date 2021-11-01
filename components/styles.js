import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    center: {
        alignSelf: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 48,
        textTransform: 'capitalize',
    },
    timeOnTimer: {
        fontFamily: 'Helvetica',
        fontSize: 72,
    },
    rows: {
        flexDirection: 'row',
    }
});