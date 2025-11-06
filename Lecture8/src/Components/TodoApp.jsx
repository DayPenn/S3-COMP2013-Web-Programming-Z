import { useState } from "react";
import FormComponent from "./FormComponent";
import TodoCardsContainer from "./TodoCardsContainer";

export default function TodoApp() {
  const [todo, setTodo] = useState({
    title: "",
    checked: false,
  });

  // state for all the todo list items together
  const [todoList, setTodoList] = useState([]);

  const handleAddTodo = (e) => {
    e.preventDefault(); // stop the default action of get request in the form
    if (todo.title === "") {
      alert("Please add a title first before adding a todo item!");
    } else {
      // this function will add a todo item to the todo list
      setTodoList((prevList) => {
        return [...prevList, todo];
      });
      setTodo({
        title: "",
        checked: false,
      });
    };
  };

  const handleOnChange = (e) => {
    // this will handle the onChange event to enable change on title input in formComponent
    setTodo((prevTodo) => {
      return {
        ...prevTodo,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleOnCheck = (e, index) => {
    // this will handle the check form on the to do item
    setTodoList(
        todoList.map((item, i) => i === index 
        ? {...item, checked: e.target.checked}
        : item) // if index matches index of what we are clicking on, change checked value to opposite checked value )
    );
  };

  const handleOnDelete = (index) => {
    // this function will handle the deletion of an item
    setTodoList((prevList) => {
        return prevList.filter((item, i) => i !== index)
        // item is the whole item, taken even if not used
    });
  };

  // rendering the app
  return (
    <div>
      <h1>To Do List:</h1>
      <FormComponent
        handleAddTodo={handleAddTodo}
        handleOnChange={handleOnChange}
        todo={todo}
      />
      <TodoCardsContainer
        handleOnDelete={handleOnDelete}
        handleOnCheck={handleOnCheck}
        todoList={todoList}
      />
    </div>
  );
}
