import {useState} from 'react';

function useCounter(initialValue = 0, initialStep = 1){ // custome huke

    let [count, setCount] = useState(initialValue); 
    const increase = () =>setCount((c) => c + initialStep);
    const decrease = () =>setCount((c) => c - initialStep);

    return [count, increase, decrease];
}

export default useCounter;