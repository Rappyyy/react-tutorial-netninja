import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setCreator } from "./redux/creator";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isPending, setIsPending] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const creator = useSelector((state) => state.creator);

  const handleCreatorChange = (e) => {
    dispatch(setCreator(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, creator: creator };

    setIsPending(true);
    fetch("http://localhost:8000/blogs/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
      setIsPending(false);
      history.push("/");
    });
  };

  return (
    <div className="create">
      <h2>Add ToDo List</h2>
      <form onSubmit={handleSubmit}>
        <label>To do:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {!isPending && <button>Add to do list</button>}
        {isPending && <button disabled>Adding blog...</button>}
      </form>
    </div>
  );
};

export default Create;
