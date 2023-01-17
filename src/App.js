import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './PAGES/Home';
import Offers from './PAGES/Offers';
import Signup from './PAGES/Signup';
import Signin from './PAGES/Signin';
import ForgetPassword from './PAGES/ForgetPassword';
import Header from './components/Header';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
        </Routes>
      </Router>
    </>

  )
}
export default App
