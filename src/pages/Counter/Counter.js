import { useContext } from 'react';

import useCounter from './useCounter';
import { Theme } from '../../App';

function Counter(){

    const [count, increase, decrease] = useCounter(0,1);
    const theme = useContext(Theme);

    return(
            <div>
                <p style={{color: theme.color}}>Current value: {count}</p>
                <button onClick={increase}>+</button>
                <button onClick={decrease}>-</button>
            </div>
    );
    
    // return(
    //     <Theme.Consumer>
    //         {value => 
    //         <div>
    //             <p>Current value: {count}</p>
    //             <button onClick={increase}>+</button>
    //             <button onClick={decrease}>-</button>
    //         </div>
    //         }
    //     </Theme.Consumer>
    // );
}

export default Counter;