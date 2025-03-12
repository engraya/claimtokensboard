
type LogoutModalProps = {
    onClose: () => void;
    onConfirm: () => void;
  };

function LogoutModal({ onClose, onConfirm } : LogoutModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center p-4 justify-center bg-[#f4f5f9] bg-opacity-50">
<div className="w-[400px] pb-8 bg-white rounded-xl flex-col justify-start items-start inline-flex">
    <div className="self-stretch px-4 pt-6 pb-3 bg-[#d2d4dd] rounded-tl-xl rounded-tr-xl border-b border-[#dcdfea] justify-center items-center gap-2.5 inline-flex">
    </div>
    <div className="self-stretch px-8 pt-6 pb-4 flex-col justify-start items-start gap-6 flex">
    <div className="self-stretch flex-col justify-start items-center gap-2 flex">
                <div className="text-center text-gray-900 text-xl font-medium font-['Mulish']">Are you sure you want to logout?</div>
            </div>
        <div className="flex justify-center mx-auto items-center gap-2">
        <button onClick={onClose} className="self-stretch cursor-pointer px-4 py-2  bg-[#2a314d] rounded justify-center items-center inline-flex overflow-hidden">
            <div className="justify-center items-center gap-2 flex">
                <div className="text-white text-base font-medium font-['Mulish']">Cancel</div>
            </div>
        </button>
        <button onClick={onConfirm} className="self-stretch cursor-pointer px-4 py-2 bg-[#ff7576] rounded justify-center items-center inline-flex overflow-hidden">
            <div className="justify-center items-center gap-2 flex">
                <div className="text-white text-base font-medium font-['Mulish']">Logout</div>
            </div>
        </button>
        </div>

    </div>
</div>
    </div>
  )
}

export default LogoutModal