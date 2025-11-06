// Lab 4 : due Nov 5, 2025
// Dayna Pennock

import {useState, useEffect} from "react";
import PostForm from "./PostForm";
import PostsContainer from "./PostsContainer";

export default function FakeApiApp() {
    const URL = "https://jsonplaceholder.typicode.com/posts";

    // state for all posts together ... like setToDOList
    const [data, setData] = useState([]);
    const [newPost, setNewPost] = useState({
        title: "",
        body: ""    // input name must match these keywords
    });

    useEffect(()=> {
        fetchData(); 
    // useEffect can't be async but can hold async fctn
    }, []);

    const fetchData = async () => {         // ASYNC waits
        const response = await fetch(URL);
        const posts = await response.json();
        setData(posts);
    };

    // handles the change in form inputs when change happens
    const handleOnChange = (e) => {
        setNewPost((prevPost) => {
            return {
                ...prevPost, 
                [e.target.name]: e.target.value
            };
        });
    };

    // same as handleAddToDo -- adds to the list
    const handleAddPost = (e) => {
        e.preventDefault(); // keep outside of if statement -- creates bug (in class ex)
        if (newPost.title ==="" || newPost.body ===""){
            alert("Please fill out both title and body");
        } else {
            setData((prevData) => {
                return [newPost, ...prevData];
            });

        // clears form for next entry
        setNewPost({
            title: "",
            body: ""
        });
        }
    };

    // renders the app - passes over to App.jsx
    return (
        <div>
            <h1>Fake API Posts</h1>
            <PostForm
                handleAddPost={handleAddPost}
                handleOnChange={handleOnChange}
                newPost={newPost}
            />
            <PostsContainer
                posts={data}
            />
        </div>
    );

}