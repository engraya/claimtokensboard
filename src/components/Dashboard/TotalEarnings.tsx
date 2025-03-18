import { useState } from "react";
import WithDrawFundsModal from "../Modals/WithDrawFundsModal";
import { useSelector } from "react-redux";
function TotalEarnings() {

    
      const [openModal, setOpenModal] = useState(false);
      const currentUser = useSelector((state: any) => state.auth.currentUser);
      const claimedStatus = currentUser?.data?.claimed;


  return (
    <div className="max-w-[300px] flex flex-col items-center mx-auto px-6 py-7 bg-[#f4f5f9] rounded-xl border border-black/10 gap-5 overflow-hidden">
        <button
          onClick={() => setOpenModal(true)}
          disabled={claimedStatus}
          className={`px-6 py-3 border rounded-lg cursor-pointer flex justify-center items-center ${
            claimedStatus ? "bg-[#e1e3ef] text-gray-500 cursor-not-allowed" : "bg-blue-500 text-white border-[#0076f4]"
          }`}
        >
          Claim Tokens
        </button>
      {openModal && (
        <div className="transition duration-700 ease-in-out">
          <WithDrawFundsModal onClose={() => setOpenModal(false)} />
        </div>
      )}
    </div>
  )
}

export default TotalEarnings