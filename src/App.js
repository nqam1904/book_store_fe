import { Switch, Route } from "react-router";
import "./App.css";
import { Header } from "./components";
import { User, Book } from "./pages";
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/admin/user" component={User} />
        <Route path="/admin/book" component={Book} />
      </Switch>
    </div>
  );
}

export default App;
