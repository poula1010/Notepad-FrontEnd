// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Split from './components/Split'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import AuthenticatedRoute from './components/AuthenticatedRoute'
function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>

          <Route path="/main" element={
            <AuthenticatedRoute>
              <Split />
            </AuthenticatedRoute>}>
          </Route>
          <Route path="/" element={
            <AuthenticatedRoute>
              <Navigate to="/main" />
            </AuthenticatedRoute>}>
          </Route>
          <Route path="/login" element={<LoginForm />}></Route>
          <Route path="/register" element={<RegisterForm />}></Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
