import { useEffect, useState } from "react";
import { getDatabase, ref, set } from "firebase/database";
import "./App.css";
function App() {
  const db = getDatabase();

  // all state
  const [todoInput, settodoInput] = useState("");

  //HandleInout function
  const HandleInout = (e) => {
    e.preventDefault();
    if ((todoInput |= "")) {
      const dbinfo = ref(db, "todo/");
      set(dbinfo, {
        todoItem: todoInput,
      })
        .then(() => {
          console.log("upload sucessfully");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  console.log(todoInput);
  return (
    <>
      <div className="todobody">
        <form>
          <input type="text" className="inputfield" onChange={HandleInout} />
          <button className="addbtn">Add</button>
        </form>
      </div>
    </>
  );
}

export default App;
