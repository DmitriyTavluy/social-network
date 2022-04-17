import {rerenderTree} from "../render";

const state = {
    profilePage : {
        posts : [
            {id: 1, message: 'Hi? how are you?', likesCount: 0},
            {id: 2, message: 'It`s my first post', likesCount: 23},
            {id: 3, message: 'Nice weather', likesCount: 14},
            {id: 4, message: 'Mood ((((((', likesCount: 100},
            {id: 5, message: 'Dima krasava', likesCount: 42}
        ]
    },
    dialogsPage : {
        dialogs : [
            {id: 1, name: 'Дима'},
            {id: 2, name: 'Костя'},
            {id: 3, name: 'Илья'},
            {id: 4, name: 'Даник'},
            {id: 5, name: 'Колян'}
        ],
        messages : [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Where are you?'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Fuck you'}
        ]
    }
}

export const addPost = (postMessage) => {
    const newPost = {
        id: 6,
        message: postMessage,
        likesCount: 0

    }
    state.profilePage.posts.push(newPost)
    rerenderTree(state)
}


export default state
