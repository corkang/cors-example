import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [text, setText] = useState("불러오는 중...");

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/todos/1";
    // const url = "/todos/1";

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log("Response JSON:", data);

        // JSONPlaceholder answer structure
        // { userId: 1, id: 1, title: "...", completed: false }
        const title = data.title;

        setText(`Title: ${title}`);
      })
      .catch((err) => {
        console.error("Error:", err);
        setText("Error occurred while loading data.");
      });
  }, []);

  return (
    <div className="App">
      <h2>{text}</h2>
    </div>
  );
}

export default App;
