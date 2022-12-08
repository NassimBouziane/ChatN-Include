'use client'
/* eslint-disable import/extensions */
import Button02 from '../../components/button_02';  
import { useRef } from 'react';

export default function login() {
  const email = useRef(null)
  const password = useRef(null)

  async function getData() {
    const res = await fetch('http://localhost:3000/api/login',{method:"POST",body: JSON.stringify({email:email.current.value,password:password.current.value})}).then((res)=> res.json());
    sessionStorage.setItem('token', res);
  }
  return (
    <div className="grid grid-rows-5 gap-1">
        <div></div>
      <form onSubmit={getData} className="grid grid-rows-4 gap-2">
        <p></p>
          <div>
              <label htmlFor="name" className="flex justify-center mt-2">
                Email :
              </label>
          </div>
          <div className="flex justify-center">
              <input
              ref={email}
                type="email"
                id="email"
                name="email"
                className="mt-1 flex justify-center w-2/4 px-3 py-2 bg-white border border-slate-300text-sm shadow-sm placeholder-slate-400
                          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                          invalid:border-pink-500 invalid:text-pink-600
                          focus:invalid:border-pink-500 focus:invalid:ring-pink-500 "
              />
          </div>
          <div>
              <label htmlFor="name" className="flex justify-center mt-3">
                Mot de passe :
              </label>
          </div>
          <div className="flex justify-center">
              <input
              ref={password}
                type="password"
                id="password"
                name="password"
                className="mt-1 block w-2/4 px-3 py-2 bg-white border border-slate-300text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none "
              />
          </div>
      
      <div  className="flex justify-center mt-6">
          <Button02 title="Connexion" />
      </div>
      </form>
    </div>
  );
}
