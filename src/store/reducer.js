import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from "./actionTypes";
const previousState = {
  inputValue: "Write sth",
  list: ["8点晨会", "9点沟通需求会", "Review代码"],
};
export default (state = previousState, action) => {
  console.log(state, action);

  if (action.type === CHANGE_INPUT) {
    //注意reducer只能接收state,不能改变state,下面深拷贝出来一个对象
    let newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }

  if (action.type === ADD_ITEM) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = "";
    return newState;
  }
  if (action.type === DELETE_ITEM) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1); //删除数组中对应的值
    newState.inputValue = "";
    return newState;
  }
  if (action.type === GET_LIST) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list = action.data.data.list;
    return newState;
  }
  return state;
};
