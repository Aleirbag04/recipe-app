import {FormControl, HStack, VStack, Input} from 'native-base';
const Form = props => {
  return (
    <VStack space={2} width="100%" py={5}>
        <FormControl isRequired>
            <HStack width="100%" space={2}>
                <Input
                    placeholder="i.e beef, chicken, pork,etc."
                    variant="filled"
                    bg="gray.200"
                    px={3}
                 />
            </HStack>
        </FormControl>
    </VStack>
  );
}

export default Form;