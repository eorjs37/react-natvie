import { ScrollView, TextInput, Text, Button } from 'react-native';
import Cat from './src/components/CatComponent';
import List from './src/components/ListComponent';
import ListProps from './src/components/ListPropsComponent';
import { useState } from 'react'
export default function App() {
    const [isHungry, setIsHungry] = useState(true);

    return (
        <ScrollView>
            <TextInput
                style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                }}
                defaultValue="You can type in me"
            />
            <Cat />
            <Text>Welcome!</Text>
            <List />
            <List />
            <List />
            <Text>Welcome! Props</Text>
            <ListProps name="maru" />
            <ListProps name="Jellylorum" />
            <ListProps name="Spot" />
            <Button onPress={() => {
                setIsHungry(false)
            }}

                disabled={!isHungry}
                title={isHungry ? 'Pour me some milk, please!' : 'Thank you'}
            />
        </ScrollView>
    );
}
