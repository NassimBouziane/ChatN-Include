/* eslint-disable import/extensions */
import Button02 from '../../components/button_02';
import handler from "../../pages/api/login";

async function getData() {
  const res = await fetch('http://localhost:3000/api/users');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  console.log(res)
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

  
export default async function login() {

  return (
    
    <div className="grid grid-rows-5 gap-1">
      <p>{getData()}</p>
        <div></div>
      <form className="grid grid-rows-4 gap-2">

          <div>
              <label htmlFor="name" className="flex justify-center mt-2">
                Email :
              </label>
          </div>
          <div className="flex justify-center">
              <input
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
