import { useState, useEffect } from 'react';
import {BASE_URL} from "./constants"
const useRestaurantMenu = (resId) => {
    // fetch data
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchMenu();
    }, []);
    
    const fetchMenu = async () => {
        const data = await fetch(BASE_URL +"c54fd225a301b8ed94ab");
        const json = await data.json();
        const resData = json.sections.SECTION_SEARCH_RESULT.filter(restaurant => restaurant.info.resId === parseInt(resId))[0];
        setResInfo(resData);
    }

    return resInfo;
}

export default useRestaurantMenu;