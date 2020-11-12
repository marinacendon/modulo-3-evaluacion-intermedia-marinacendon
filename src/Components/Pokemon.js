import React from 'react';

const Pokemon = (props) => {
  return (
    <div>
      Pokemon:
      <ul>
        <li>
          <img src={props.url} />
          {props.name}
        </li>
        {/* <li>{props.type}</li> */}
      </ul>
    </div>
  );
};
export default Pokemon;
