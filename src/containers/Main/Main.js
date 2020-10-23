import React from "react";
import { AddTodo } from "../../components/AddTodo/AddTodo";
import "./Main.scss";

class Main extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <div className="title">
          <h1>Сегодня</h1>
          <button type="button" className="btn-change">
            Править
          </button>
        </div>
        <div className="main">
          <div className="main__content">
            <p>Список задач пуст</p>
            <AddTodo />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Main;
