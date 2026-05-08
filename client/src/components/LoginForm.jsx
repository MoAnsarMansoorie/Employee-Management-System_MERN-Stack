import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Lock, Eye, EyeOff } from 'lucide-react'
import LoginLeftSide from './LoginLeftSide'

const LoginForm = ({ role = 'user', title = 'Welcome Back', subtitle = 'Please enter your credentials to access your account.' }) => {
  const [passwordVisible, setPasswordVisible] = useState(false)

  return (
    <div className='min-h-screen flex flex-col md:flex-row bg-slate-50'>
      <LoginLeftSide />

      <div className='w-full md:w-1/2 p-6 sm:p-12 lg:p-16 flex items-center justify-center overflow-y-auto min-h-screen'>
        <div className='w-full max-w-md rounded-4xl border border-slate-200/80 bg-white/95 p-8 shadow-[0_32px_80px_-32px_rgba(15,23,42,0.25)] backdrop-blur-sm animate-fade-in'>
          <Link to='/login' className='text-sm text-indigo-600 hover:text-indigo-700 hover:underline mb-6 inline-flex items-center gap-2'>
            &larr; Back to portal selection
          </Link>

          <div className='mb-8'>
            <span className='inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-600'>
              {role === 'admin' ? 'Admin Portal' : 'Employee Portal'}
            </span>
            <h2 className='mt-6 text-3xl font-semibold text-slate-900 tracking-tight'>{title}</h2>
            <p className='mt-3 text-sm leading-6 text-slate-500'>{subtitle}</p>
          </div>

          <form className='space-y-5'>
            <div>
              <label htmlFor='email' className='block text-sm font-medium text-slate-700'>Email</label>
              <div className='mt-1 relative'>
                <Mail size={18} className='pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400' />
                <input
                  type='email'
                  id='email'
                  name='email'
                  placeholder='name@example.com'
                  className='w-full rounded-2xl border border-slate-200 bg-slate-50 px-12 py-3 text-sm text-slate-900 shadow-sm transition-all duration-200 focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20'
                />
              </div>
            </div>

            <div>
              <label htmlFor='password' className='block text-sm font-medium text-slate-700'>Password</label>
              <div className='mt-1 relative'>
                <Lock size={18} className='pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400' />
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  id='password'
                  name='password'
                  placeholder='Enter your password'
                  className='w-full rounded-2xl border border-slate-200 bg-slate-50 px-12 py-3 pr-24 text-sm text-slate-900 shadow-sm transition-all duration-200 focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20'
                />
                <button
                  type='button'
                  onClick={() => setPasswordVisible((prev) => !prev)}
                  className='absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-slate-100 px-2.5 py-2 text-slate-500 transition hover:bg-slate-200 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20'
                  aria-label={passwordVisible ? 'Hide password' : 'Show password'}
                >
                  {passwordVisible ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className='flex items-center justify-between gap-3'>
              <label className='inline-flex items-center gap-2 text-sm text-slate-600'>
                <input type='checkbox' className='h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500' />
                Remember me
              </label>
              <Link to='#' className='text-sm text-indigo-600 hover:text-indigo-700'>Forgot password?</Link>
            </div>

            <button
              type='submit'
              className='w-full rounded-2xl bg-linear-to-r from-indigo-600 to-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:from-indigo-700 hover:to-violet-700 active:scale-[0.98]'
            >
              Login
            </button>
          </form>

          <div className='mt-8 text-center text-sm text-slate-400'>
            <p>&copy; {new Date().getFullYear()} Employee Management System. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
