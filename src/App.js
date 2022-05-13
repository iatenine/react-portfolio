import "./App.css";
import { Header } from "./components/Header";
import { Pricing } from "./components/Pricing";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
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
          <Route exact path="/developers">
            <Contact />
          </Route>
          <Route exact path="/pricing">
            <Pricing />
          </Route>
        </main>
      </Router>

      <FooterWrapper />
    </>
  );
}

export default App;
