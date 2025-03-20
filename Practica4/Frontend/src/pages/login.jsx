import { useState } from "react";
import Service from "../service/service.js";
import { useAuthContext } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

const login = () => {

    const navigate = useNavigate();

    const {logueado, setLogueado} = useAuthContext();

    const [credenciales, setCredenciales] = useState({ 
      registro_academico:'',
      password:''
  });
    const handleSumbit = (e) => {
      e.preventDefault();
    }

    const onChangeCredentials = (e) => {
      setCredenciales({
        ...credenciales,
        [e.target.name]: e.target.value
      });
    }

const handleLogin = () => {
  Service.login(credenciales)
  .then(response => {
    console.log (response);
    if(response.status === 200){
      const data_a_guardar = {
        codigo: credenciales.codigo,
        rol:response.rol
      }
      localStorage.setItem("data_user", JSON.stringify(data_a_guardar));
      setLogueado(true);
      if(response.rol === 1){
        navigate('/admin/home');

      } else if(response.rol === 2){
        navigate('/profesor/home');

      } else if(response.rol === 3){
        navigate('/estudiante/home');
      }
    }else{ 
    ('Error al iniciar sesión');
    }
  })
  .catch(error => {
    console.log(error);
});
}

    return (
<div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 px-6">
  <div className="sm:mx-auto sm:w-full sm:max-w-md">
    <img
      className="mx-auto h-10 w-auto"
      src="https://dtt-ecys.org/static/build/images/ecys/logo-ecys-fiusac-min.png"
      alt="Workflow"
    />
    <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
      Sistema ECYS
    </h2>
  </div>
  <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
      <form onSubmit={handleSumbit}>
        <div>
          <label
            htmlFor="codigo"
            className="block text-sm font-medium leading-5  text-gray-700"
          >
            Número de Carnet/Código
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              id="codigo"
              name="codigo"
              placeholder="Ingrese su código"
              type="text"
              required=""
              value={credenciales.codigo}
              onChange={onChangeCredentials}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            />
          </div>
        </div>
        <div className="mt-6">
          <label
            htmlFor="contrasenia"
            className="block text-sm font-medium leading-5 text-gray-700"
          >
            Contraseña
          </label>
          <div className="mt-1 rounded-md shadow-sm">
            <input
              id="contrasenia"
              name="contrasenia"
              placeholder="Ingrese su contraseña"
              type="password"
              required=""
              value={credenciales.contrasenia}
              onChange={onChangeCredentials}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            />
          </div>
        </div>
        <div className="mt-6">
          <span className="block w-full rounded-md shadow-sm">
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
              onClick={handleLogin}
            >
              Iniciar Sesión
            </button>
          </span>
        </div>
      </form>
    </div>
  </div>
</div>

    )
}
export default login;