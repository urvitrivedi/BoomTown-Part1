const GET_ITEMS = 'GET_ITEMS';
const GET_USER_ITEMS = 'GET_USER_ITEMS';
const GET_ITEMS_LOADING = 'GET_ITEMS_LOADING';
const GET_ITEMS_ERRORS = 'GET_ITEMS_ERRORS';
const HANDLE_DROP_DOWN = 'HANDLE_DROP_DOWN';

//ACTION CREATORS
const getItems = (items) => ({
    type:GET_ITEMS,
    payload:items
});

const getUserItems = (users) => ({
    type: GET_USER_ITEMS,
    payload: users
});

const getItemsLoading = () => ({
    type:GET_ITEMS_LOADING,
});

const getItemsError = error => ({
    type:GET_ITEMS_ERRORS,
    payload:error
});

export const handleDropDown = (tagData) => {
    return function(dispatch) {
        dispatch({type: HANDLE_DROP_DOWN, payload:tagData});
    }
}

//fetchItemsAnd Users is the helper fn that dispatches the acttion creaters
// then goes to the middleware to manage data
//
export const fetchItemsAndUsers = (tagValues, profileId) => dispatch => {
    dispatch(getItemsLoading());

var items = "http://localhost:3001/items";
var users = "http://localhost:3001/users";
var urls = [items, users];

//Promise.all is combining both the json database into one
//Fetch method is fetching each json database and displaying it.
Promise.all(urls.map(url =>
    fetch(url).then(resp => resp.json())
)).then(data => {
    const [items,users] = data;
    const tagData = [];
    //console.log(tagData);
    // Mapping thru the Items Array
    let dataArray = items.map(item => {
        // Mapping thru items to verify itemOwner === user.id. 
        //The find() executes the callback function once for each index of the array until it finds one where callback returns a true value.
        
            if (item.itemowner !== null) {
                const itemowner = users.find((user) => user.id === item.itemowner)
                item.itemowner = itemowner;
            }

            if (item.borrower !== null) {
                const itemborrower = users.find((user) => user.id === item.borrower)
                item.borrower = itemborrower.fullname;
            }

            item.tags.map((tag) => {
                if (tagData.indexOf(tag) === -1) {
                    tagData.push(tag)
                }
               // console.log(tag);
               return tag;
                
            });
        // Finally return the item object individually
        return item;
    })
    dispatch(getItems(dataArray));
    dispatch(getUserItems(dataArray));
})
.catch(err => {
    dispatch(getItemsError(err));
});
}

//Reducers
export default (state={
    itemsData: [],
    tagData:[],
    isLoading:false,
    error:''
}, action) => {
    switch (action.type){
        case GET_ITEMS:
        return {...state, itemsData: action.payload, isLoading:false, error: ''};

        case GET_USER_ITEMS:
        return {...state, itemsData: action.payload, isLoading: false, error: ''};

        case HANDLE_DROP_DOWN:
            return {...state, isLoading:true, error:'', tagData:action.payload };

        case GET_ITEMS_LOADING:
            return {...state, isLoading:true, error:''};

        case GET_ITEMS_ERRORS:
            return {...state, isLoading:false, error:action.payload};

        default:
            return state;
    }
};