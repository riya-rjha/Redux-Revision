import {configureStore, createSlice} from '@reduxjs/toolkit';

const sliceCounter = createSlice({
    initialState: {
        value: 0
    },
    name: 'counter', 
    reducers:{
        // action
        increment: state => {
            state.value = state.value + 1;
        },
        decrement: state => {
            state.value = state.value - 1;
        }
    }
});

export const {increment, decrement} = sliceCounter.actions;

const store = configureStore({
    reducer: sliceCounter.reducer
});

console.log(store.getState());
console.log(store.dispatch(increment()));
console.log(store.getState());
console.log(store.dispatch(increment()));
console.log(store.getState());
console.log(store.dispatch(increment()));
console.log(store.getState());
console.log(store.dispatch(decrement()));
console.log(store.getState());
