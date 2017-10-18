import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import ItemCard from '../ItemCard';



var Masonry = require('react-masonry-component');
const ItemCardList = ({itemsData}) => {

    return(
        <Masonry className="masonry">
            {itemsData.map((item)=> {
                return <div className="individual-card-container"><ItemCard key={item.id} item={item}/></div>
            })}
        </Masonry>
    )
}
    

ItemCardList.propTypes ={
    
};

export default ItemCardList;