import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppRouter from "./components/router/Router";

function App() {
  return (
    <div className="flex flex-col min-h-screen ">
      <div className="flex-grow">
        <Header />
        <AppRouter />
      </div>
      <Footer />
    </div>
  );
}

export default App;
