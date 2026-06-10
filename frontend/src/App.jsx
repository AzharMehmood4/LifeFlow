import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/health")
      .then((res) => setMsg(res.data.message))
      .catch(() => setMsg("Backend not connected"));
  }, []);

  return (
    <div>
      <h1>LifeFlow</h1>
      <p>{msg}</p>
    </div>
  );
}

export default App;