import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import ItemCardList from '../../components/ItemCardList';

const Items = ({itemsData}) => {
//console.log(data);
    return(
        <ItemCardList itemsData={itemsData} /> 
    );
}

Items.propTypes = {

}
export default Items;