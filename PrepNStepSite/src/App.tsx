import AppRouter from "./components/router/Router";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen ">
      <div className="flex-grow">
        <AppRouter />
      </div>
      <Footer />
    </div>
  );
}

export default App;
