import CardList from "./components/CardList";
import SearchBar from "./components/SearchBar";
import Title from "./components/Title";
import "./App.css";

export default function App() {
  return (
    <main>
      <div className="container">
        <Title />
        <CardList />
      </div>
    </main>
  );
}
