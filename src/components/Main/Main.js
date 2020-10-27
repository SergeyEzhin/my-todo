import React from "react";
import { useSelector } from "react-redux";
import { Radio } from "../../ui/Radio/Radio";
import "./Main.scss";

export const Main = () => {
  let todos = useSelector((state) => state.data.data);

  return (
    <div className="main">
      <div className="main__content">
        <ul className="list-todo">
          {todos.length ? (
            todos.map((todo, index) => (
              <li className="list-todo__elem" key={index}>
                <Radio id={index} text={todo} />
              </li>
            ))
          ) : (
            <p>Список задач пуст</p>
          )}
        </ul>
      </div>
    </div>
  );
};
