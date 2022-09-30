import WebView from 'react-native-webview';
import {useLayoutEffect} from 'react';
import {ShareIcon} from 'native-base';

const RecipeWebView = ({navigation,route}) => {
    const { url } = route.params

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => <ShareIcon route={route}/>
        });
    }, [navigation]);
    return (
        <WebView source={{uri: url}} />
    )
}

export default RecipeWebView