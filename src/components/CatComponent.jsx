import React from "react"
import { Text, TextInput, View } from "react-native"


const getFullName = (firstName, secondName, thirdName) => {
    return firstName + ' ' + secondName + ' ' + thirdName;
}

const Cat = () => {
    const name = 'Maru';
    return (
        <View>
            <Text>
                Hello, I am {getFullName('Rum', 'Tum', 'Tugger')}!
            </Text>
            <TextInput
                style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                }}
                defaultValue="Name me!"
            />
        </View>
    );
}

export default Cat