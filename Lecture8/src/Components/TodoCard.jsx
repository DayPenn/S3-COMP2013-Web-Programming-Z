export default function TodoCard({
    title, //= "placeholder", 
    checked, //= false, 
    handleOnCheck,
    handleOnDelete, 
    index
}) {
  return (
    <div>
      {/* checkbox */}
      <input
        type="checkbox"
        name="checkbox"
        checked={checked}
        onChange={(e) => handleOnCheck(e, index)}
      />
      {/* title */}
      <span style= {
        checked
        ?{textDecoration: "line-through"}
        :{textDecoration: "none"}
        }
        >
          {title}
          </span>
      {/* delete button */}
      <button onClick={()  => handleOnDelete(index)}>DELETE</button>
    </div>
  );
}
