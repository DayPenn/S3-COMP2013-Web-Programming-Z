export default function PostForm({
  newPost, // similar to todo
  handleOnChange,
  handleAddPost,
}) {
  return (
    <div>
      <form action="">
        <input // title - required
          type="text"
          name="title"
          value={newPost.title}
          onChange={handleOnChange}
        />
        <input // body - required
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
