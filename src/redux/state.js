import profileReduser from './profile-reducer';
import messagesReduser from './messages-reduser';
import sidebarReduser from './sidebare-reducer';

const store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, post: 'Hi !How are you ?', likesCounter: 12},
                {id: 2, post: 'This is my first post.', likesCounter: 10},
                {id: 3, post: 'React is amazing !!!', likesCounter: 114},
                {id: 4, post: 'Cool...', likesCounter: 2},
                {id: 5, post: 'What is new ?', likesCounter: 0},
                {id: 6, post: ':)', likesCounter: 4}
            ],
            newPostText: 'Hello World'
        },
    
        messagesPage: {
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
        },

        sidebarPage: {},
    },
    _callSubscriber() {
        console.log('State has changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReduser(this._state.profilePage, action);
        this._state.messagesPage = messagesReduser(this._state.messagesPage, action);
        this._state.sidebarPage = sidebarReduser(this._state.sidebarPage, action);

        this._callSubscriber(this._state);
    },
    
};

export default store;