import MainLayout from "../layouts/MainLayout";
import erpImage from "../assets/erp1.png";

export default function Home() {

  return (

    <MainLayout>

      <div className="flex justify-center items-center h-full">

        <img
          src={erpImage}
          alt="ERP"
          className="max-w-full max-h-[700px] object-contain"
        />

      </div>

    </MainLayout>
  )
}