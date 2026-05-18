import erp from "../assets/erp.jpg";
export default function Navbar() {

  return (

    <div className="bg-blue-700 text-white p-4 flex justify-between items-center shadow">

      <div className="flex items-center gap-3">

        <img
          src= {erp}
          alt="erp"
          className="w-10 h-10"
        />

        <h1 className="text-2xl font-bold">
          SMR ERP
        </h1>

      </div>

      <div className="flex items-center gap-6">

        <p>
          Branch: Main Plant
        </p>

        <p>
          FinYear: 2026-27
        </p>

        <p>
          Sunil | Admin
        </p>

      </div>

    </div>
  )
}