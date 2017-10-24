import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Items from './Items';
import Loader from '../../components/Loader';
import {connect} from 'react-redux';
import * as actions from '../../redux/modules/items';
//import { fetchItemsAndUsers, loadTagValues } from '../../redux/modules/items';

class ItemsContainer extends Component{

    componentDidMount(){
        this.props.fetchItemsAndUsers();
        this.props.handleDropDown();
    }
    
    render(){
            //const tagData = this.props.tagData;
            //const tagValues =  this.props.tagValues;    
            const loading = this.props.isLoading;
            return loading ? <Loader /> : <Items itemsData={this.props.itemsData}  />
    }
}

    ItemsContainer.propTypes ={
    

    };

const mapStateToProps = state => ({
    itemsData:state.items.itemsData,// items is from Reducer -> itemsData is from items.js(redux/modules)
    isLoading:state.items.isLoading,
    tagData:state.items.tagData
});

export default connect(mapStateToProps, actions)(ItemsContainer);