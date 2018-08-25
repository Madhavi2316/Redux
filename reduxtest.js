//To create a store
const {createStore} = require('redux');

//initial state value
const intialState={
    age:21
};

//reducer function
const myReducer=(state=intialState, action)=>{
    const newState={...state};
    if(action.type ==='ADD'){
        newState.age += 1;
    }
    if(action.type==='SUB'){
        newState.age -= 1;
    }
    return newState;
    
}

const store= createStore(myReducer);

//store.subscribe runs when ever their is a change
store.subscribe(()=>{
    console.log('State: ' + JSON.stringify(store.getState()));  
})
//JSON>stringify to convert the object to string
// console.log('Initial Value: ' + JSON.stringify(store.getState()));
//passing ADD type to store
store.dispatch({type:'ADD'});
// console.log('AFter ADD: ' + JSON.stringify(store.getState()));
store.dispatch({type:'SUB'})
// console.log('After SUB: ' + JSON.stringify(store.getState()));