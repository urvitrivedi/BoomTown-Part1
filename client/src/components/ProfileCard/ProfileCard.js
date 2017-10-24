import React from 'react';
import PropTypes from 'prop-types';
import {Card} from 'material-ui/Card';
import Gravatar from 'react-gravatar'
import './styles.css';

const ProfileCard = ({profileData}) => (
    <Card className="profileCard">
        <div className="profileWrapper">
            <div className="profileDetail">
                <div className="profileUser">
                    <p>{profileData.fullname}</p>
                    <p>{profileData.bio}</p>
                </div>
            </div>
            <div className="profileSummary">
                <div>
                    <div className="summaryCount">
                        <p>{profileData.shared}</p>
                        <p>Items shared</p>
                    </div>
                    <div className="summaryCount">
                        <p>{profileData.borrowed}</p>
                        <p>Items borrowed</p>
                    </div>
                </div>
                <div className="profileAvatar">
                    <Gravatar email={profileData.email} size={180} />
                </div>
            </div>
        </div>
    </Card>
);

ProfileCard.propTypes = {
    profileData: PropTypes.shape({
        id: PropTypes.string,
        fullname: PropTypes.string,
        email: PropTypes.string,
        bio: PropTypes.string,
        shared: PropTypes.number,
        borrowed: PropTypes.number,
        borroweditems: PropTypes.array
    })
};

export default ProfileCard;
