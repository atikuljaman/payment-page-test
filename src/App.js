import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import PaymentPage from "./pages/PaymentPage";

function App() {
  return (
    <div className="App">
      <Navigation />
      <PaymentPage />
    </div>
  );
}

export default App;
