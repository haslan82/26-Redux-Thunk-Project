import { useDispatch, useSelector } from "react-redux";
import Container from "../components/Container"
import RestaurantCard from "../components/RestaurantCard"
import { useEffect } from "react";
import { getRestaurants } from "../redux/actions/restaurantAction";
import Loader from "../components/Loader";
import Error from "../components/Error";





const Main = () => {

// restaurant verilerine abone olmak için useSelector ü kullandık
  const {isLoading, error, restaurants} = useSelector(
    (store) => store.restaurants);
    console.log(restaurants);
const dispatch = useDispatch();

// verileri almak için metot 
const getData = () => {
  dispatch(getRestaurants());
};


// sayfa yüklendiği anda restoran verilerini alacağımız metodu çalıştırır
    useEffect (()=> {
      getData();

    }, []);
  return (
    <Container>
        <h1>Tüm Restaranlar</h1>

<div>
  {
    isLoading ? (<Loader />) : error ? (<Error  />) : (restaurants.length > 0 &&
       restaurants.map((item) => (
       <RestaurantCard key={item.id} data={item} />
      ))
      )}
</div>

        <RestaurantCard />
    </Container>
  )
}

export default Main
