const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postsData: [
        {id: 1, post: 'Hi !How are you ?', likesCounter: 12},
        {id: 2, post: 'This is my first post.', likesCounter: 10},
        {id: 3, post: 'React is amazing !!!', likesCounter: 114},
        {id: 4, post: 'Cool...', likesCounter: 2},
        {id: 5, post: 'What is new ?', likesCounter: 0},
        {id: 6, post: ':)', likesCounter: 4}
    ],
    newPostText: 'Hello World',
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                post: state.newPostText,
                likesCounter: 0
            };
            state.postsData.push(newPost);
            state.newPostText = '';
            return state;
        
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;

        default:
            return state;
    }
    
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;