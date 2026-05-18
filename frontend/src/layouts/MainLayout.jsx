import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout({ children }) {

  return (

    <div className="flex">

      <Sidebar />

      <div className="flex-1 flex flex-col min-h-screen">

        <Navbar />

        <div className="flex-1 bg-gray-100 p-6">

          {children}

        </div>

        <Footer />

      </div>

    </div>
  )
}