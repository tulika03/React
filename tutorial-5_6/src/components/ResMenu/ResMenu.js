import ShimmerUI from '../content/shimmer';
import './ResMenu.css';
import { useState, useEffect } from 'react';
import {useParams } from 'react-router-dom';
const ResMenu = () => {
    const [resData, setResData] = useState(null);
    useEffect(() => {
        fetchMenu();
    }, []);
    const { resId } = useParams();
    const fetchMenu = async () => {
        const data = await fetch("https://api.npoint.io/c54fd225a301b8ed94ab");
        const resResult = await data.json();   
        setResData(resResult.sections.SECTION_SEARCH_RESULT.filter(restaurant => restaurant.info.resId === parseInt(resId))[0]);
    }

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