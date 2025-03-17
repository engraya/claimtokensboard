import { useState } from "react";
import WithDrawFundsModal from "../Modals/WithDrawFundsModal";
function TotalEarnings() {

    
      const [openModal, setOpenModal] = useState(false);


  return (
    <div className="max-w-[300px] flex justify-center items-center mx-auto px-6 py-7 bg-[#f4f5f9] rounded-xl border border-black/10 gap-5 overflow-hidden">
    <div className="justify-start items-start gap-2">
        <button onClick={() => setOpenModal(true)} className="px-6 py-3 bg-blue-500 text-white border border-[#0076f4] rounded-lg cursor-pointer justify-center items-center flex">
            <div className="justify-center items-center gap-2 flex">
                <div className="text-white text-sm font-medium font-['Mulish'] leading-snug">Claim Tokens</div>
            </div>
        </button>
    </div>
          {openModal && (
            <div className="transition duration-700 ease-in-out">
        <WithDrawFundsModal
          onClose={() => setOpenModal(false)}
        />
            </div>

      )}
</div>
  )
}

export default TotalEarnings