export default function PostForm({
  newPost,
  handleOnChange,
  handleAddPost,
}) {
  return (
    <div>
      <form action="">
        <input
          type="text"
          name="title"
          value={newPost.title}
          onChange={handleOnChange}
        />
        <input
          type="text"
          name="body"
          value={newPost.body}
          onChange={handleOnChange}
        />
        <button onClick={handleAddPost}>Add Post To List</button>
      </form>
    </div>
  );
}
