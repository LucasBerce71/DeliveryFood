import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { Header } from '../../components/Header';

import { styles } from './styles';

export const SignUp: React.FC = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <Header 
                    isBackAction 
                    title="Register" 
                />

                <View style={styles.content}>
                    <TextInput 
                        label="Name" 
                        mode="outlined"
                    />
                    <TextInput 
                        label="E-mail" 
                        keyboardType="email-address" 
                        mode="outlined"
                    />
                    <TextInput
                        label="Password"
                        secureTextEntry
                        right={
                            <TextInput.Icon 
                                name="eye-off-outline"
                                color={styles.icon.color}
                            />
                        }
                        mode="outlined"
                    />
                    <TextInput
                        label="Confirm password"
                        secureTextEntry
                        right={
                            <TextInput.Icon 
                                name="eye-off-outline" 
                                color={styles.icon.color}
                            />
                        }
                        mode="outlined"
                    />
                    <TextInput 
                        label="Phone number" 
                        keyboardType="phone-pad" 
                        mode="outlined"
                    />
                    
                    <Button 
                        mode="contained"
                        style={styles.buton}
                    >
                        Register
                    </Button>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}