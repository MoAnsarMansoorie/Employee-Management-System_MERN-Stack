import { Toaster } from 'react-hot-toast'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import LoginLanding from './pages/LoginLanding'
import Layout from './pages/Layout'
import Dashboard from './pages/Dashboard'
import PaySlip from './pages/PaySlip'
import PrintPayslip from './pages/PrintPayslip'
import Setting from './pages/Setting'
import Employees from './pages/Employees'
import Attendence from './pages/Attendence'
import Leave from './pages/Leave' 
import LoginForm from './components/LoginForm'

function App() {

  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/login" element={<LoginLanding />} />

        <Route path='/login/admin' element={<LoginForm role="admin" title="Admin Login" subtitle="Please enter your credentials to access the admin panel" />} />

        <Route path='/login/employee' element={<LoginForm role="employee" title="Employee Login" subtitle="Please enter your credentials to access your dashboard" />} />

        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/payslip" element={<PaySlip />} />
          <Route path='/leave' element={<Leave />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/attendence" element={<Attendence />} />
        </Route>

        <Route path="/print-payslip/:id" element={<PrintPayslip />} />

        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </>
  )
}

export default App
