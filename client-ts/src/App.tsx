import { ToastContainer } from 'react-toastify'
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import Indexpage from './page/Index'
import LoginPage from './page/Login'
import LogoutPage from './page/Logout'
import RegisterPage from './page/Register'
import TripDetailPage from './page/tripDetail'
import { LoginRoute, ScrollToTop } from './helper'
import UserStatusPage from './page/Userstatus'
import ReviewPage from './page/Review'
import HistoryPage from './page/history'
import PaymentPage from './page/payment'
import SearchPage from './page/search'



function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route index element={<Indexpage />} />
        <Route path="/home" element={<Indexpage />} />
        <Route path="/search/:type" element={<SearchPage />} />
        <Route path="/TripDetailPage/:id" element={<TripDetailPage />} />
        <Route path="/TripDetailPage/:id/review" element={<ReviewPage />} />
        <Route path="/TripDetailPage/:id/payment" element={<LoginRoute><PaymentPage /></LoginRoute>} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Logout" element={<LogoutPage />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/TripDetail" element={<TripDetailPage />} />
        <Route path="/userstatus" element={<LoginRoute><UserStatusPage /></LoginRoute>} />
        <Route path="/history" element={<LoginRoute><HistoryPage /></LoginRoute>} />
        <Route path="/payment" element={<LoginRoute><PaymentPage /></LoginRoute>} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App