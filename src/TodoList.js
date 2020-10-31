import React, { Component } from "react";
import TodoListUI from "./TodoListUI";
import store from "./store/index";

// import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from "./store/actionTypes";
import {
  changeInputAction,
  addItemAction,
  deleteItemAction,
} from "./store/actionCreators";

// const data = ["8点晨会", "9点沟通需求会", "Review代码"];
class TodoList extends Component {
  constructor(props) {
    super(props);
    console.log(store.getState());
    this.state = store.getState();
    this.changeInputValue = this.changeInputValue.bind(this);
    this.storeChange = this.storeChange.bind(this);
    this.clickBtn = this.clickBtn.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    store.subscribe(this.storeChange);
  }
  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        changeInputValue={this.changeInputValue}
        clickBtn={this.clickBtn}
        list={this.state.list}
      />
    );
  }
  changeInputValue(e) {
    // console.log(e.target.value);
    // const action = {
    //   type: CHANGE_INPUT,
    //   value: e.target.value,
    // };
    const action = changeInputAction(e.target.value);
    store.dispatch(action);
  }

  storeChange() {
    this.setState(store.getState());
  }

  clickBtn() {
    // const action = {
    //   type: ADD_ITEM,
    // };
    const action = addItemAction();
    store.dispatch(action);
  }

  deleteItem(index) {
    // console.log(index);
    // const action = {
    //   type: DELETE_ITEM,
    //   index,
    // };
    const action = deleteItemAction(index);
    store.dispatch(action);
  }
}

export default TodoList;
