import { useEffect } from "react";
import { getDatabase, ref, set } from "firebase/database";
function App() {
  const db = getDatabase();
  useEffect(() => {
    let databaseName = ref(db, "todo/");
    set(databaseName, {
      username: "arafat mai",
      email: "maccenarafat@gmail.com",
    });
  }, []);
  return (
    <>
      <h2>kmlkdmklm</h2>
    </>
  );
}

export default App;
