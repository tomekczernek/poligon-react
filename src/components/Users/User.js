import { useContext } from 'react';

import {Theme} from '../../App';

function User({ first, last }) {

  const theme = useContext(Theme);
  
  return (
    <span className="users-user" style={{color: theme.color}}>
      {first} {last}
    </span>
  );
}

export default User;
