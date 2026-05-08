import React from 'react'
import LoginLeftSide from '../components/LoginLeftSide'
import { ShieldIcon, UserIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

const LoginLanding = () => {

  const portalOptions = [
    {
      to : '/login/admin',
      title : 'Admin Portal',
      description : 'Access the admin panel to manage employees, view reports, and configure system settings.',
      icon: ShieldIcon
    },
    {
      to : '/login/employee',
      title : 'Employee Portal',
      description : 'Log in to view your dashboard, check attendance, and access your payslips.',
      icon: UserIcon
    }
  ]

  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      <LoginLeftSide />

      <div className='w-full md:w-1/2 p-6 sm:p-12 lg:p-16 flex flex-col items-center justify-center relative overflow-y-auto min-h-screen'>

        <div className='w-full max-w-md animate-fade-in relative z-10'>

          {/* Headers */}
          <div className='mb-10 text-center md:text-left'>
            <h2 className='text-3xl font-medium text-slate-900 tracking-tight mb-3'>Welcome to the Employee Management System</h2>
            <p className='text-slate-500'>Select your portal to securely access your account.</p>
          </div>

          {/* Portal List */}
          <div>
             {portalOptions.map((portal) => (
              <Link to={portal.to} key={portal.title} className='flex items-start gap-4 p-4 mb-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors'>
                <portal.icon className='w-6 h-6 text-indigo-500 mt-1' />
                <div>
                  <h3 className='text-lg font-medium text-slate-900'>{portal.title}</h3>
                  <p className='text-slate-500'>{portal.description}</p>
                </div>
              </Link>
             ))}          
          </div>

          {/* Footer */}
          <div className='mt-10 text-center text-sm text-slate-400'>
            <p>&copy; {new Date().getFullYear()} Employee Management System. All rights reserved.</p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default LoginLanding
