import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
//import FlatButton from 'material-ui/FlatButton';
import Gravatar from 'react-gravatar';
//import moment from 'moment';
//import { format, formatDistance, formatRelative, subDays } from 'date-fns';
import distanceInWords from 'date-fns/distance_in_words';
import startOfToday from 'date-fns/start_of_today';


const ItemCard = ({item}) => {

            return (
                <div className="">
               <Card>
                <a href={`/profile/${item.itemowner.id}`}>  
                    <CardMedia overlay= {item.available ? null : <CardTitle title= "" subtitle= {`Lent to ${item.borrower}`} />}>
                        <img src={item.imageurl} alt="" />
                    </CardMedia>
                    <CardHeader
                        title={item.itemowner.fullname}
                        subtitle= {`${distanceInWords(item.created, startOfToday())} ago `}
                        avatar={<Gravatar email = {item.itemowner.email} />} 
                    />
                </a>
                <CardTitle title={item.title} subtitle={item.tags.map((tag, i) => i > 0 ? ', ' + tag : tag )} />
                <CardText>
                    {item.description}
                </CardText>
                <CardActions>
                    {item.available ? <RaisedButton label="BORROW" secondary={true} /> : ''}
                </CardActions>
                </Card>
             </div>
);
}// End const ItemCard

ItemCard.propTypes = {
    item: PropTypes.shape({
        available: PropTypes.bool,
        borrower: PropTypes.string,
        created: PropTypes.string,
        description: PropTypes.string,
        id: PropTypes.number,
        imageurl: PropTypes.string,
        itemowner: PropTypes.shape({
            bio: PropTypes.string,
            email: PropTypes.string,
            fullname: PropTypes.string,
            id: PropTypes.string
        }),
        tags: PropTypes.array,
        title: PropTypes.string
    })
};

export default ItemCard;