import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="container flex flex-col items-center justify-center gap-5">
      <h2 className="text-2xl font-bold">Crea tu cuenta</h2>
      <form>
        <input type="text" placeholder="Nombre completo" />
        <input type="email" placeholder="Correo electrónico" />
        <input type="password" placeholder="Contraseña" />
        <button>Registrarse</button>
      </form>
      <p>
        ¿Ya tienes una cuenta? <Link to="/">Iniciar sesión</Link>
      </p>
    </div>
  );
}

export default Register;