import React from "react";
import "./App.scss";
import { Main } from "./components/Main/Main";
import { connect } from "react-redux";
import { Title } from "./components/Title/Title";
import { CSSTransition } from "react-transition-group";
import { AddTodo } from "./components/AddTodo/AddTodo";
import { ModalAdd } from "./components/ModalAdd/ModalAdd";
import { ModalChange } from "./components/ModalChange/ModalChange";

class App extends React.Component {
  render() {
    let { turnChangeModal, addMode } = this.props;

    return (
      <div className="App">
        <div className="wrapper">
          <div className="wrapper__content">
            <Title />
            <Main />
            <AddTodo />
            <CSSTransition
              in={addMode}
              timeout={500}
              classNames="wrapper"
              unmountOnExit
              mountOnEnter
            >
              <ModalAdd />
            </CSSTransition>
            <CSSTransition
              in={turnChangeModal}
              timeout={500}
              classNames="wrapper"
              unmountOnExit
              mountOnEnter
            >
              <ModalChange />
            </CSSTransition>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  turnChangeModal: state.data.turnChangeModal,
  addMode: state.data.addMode,
});

export default connect(mapStateToProps, null)(App);
