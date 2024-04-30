import "./styles.css";
import { AuthProvider } from "./ AuthContext";
import Home from "./Home";
export default function App() {
  return (
    <AuthProvider>
      <div className="App"></div>
      <Home />
    </AuthProvider>
  );
}
