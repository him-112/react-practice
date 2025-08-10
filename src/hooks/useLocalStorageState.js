import {useState, useEffect, useReducer } from 'react';

function useLocalStorageState(key, defaultValue, reducer) {
    const [state, dispatch] = useReducer(reducer || ((state, action) => state), defaultValue, (initial) => {
        let value;
        try {
            value = JSON.parse(window.localStorage.getItem(key) || String(initial));
        } catch (error) {
            value = initial;
            console.log(error);
        }

        return value;
    });

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state))
    }, [state, key]);

    return [state, dispatch];
}

export default useLocalStorageState;