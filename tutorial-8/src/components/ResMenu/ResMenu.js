import useRestaurantMenu from '../../../utils/useRestaurantMenu';
import ShimmerUI from '../content/shimmer';
import './ResMenu.css';
import {useParams } from 'react-router-dom';
const ResMenu = () => {
    const { resId } = useParams();
    const resData = useRestaurantMenu(resId);
    if(resData === null) {
        return <ShimmerUI />
    }

    return (
        <div className="menu">
            <h1>{resData?.info?.name}</h1>
            <img src={resData?.info?.image?.url}></img>
            <h3>Menu</h3>
            <ul>
                <li>Biryani</li>
                <li> Burgers</li>
                <li>Pasta</li>
                <li> Pizza </li>
            </ul>
        </div>
    )
}

export default ResMenu;