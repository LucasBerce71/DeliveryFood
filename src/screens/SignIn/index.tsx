import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Card, TextInput, Button } from 'react-native-paper';
import { styles } from './styles';

export const SignIn: React.FC = () => {
    return (
        <SafeAreaView style={styles.content}>
            <View style={styles.view}>
                <Card>
                    <Card.Title 
                        title="Delivery App" 
                        titleStyle={styles.cardTitle}
                    />
                    <Card.Content>
                        <TextInput
                            label="E-mail"
                            keyboardType="email-address"
                            mode="outlined"
                            style={styles.cardInput}
                        />

                        <TextInput
                            label="Password"
                            secureTextEntry
                            mode="outlined"
                            style={styles.cardInput}
                        />

                        <Button
                            mode="contained"
                            style={styles.cardButton}
                        >
                            SignIn
                        </Button>

                        <Button style={styles.cardButton}>
                            Register
                        </Button>

                        <Button style={styles.cardButton}>
                            Forgot e-mail/password
                        </Button>
                    </Card.Content>
                </Card>
            </View>
        </SafeAreaView>
    );
}