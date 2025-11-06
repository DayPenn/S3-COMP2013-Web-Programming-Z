export default function FormComponent({
  todo = {title: "placeholder", checked: false},
  handleOnChange,
  handleAddTodo,
}) {
  return (
    <div>
      <form action="">
        <input
          type="text"
          name="title"
          value={todo.title}
          onChange={handleOnChange}
        />
        <button onClick={handleAddTodo}>Add Task To List</button>
      </form>
    </div>
  );
}
