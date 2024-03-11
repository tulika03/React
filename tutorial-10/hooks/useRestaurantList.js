import { useState, useEffect } from 'react';
import {BASE_URL} from "../utils/constants";

const useRestaurantList = () => {
    // fetch data
    const [resInfo, setResInfo] = useState([]);
    const [originalCopy, setOriginalCopy] = useState([]);
    useEffect(() => {
        fetchMenu();
    }, []);
    
    const fetchMenu = async () => {
        const data = await fetch(BASE_URL +"ea853cdcc7cb0645eff5");
        const json = await data.json();
        console.log("==========>", json?.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        setResInfo(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setOriginalCopy(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return {resInfo, originalCopy};
}

export default useRestaurantList;