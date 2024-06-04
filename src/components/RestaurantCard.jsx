import { Link } from "react-router-dom"


const RestaurantCard = () => {
  return (
    <Link className="shadow rounded-lg overflow-hidden">
    
    <img src={"https://picsum.photos/407"} alt="foto" />
    <div>
        <div>
            <h3>name</h3>
            <p>rating</p>
        </div>
        <p>
            <span>minumum</span>
            <span>kategoriler</span>
        </p>
    </div>
    </Link>
  )
}

export default RestaurantCard
