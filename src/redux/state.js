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
        },
    },

    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('State has changed');
    },

    addPost() {
        let newPost = {
            id: 5,
            post: this._state.profilePage.newPostText,
            likesCounter: 0
        };
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
    
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

export default store;