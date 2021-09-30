import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Gallery } from "./components/Gallery";
import { Contact } from "./components/Contact";
import { Resume } from "./components/Resume";

function App() {
  // Determine which page is being rendered, pass to Header component to do stuff
  const [page, setPage] = useState(0);
  const pageProps = {
    page,
    setPage,
  };

  return (
    <>
      <Header props={pageProps} />
      <main>
        {page === 0 ? <About /> : ""}
        {page === 1 ? <Gallery /> : ""}
        {page === 2 ? <Contact /> : ""}
        {page === 3 ? <Resume /> : ""}
      </main>

      <footer>
        <p>&copy; 2021 Jack Linhart</p>
      </footer>
    </>
  );
}

export default App;
