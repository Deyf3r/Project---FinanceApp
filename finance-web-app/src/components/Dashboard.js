import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="container flex flex-col items-center justify-center gap-3">
      <h1 className="text-2xl font-bold">App de Finanzas</h1>
      <h2 className="text-xl">Bienvenido, Cristopher</h2>
      <button>
        <Link to="/financial-form">Configurar Perfil Financiero</Link>
      </button>

      <h3 className="text-xl">Resumen Financiero</h3>
      <div className="flex flex-col gap-2">
        <p>Saldo Actual: $5,000</p>
        <p>Ingresos este mes: $3,000</p>
        <p>Gastos este mes: $1,500</p>
        <p>Progreso hacia tu meta: 50%</p>
      </div>

      <h3 className="text-xl">Metas de Ahorro</h3>
      <div className="flex flex-col gap-2">
        <p>Meta: $10,000</p>
        <p>Ahorro Actual: $5,000</p>
        <p>Faltan: $5,000</p>
      </div>

      <h3 className="text-xl">Transacciones Recientes</h3>
      <div className="flex flex-col gap-2">
        <p>Comida: -$50</p>
        <p>Transporte: -$30</p>
        <p>Salario: +$3,000</p>
      </div>
    </div>
  );
}

export default Dashboard;