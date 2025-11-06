import {useState, useEffect} from "react";

export default function QuoteFetcher() {
    const URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";
    const [quote, setQuote] = useState({
        text: "", 
        author: ""
    });

    useEffect(() => {
        fetchQuote();
    }, []); // <-- empty [] makes it just stay and wait for click, different states (options down the road)

    // have to write async functions outside 
    // then in useEffect fctn (that can't be async)
  const fetchQuote = async () => {
     const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    setQuote({text: data.quote.text, author: data.quote.author});
  };

  // fetchQuote(); <-- left out in the open made comp go NUTS!

  return (
  <div>
    <h1>Quote Fetcher</h1>
    <p>{quote.text}</p>
    <p>{quote.author}</p>
    <button onClick={() => fetchQuote()}>Get New Quote</button>
  </div>
  );
}
