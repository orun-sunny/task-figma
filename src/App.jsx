import "./App.css";

import Header from "./components/Header/Header";
import Button from "./components/Button/Button";
import Dropdown from "./components/Dropdown.jsx/Dropdown";
import CardGroup from "./components/Card/CardGroup";
import ContentRight from "./components/ContentRight/ContentRight";
import Footer from "./components/Footer/Footer";
// import ContentSection from "./components/ContentSection/ContentSection";

function App() {
  return (
    <>
      <Header></Header>

      <div className="md:flex max-w-7xl mx-auto p-4 ">
        <div className="border shadow-md rounded-lg">
          <Button />
          <Dropdown />
          <CardGroup />
        </div>

        <ContentRight />
      </div>
      <Footer />
    </>
  );
}

export default App;
