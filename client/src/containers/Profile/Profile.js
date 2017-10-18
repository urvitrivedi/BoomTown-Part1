import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

//import FooterBar from '../../components/FooterBar';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import ItemCardList from '../../components/ItemCardList';

const Profile = ({itemsData, tagData, profileData}) => {
    return (
        <div>
            <div className="profileSection">
                <ProfileCard itemsData={itemsData} profileData={profileData} />
            </div>
            <div className="appContent">
                <ItemCardList itemsData={itemsData} />
            </div>
            {/* And a footer here, but not on the login route... */}
           
        </div>
    );
}

Profile.propTypes = {

};

export default Profile;

