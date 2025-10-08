import {useState} from "react";

export default function EmojiStore(){
    const [emojiStore, setEmojiStore] = useState([]);
    return (
        <div>
            <div>
                {emojiStore.map((emoji, index) => <p key= {index}>{emoji}</p>)}
            </div>
        <div>
            <button onClick={()=> setEmojiStore([...emojiStore, "🌲"])}>
                Add Tree</button>
            <button onClick={()=> setEmojiStore([...emojiStore, "💙"])}>
                Add Blue</button>
            <button onClick={()=> setEmojiStore([...emojiStore, "🐱"])}>
                Add Cat</button>
        </div>
        </div>
    );
}
 
