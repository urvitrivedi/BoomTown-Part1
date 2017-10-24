import React from 'react';
import logo from '../../images/boomtown-logo.svg';
import {Link} from 'react-router-dom';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import * as actions from '../../redux/modules/items';
import {connect} from 'react-redux';
import './styles.css';

const styles = {
  header: {
    paddingLeft: '1rem',
    paddingRight: '1rem',
    backgroundColor: 'white',
  },
  profile: {
    margin: '0',
  },
  dropdown:{
    paddingLeft:'-10rem',
  }
}

const HeaderBar = ({tagData, tagValues, handleChange}) => {

 console.log(tagData);//connect = containers class based component

    return (
      <Toolbar className="header" style={styles.header}>
        <div className="flex justify-end"><Link to="/">{<img className="logo" src={logo} alt="BoomTown Logo" />}</Link></div>
        <ToolbarGroup firstChild={true}>
          <DropDownMenu style={styles.dropdown} tagData={tagData} className="DropDown" onChange={handleChange} >
            <MenuItem value={1} primaryText="Electronics" onChange={handleChange} />
            <MenuItem value={2} primaryText="Household Items" onChange={handleChange} />
            <MenuItem value={3} primaryText="Musical Instruments" onChange={handleChange} />
            <MenuItem value={4} primaryText="Physical Media" onChange={handleChange} />
            <MenuItem value={5} primaryText="Recreational Equipment" onChange={handleChange} />
            <MenuItem value={6} primaryText="Sporting Goods" onChange={handleChange} />
            <MenuItem value={7} primaryText="Tools" onChange={handleChange} /> 
          </DropDownMenu>
        </ToolbarGroup>

        <ToolbarGroup>
          <RaisedButton href="/profile/eEvh1WUF5nb5eeUksUQb3Ph0kOU2" label="MY PROFILE" primary={true} style={styles.profile}/>
          <RaisedButton label="LOGOUT" secondary={true}/>
        </ToolbarGroup>
      </Toolbar>
    );
  
}

const mapStateToProps = state => ({
  itemsData:state.items.itemsData,// items is from Reducer -> itemsData is from items.js(redux/modules)
  isLoading:state.items.isLoading,
  tagData:state.items.tagData
});

export default connect(mapStateToProps, actions)(HeaderBar);