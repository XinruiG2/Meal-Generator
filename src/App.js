import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import ProtectedRoute from "./pages/ProtectedRoute";
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
          element={
            <ProtectedRoute>
                <Home></Home>
            </ProtectedRoute>
          }>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
