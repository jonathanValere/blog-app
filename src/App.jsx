import "./App.css";
import Header from "./components/Header/Header";
import NavigationMenu from "./components/NavigationMenu/NavigationMenu";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <header>
        <div className="container">
          <Header />
          <NavigationMenu />
        </div>
      </header>
      <Content />
      <Footer />
    </>
  );
}

export default App;
