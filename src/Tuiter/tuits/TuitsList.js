import React from 'react';
import {useSelector} from "react-redux";
import TuitItem from './TuitItem';

const TuitsList = () => {
    const homeTuits = useSelector(state => state.tuits)
    return (
        <>
            <ul className='list-group text-start'>{homeTuits.map(tweet => <TuitItem key={tweet._id} post={tweet}/>)}</ul>
        </>
    );
};

export default TuitsList;