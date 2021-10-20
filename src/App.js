import "./App.css";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Gallery } from "./components/Gallery";
import { Contact } from "./components/Contact";
import { Resume } from "./components/Resume";
import { FooterWrapper } from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <main>
          <Route exact path="/">
            <About />
          </Route>
          <Route exact path="/react-portfolio">
            <About />
          </Route>
          <Route exact path="/gallery">
            <Gallery />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/resume">
            <Resume />
          </Route>
        </main>
      </Router>

      <FooterWrapper />
    </>
  );
}

export default App;
