import {Box, Center, Button, Text} from 'native-base';

const RecipeContainer = ({ navigation, route }) => {
const { label, url } = route.params

return (
    <Box width='100%'>
        <Center pu={10}>
        <Text>{label}</Text>
        <Button
        onPress={() => {
        navigation.navigate('Web', {
        label,
        url
        })
        }}
        variant='ghost'
        >
        View Online
        </Button>
        </Center>
    </Box>
    )
}

export default RecipeContainer