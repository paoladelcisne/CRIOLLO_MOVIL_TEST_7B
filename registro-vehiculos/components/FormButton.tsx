import React from 'react'
import { TouchableOpacityProps, TouchableOpacity, Text, StyleSheet } from 'react-native'

type FormButtonProps = TouchableOpacityProps & {
    label: string;
    variant?: 'primary' | 'secondary';
}

export const FormButton = ({ label, variant = 'primary', style, ...props }: FormButtonProps) => {
    return (
        <TouchableOpacity
            {...props}
            style={[
                styles.button,
                variant === 'secondary' && styles.buttonSecondary,
                style
            ]}
        >
            <Text style={[
                styles.text,
                variant === 'secondary' && styles.textSecondary
            ]}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        borderRadius: 8,
        paddingVertical: 12,
        backgroundColor: '#3b82f6',
        alignItems: 'center',
        marginTop: 24,
    },
    buttonSecondary: {
        backgroundColor: '#ef4444',
    },
    text: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    textSecondary: {
        color: 'white',
    }
})