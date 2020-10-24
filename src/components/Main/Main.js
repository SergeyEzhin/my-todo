import React from "react";
import {useSelector} from 'react-redux';
import "./Main.scss";

export const Main = () => {

  let data = useSelector(state => state.data.data);
 
  return (
    <div className="main">
      <div className="main__content">
        {data.length 
          ? data.map(todo => (
              <p>{todo}</p>
            ))
          : <p>Список задач пуст</p>
        }
      </div>
    </div>
  )
   
}

