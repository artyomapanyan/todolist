import {createStore} from "redux";


const store = createStore(function(state, action) {
    if(action.type === "edit-current-user-name") {
        return {
            ...state,
            currentUser: {
                ...state.currentUser,
                name: action.payload.name,
                age: action.payload.age
            }
        };
    }

    return state;
}, {
    currentUser: {
        name: "Joe Shmoe",
        age: "33"
    }
});

export default store;