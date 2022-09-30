import {Box, HStack, StatusBar, Text} from 'native-base';

const Header = () => {
    return (
    <>
        <StatusBar backgroundColor="#2c3e50" barStyle="light-content" />
        <Box safeAreaTop backgroundColor="#2c3e50">
            <HStack justifyContent="center" alignItems="center" px={1} py={3} bg='#2c3e50'>
                <Text color="#fff" fontSize={20} fontWeight="bold">
                Recipe App
                </Text>
            </HStack>

        </Box>
    </>
    );
}

export default Header