import React from "react";
import { Link } from "react-router-dom";

function FinancialForm() {
  return (
    <div className="container flex flex-col items-center justify-center gap-3">
      <h1 className="text-2xl font-bold">App de Finanzas</h1>
      <h2 className="text-xl">Ingresar Datos Financieros</h2>

      <h3 className="text-xl font-bold">Ingresos</h3>
      <input type="number" placeholder="Ingrese su salario mensual" />
      <input type="number" placeholder="Otros ingresos" />

      <h3 className="text-xl font-bold">Gastos</h3>
      <input type="number" placeholder="Gastos en alimentación" />
      <input type="number" placeholder="Gastos en transporte" />
      <input type="number" placeholder="Otros gastos mensuales" />

      <h3 className="text-xl font-bold">Metas de Ahorro</h3>
      <input type="number" placeholder="¿Cuánto desea ahorrar?" />
      <input type="number" placeholder="¿En cuántos meses?" />

      <button>Guardar Datos</button>
      <Link to="/dashboard">Volver al Dashboard</Link>
    </div>
  );
}

export default FinancialForm;