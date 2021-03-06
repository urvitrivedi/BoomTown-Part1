import React from 'react';
import PropTypes from 'prop-types';
import HeaderBar from '../HeaderBar/';
import ItemCardList from '../../components/ItemCardList';

import './styles.css';

const Layout = ({ children, itemsData, tagData, tagValues, profileData, isLoading, handleChange }) => (
    <div className="appContentWrapper">
        <div className="appHeader">
            <HeaderBar />
        </div>
        <div className="appContent">
            {children}
        </div>
        {/* And a footer here, but not on the login route... */}
    </div>
);

Layout.defaultProps = {
    children: null
};

Layout.propTypes = {
    children: PropTypes.node
};

export default Layout;
