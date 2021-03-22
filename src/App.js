import Header from "./component/Header/Header";
import Main from "./component/Main/Main";
import Footer from "./component/Footer/Footer";
import { ContextProvider } from "./context";

function App() {
  return (
    <>
      <Header />
      <ContextProvider>
        <Main />
      </ContextProvider>
      <Footer />
    </>
  );
}

export default App;
