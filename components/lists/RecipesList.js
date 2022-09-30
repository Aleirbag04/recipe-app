import {FlatList} from 'native-base';
import RecipeCard from '../listItems/RecipeCard';

const RecipesList = props => {
    const {recipes, navigation} = props
    return (
        <FlatList
            data={recipes}
            renderItem={({item}) => (
                <RecipeCard
                    image={item.image}
                    label={item.label}
                    source={item.source}
                    url={item.uri}
                    navigation={navigation}
                />
            )}

        />
    )

}

export default RecipesList