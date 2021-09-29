import "./App.css";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Gallery } from "./components/Gallery";
import { Contact } from "./components/Contact";

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Gallery />
        <Contact />
      </main>

      <footer>
        <p>&copy; 2021 Jack Linhart</p>
      </footer>
    </>
  );
}

export default App;
