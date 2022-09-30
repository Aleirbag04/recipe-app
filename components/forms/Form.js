import {FormControl, HStack, VStack, Input, Button, Icon} from 'native-base';
import {useState} from 'react'
import {Ionicons} from '@expo/vector-icons';

const Form = props => {
    const {fetchRecipes, onInputChange} = props
    const [formData, setFormData] = useState({})

    const onSubmit = () => {
//        console.log('form submitted')
        fetchRecipes()
    }
  return (
    <VStack space={2} width="100%" py={5}>
        <FormControl isRequired>
            <HStack width="100%" space={2}>
                <Input
                    placeholder="i.e beef, chicken, pork,etc."
                    variant="filled"
                    bg="gray.200"
                    px={3}
                    width="85%"
                    onChangeText={ingredient=> {
                     onInputChange(ingredient)
                     setFormData({...formData, name: ingredient})
                     }}
                    InputLeftElement={
                    <Icon size={5} ml={2} color="gray.400" as={<Ionicons name='ios-search'/>}/>
                    }
                 />
                 <Button onPress={onSubmit} startIcon={<Icon as={Ionicons} name='ios-search'/>}>Search</Button>
            </HStack>
        </FormControl>
    </VStack>
  );
}

export default Form;