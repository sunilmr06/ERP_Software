export default function Sidebar() {

  return (

    <div className="w-64 bg-blue-900 text-white min-h-screen p-5">

      <h1 className="text-3xl font-bold mb-10">
        Moduels
      </h1>

      <ul className="space-y-5 text-lg">

        <li className="hover:text-blue-300 cursor-pointer">
          Dashboard
        </li>

        <li className="hover:text-blue-300 cursor-pointer">
          CRM
        </li>

        <li className="hover:text-blue-300 cursor-pointer">
          Inventory
        </li>

        <li className="hover:text-blue-300 cursor-pointer">
          Purchase
        </li>

        <li className="hover:text-blue-300 cursor-pointer">
          Production
        </li>

        <li className="hover:text-blue-300 cursor-pointer">
          Reports
        </li>

      </ul>

    </div>
  )
}