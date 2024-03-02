import { useEffect, useState } from "react";
import {
  getDatabase,
  ref,
  set,
  push,
  onValue,
  remove,
} from "firebase/database";
import "./App.css";
import Modal from "react-modal";
function App() {
  const db = getDatabase();

  const [todoInput, settodoInput] = useState("");
  const [todoAllData, settodoAllData] = useState([]);
  const [realtime, setrealtime] = useState(false);
  //GET data from database

  useEffect(() => {
    const allDataArr = [];
    const tododbRef = ref(db, "todo/");
    onValue(tododbRef, (snapshot) => {
      snapshot.forEach((item) => {
        allDataArr.push({
          todoId: item.key,
          todoItem: item.val(),
        });
      });
      settodoAllData(allDataArr);
    });
  }, [realtime]);

  //HandleAdd function
  const HandleAdd = (e) => {
    e.preventDefault();
    if (todoInput !== "") {
      const dbinfo = ref(db, "todo/");
      set(push(dbinfo), {
        todoItem: todoInput,
      })
        .then(() => {
          setrealtime(!realtime);
          settodoInput("");
          console.log("upload sucessfully");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("input faka");
    }
  };

  // HandleDelete funciton
  const HandleDelete = (deletdid) => {
    remove(ref(db, "todo/" + deletdid))
      .then(() => {
        console.log("sucessfully delete");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="todobody">
        <form>
          <input
            type="text"
            className="inputfield"
            value={todoInput}
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
                  <button
                    className="delete"
                    onClick={() => HandleDelete(item.todoId)}
                  >
                    delete
                  </button>
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
