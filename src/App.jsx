import { useEffect, useState } from "react";
import { getDatabase, ref, set, push, onValue } from "firebase/database";
import "./App.css";
function App() {
  const db = getDatabase();

  const [todoInput, settodoInput] = useState("");
  const [todoAllData, settodoAllData] = useState([]);

  //GET data from database

  useEffect(() => {
    const tododbRef = ref(db, "todo/");
    onValue(tododbRef, (snapshot) => {
      const allDataArr = [];
      snapshot.forEach((item) => {
        allDataArr.push({
          todoId: item.key,
          todoItem: item.val(),
        });
      });
      settodoAllData(allDataArr);
    });
  });
  console.log(todoAllData);
  //HandleAdd function
  const HandleAdd = (e) => {
    e.preventDefault();
    if (todoInput !== "") {
      const dbinfo = ref(db, "todo/");
      set(push(dbinfo), {
        todoItem: todoInput,
      })
        .then(() => {
          console.log("upload sucessfully");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("input faka");
    }
  };

  return (
    <>
      <div className="todobody">
        <form>
          <input
            type="text"
            className="inputfield"
            onChange={(e) => settodoInput(e.target.value)}
          />
          <button className="addbtn" onClick={HandleAdd}>
            Add
          </button>
        </form>
        <div className="todoitembox">
          <ul className="itemParent">
            {todoAllData.map((item) => (
              <li className="todoitemforcss">
                <div className="todoAllItem">
                  <button className="edit">Edit</button>
                  <span className="todoSpan">{item.todoItem.todoItem}</span>
                  <button className="delete">delete</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
