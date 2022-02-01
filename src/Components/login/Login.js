
import axios from 'axios'
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";


export default function Login() {

    const [data, setData] = useState({email : '', password :''})
    const [isLogin, setLogged] = useState(false);
    let navigate = useNavigate();

    useEffect(() =>{
    

      // It will be called before unmounting.
     if( localStorage.getItem('token')){
      navigate(`/`)
     }
    return () => {
      console.log('componentWillUnmount!');
    };
    }
    
    ,[data])

    const  handleSubmit = () => {
      axios.post(`http://localhost:3006/api/v1/auth/login`, {
        username: data.email,
        password: data.password
      })
      .then((response) => {
        if(response.data.accessToken){
          localStorage.setItem('token', response.data.accessToken);
          setLogged(true)
          navigate(`/`)
        }
      }, (error) => {
        console.log(error);
        setLogged(false)
      })
     
    }

  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
      
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in</h2>
         
          </div>
          <div  className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  value={data.email}
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  onChange={e => setData({...data, email : e.target.value})}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={data.password}
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  onChange={e => setData({...data, password : e.target.value})}

                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
             
                onClick={handleSubmit}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
              
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}