import React from 'react';
import logo from '../../images/boomtown-logo.svg';
import {Link} from 'react-router-dom';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import * as actions from '../../redux/modules/items';
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

const HeaderBar = ({tagData}) => {
  
// console.log(tagData);

    return (
      <Toolbar className="header" style={styles.header}>
        <div className="flex justify-end"><Link to="/">{<img className="logo" src={logo} alt="BoomTown Logo" />}</Link></div>
        <ToolbarGroup firstChild={true}>
          <DropDownMenu style={styles.dropdown} className="DropDown" >
            <MenuItem value={1} primaryText="Electronics" />
            <MenuItem value={2} primaryText="Household Items" />
            <MenuItem value={3} primaryText="Musical Instruments" />
            <MenuItem value={4} primaryText="Physical Media" />
            <MenuItem value={5} primaryText="Recreational Equipment" />
            <MenuItem value={6} primaryText="Sporting Goods" />
            <MenuItem value={7} primaryText="Tools" /> 
          </DropDownMenu>
        </ToolbarGroup>
        <ToolbarGroup>
        <RaisedButton href="/profile/eEvh1WUF5nb5eeUksUQb3Ph0kOU2" label="MY PROFILE" primary={true} style={styles.profile}/>
        <RaisedButton label="LOGOUT" secondary={true}/>
        </ToolbarGroup>
      </Toolbar>
    );
  
}

export default HeaderBar;