import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route 
          path="/" 
          element={<LandingPage></LandingPage>}>
        </Route>
        <Route 
          path="/home" 
          element={<Home></Home>}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
