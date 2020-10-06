const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    namesData: [
        {id: 1, name: 'Vitalii'},
        {id: 2, name: 'Helga'},
        {id: 3, name: 'Boris'},
        {id: 4, name: 'Doris'},
        {id: 5, name: 'Natasha'},
        {id: 6, name: 'Anastasiya'}
    ],
    
    messagesData: [
        {id: 1, message: 'Hi !'},
        {id: 2, message: 'Hello everyone !'},
        {id: 3, message: 'Hi there !'},
        {id: 4, message: 'Oh, hello.'},
        {id: 5, message: 'Let start dialog ?'},
        {id: 6, message: 'Ha-ha...'}
    ],
    newMessageBody: '',
};

const messagesReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messagesData.push({id: 7, message: body});
            return state;

        default:
            return state;
    }
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default messagesReducer;