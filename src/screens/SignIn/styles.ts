import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: 'rgb(101, 37, 131)', 
    },
    view: { 
        width: '80%' 
    },
    cardTitle: {
        color: 'rgb(101, 37, 131)',
    },
    cardButton: {
        marginVertical: 2,
    },
    cardInput: {
        marginBottom: 10,
    }
});