import "./App.css";
import { users } from "./data/users";

function App() {
  const [selectedUserId, setSelectedUserId] = useState<number | null>("null");
  const selectedUser = users.find((user) => user.id === selectedUserId);
  return <></>;
}

export default App;
