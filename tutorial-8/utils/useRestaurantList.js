import { useState, useEffect } from 'react';
import {BASE_URL} from "./constants";

const useRestaurantList = () => {
    // fetch data
    const [resInfo, setResInfo] = useState([]);
    const [originalCopy, setOriginalCopy] = useState([]);
    useEffect(() => {
        fetchMenu();
    }, []);
    
    const fetchMenu = async () => {
        const data = await fetch(BASE_URL +"c54fd225a301b8ed94ab");
        const json = await data.json();
        console.log("==========>", json)
        setResInfo(json?.sections?.SECTION_SEARCH_RESULT);
        setOriginalCopy(json?.sections?.SECTION_SEARCH_RESULT);
    }

    return {resInfo, originalCopy};
}

export default useRestaurantList;