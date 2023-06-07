import Home from "./pages/HomePage/Home"
import Login from "./pages/LoginPage/Login"
import SignUp from "./pages/SignUpPage/SignUp"
import Subscription from "./pages/Subscription/Subscription"
import Subscriptions from "./pages/SubscriptionsPage/Subscriptions"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/sign-up" element={<SignUp />}/>
        <Route path="/subscriptions" element={<Subscription />}/>
        <Route path="/subscriptions/ID_DO_PLANO" element={<Subscriptions />}/>
        <Route path="/home" element={<Home />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
