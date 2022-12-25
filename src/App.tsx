import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./Context/AppContext";
import ItemPage from "./Components/ItemPage";
import ItemsList from "./Components/ItemsList";

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<ItemsList />} />
          <Route path="/:details" element={<ItemPage />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
