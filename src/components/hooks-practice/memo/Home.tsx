import { useState } from "react";
import { MemoEmployeeProfile } from "./EmployeeProfile";

const Home = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleUpdate = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      {count}
      <button onClick={handleUpdate}>update</button>
      <>
        <label>
          Name: <input value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Email:{" "}
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <hr />
        <MemoEmployeeProfile name={name} email={email} />
      </>
    </div>
  );
};

export default Home;
