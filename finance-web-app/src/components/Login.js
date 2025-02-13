import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="container flex flex-col items-center justify-center gap-5">
      <h2 className="text-2xl font-bold">¡Bienvenido de vuelta!</h2>
      <form className="flex flex-col w-full">
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          className="p-2 border"
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          className="p-2 border"
        />
        <Link to="/dashboard">
          <button type="button" className="p-2 rounded">
            Iniciar sesión
          </button>
        </Link>
      </form>
      <p>
        ¿No tienes una cuenta? <Link to="/register">Crear cuenta nueva</Link>
      </p>
    </div>
  );
}

export default Login;