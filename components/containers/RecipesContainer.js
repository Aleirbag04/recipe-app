import {Center, Container} from 'native-base'
import {useState} from 'react'
import {getRecipes} from '../../services/api'
import Form from '../forms/Form'
import Loading from '../layout/Loading'
import RecipesList from '../lists/RecipesList'

const RecipesContainer = ({navigation}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [ingredient, setIngredient] = useState(null)
    const [recipes, setRecipes] = useState([])

    const fetchRecipes = () => {

    setRecipes(
    [
      {
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/552/5524f65e427c421bb0127a322da13570.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCVOgc%2BjpM7SZsnTjbJRN203nRbV13gOXsgC5Gnf6VkTQIgMfPRXa0cjm8nmbSpJqu7M7C2OONCo7nQow%2FTwJ0s%2B%2FIqzAQIVRAAGgwxODcwMTcxNTA5ODYiDIsMUcK16yoS%2BbnAqyqpBC55HQvznF6GR7W75IH7K01KjfX8VCJ%2FWAfc0AO0KX0nxDPy5Cntfkhaf%2BGUH0M1o1qwiD5RTGopFgWxH3fHpzNdaPLCvZdU4UJ410wxO358HkUFYY7XJi9EfKuxrfowrAJLeaMxG3fGFNP8JanDj9t3%2BfoWCJXov1ivqlH%2BcZkIr%2FhRuVn4ojQjTnF2xFiKI6C8mkuKlBEDT2pT0KATTL853GBS1BwAx5y%2FA8tnPzXtYpw1RUK%2BJJy4K850b0KAkYrHHKFFojORkHV4YAGF4QIewikU0sAuUel2I%2FaYRZGExPDNRppPZmmxnS4X5%2BI3XdleeJjTSMdQP87pjoPf7jWH82LGXOWBtkBDQIrmm%2BcRBqkx1guoW4KlC7QiO%2F2wi2dSLGWOlqkLuMeCquXJ2Jvlpd6Jph4D0hTniDUXoByrrXB8nuFGCJxt5k50sP1WUghj4uCy0GVf4uty0ICvwKM3%2FLE7D8sHD%2FHzrQ4O8yLFWteu%2FWH2UIB9G1%2FWkJH9%2BgSumwKVPIIGwmwjzSLhBDMJAUxkJ1aLw5l5yRxzThsRDGZYo0vkpZXmEMDohp0RrwtQeIl6sFC%2FF8Ni%2Fo01inB5TV7QZrR4veVFpLuz%2BAc%2BnGBPsjJ%2FTjj3a1yyQ%2F581CmmdeuwbUQByP7mgXbEgrSo%2FaqE7I3T%2B4ZGCqyE0gpMjdRbSeEbNxV1a9ZQsRxv2Ui0%2F7YenHZG83%2BjmR2RYbWwOVUK5eAIhOUwg87ZmQY6qQGCJpoqlUoXyD%2F%2FEJe6Id7tO9qniWSffloRatQf6igWIuHA9CSsBbZqZefS5UA4HSp6atzMqKa7U2Ul5v3%2FTSw8LtGfM1s6AlZPqMj8rhWz06UKqicoR2b%2FDpb4tt%2F7Vv03YugQPJD9yYyj900yJazUKJ5NQQDYVLIMqpqtnFiB6E%2BqigMTswrNw8UNbXMDAUt35VbHFQRZil4wrln2r7y5zWLz%2FjPU8gEX&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220930T045500Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFLKNIFCPD%2F20220930%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=fa1353c92d7c5f50ecbc6b40f5c70eee3972953b0b2cd43c6a7633df366bb4d3",
          "label": "Quick Beef Stroganoff",
          "source": "Food & Wine",
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_d36094487933c7d2c124c6d3742e49f6"
      },
      {
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/431/431ea8ed1e8b779dc8644e0c3a8d5c19.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCVOgc%2BjpM7SZsnTjbJRN203nRbV13gOXsgC5Gnf6VkTQIgMfPRXa0cjm8nmbSpJqu7M7C2OONCo7nQow%2FTwJ0s%2B%2FIqzAQIVRAAGgwxODcwMTcxNTA5ODYiDIsMUcK16yoS%2BbnAqyqpBC55HQvznF6GR7W75IH7K01KjfX8VCJ%2FWAfc0AO0KX0nxDPy5Cntfkhaf%2BGUH0M1o1qwiD5RTGopFgWxH3fHpzNdaPLCvZdU4UJ410wxO358HkUFYY7XJi9EfKuxrfowrAJLeaMxG3fGFNP8JanDj9t3%2BfoWCJXov1ivqlH%2BcZkIr%2FhRuVn4ojQjTnF2xFiKI6C8mkuKlBEDT2pT0KATTL853GBS1BwAx5y%2FA8tnPzXtYpw1RUK%2BJJy4K850b0KAkYrHHKFFojORkHV4YAGF4QIewikU0sAuUel2I%2FaYRZGExPDNRppPZmmxnS4X5%2BI3XdleeJjTSMdQP87pjoPf7jWH82LGXOWBtkBDQIrmm%2BcRBqkx1guoW4KlC7QiO%2F2wi2dSLGWOlqkLuMeCquXJ2Jvlpd6Jph4D0hTniDUXoByrrXB8nuFGCJxt5k50sP1WUghj4uCy0GVf4uty0ICvwKM3%2FLE7D8sHD%2FHzrQ4O8yLFWteu%2FWH2UIB9G1%2FWkJH9%2BgSumwKVPIIGwmwjzSLhBDMJAUxkJ1aLw5l5yRxzThsRDGZYo0vkpZXmEMDohp0RrwtQeIl6sFC%2FF8Ni%2Fo01inB5TV7QZrR4veVFpLuz%2BAc%2BnGBPsjJ%2FTjj3a1yyQ%2F581CmmdeuwbUQByP7mgXbEgrSo%2FaqE7I3T%2B4ZGCqyE0gpMjdRbSeEbNxV1a9ZQsRxv2Ui0%2F7YenHZG83%2BjmR2RYbWwOVUK5eAIhOUwg87ZmQY6qQGCJpoqlUoXyD%2F%2FEJe6Id7tO9qniWSffloRatQf6igWIuHA9CSsBbZqZefS5UA4HSp6atzMqKa7U2Ul5v3%2FTSw8LtGfM1s6AlZPqMj8rhWz06UKqicoR2b%2FDpb4tt%2F7Vv03YugQPJD9yYyj900yJazUKJ5NQQDYVLIMqpqtnFiB6E%2BqigMTswrNw8UNbXMDAUt35VbHFQRZil4wrln2r7y5zWLz%2FjPU8gEX&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220930T045500Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFLKNIFCPD%2F20220930%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ca6f390b4128f1b22d6294c97e626bd444e4584fdd83a2604169fdd3766be379",
        "label": "Beef Carnitas",
        "source": "Men's Health",
        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_0f3a359371750f372c7ac3c1459751d9"
      }
    ]
    )

//        getRecipes(ingredient).then(
//            recipes =>{
//                setRecipes(recipes)
//        })
    }

    const handleInputChange = ingredient => {
      setIngredient(ingredient)
    }

//    console.log('ingredient', ingredient)

    return(
     <Container>
        <Center px={4}>
         <Form fetchRecipes={fetchRecipes} onInputChange={handleInputChange} />
         {isLoading ? <Loading /> : <RecipesList recipes={recipes} navigation={navigation}/>}
        </Center>
     </Container>
    )

}

export default RecipesContainer