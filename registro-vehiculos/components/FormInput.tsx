import { Text, TextInput, TextInputProps, View, StyleSheet } from "react-native"

type FormInputProps = TextInputProps & {
    label: string;
}

export const FormInput = ({ label, style, ...props }: FormInputProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                {...props}
                style={[style, styles.input]}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 16,
    },
    label: {
        fontSize: 14,
        color: '#374151',
        marginBottom: 6,
    },
    input: {
        borderWidth: 1,
        borderColor: '#d1d5db',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
        fontSize: 16,
        backgroundColor: 'white',
        color: '#111827',
    }
})