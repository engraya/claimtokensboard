import Wrapper from '../../components/Wrapper/Wrapper'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
// import { useMutation } from "react-query";
// import { toast } from 'react-toastify';
// import { apiClient } from '../../api/axios';
// import { useDispatch } from "react-redux";
// import { loginUser } from '../../store/reducers/auth';
import { coinlogo } from '../../assets';
// import { Spinner } from 'flowbite-react';

function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    // const dispatch = useDispatch();
  
    const togglePasswordVisibility = () => {
      setShowPassword((prevState) => !prevState);
    };
    
    const [formData, setFormData] = useState({
      email: "",
      phone: "",  // Added phone number field
      password: "",
    });
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { id, value } = e.target;
      setFormData({ ...formData, [id]: value });
    };
  
    // Mutation for login API
    // const mutation = useMutation(
    //   async (data: typeof formData) => {
    //     const response = await apiClient.post(
    //       "/auth/login",
    //       data
    //     );
    //     return response.data;
    //   },
    //   {
    //     onSuccess: (data) => {
    //       toast.success('Login successful!!...', {
    //         position: "top-center",
    //         autoClose: 5000,
    //         hideProgressBar: false,
    //         closeOnClick: false,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         theme: "light"
    //       });
    //       dispatch(loginUser(data));
    //       navigate("/"); 
    //     },
    //     onError: (error: any) => {
    //       toast.error(error.response?.data?.message || "Something went wrong!", {
    //         position: "top-center",
    //         autoClose: 5000,
    //         hideProgressBar: false,
    //         closeOnClick: false,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         theme: "light"
    //       });
    //     },
    //   }
    // );
  
    // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //   e.preventDefault();
    //   const { email, phone, password } = formData;
  
    //   // Validate form data
    //   if (!email || !phone || !password) {
    //     toast.error("Email, phone number, and password are required.");
    //     return;
    //   }
  
    //   // Trigger the mutation
    //   mutation.mutate({ email, phone, password });
    // };


    const handleAuthRedirect = () => {
      navigate("/dashboard"); 
    }




  return (
    <Wrapper>
      <div className="w-full md:w-[588px] flex-col justify-start items-center gap-8 inline-flex">
      <div className="w-[93.14px] h-10 pl-[5.60px] pr-[5.74px] pt-[1.40px] justify-center items-center inline-flex">
            <div className="relative flex-col justify-start items-start flex">
                <img className="w-[80px]" src={coinlogo} alt="logo" />
            </div>
        </div>
        <div className="self-stretch px-4 pt-11 pb-12 bg-[#f4f5f9] rounded-2xl flex-col justify-start items-center gap-8 flex">
          <div className="self-stretch h-[25px] flex-col justify-start items-center gap-2 flex">
            <div className="text-center text-[#07070a] text-xl font-bold font-['Mulish']">Sign in to your account</div>
          </div>
          <form className="self-stretch flex-col justify-start items-start gap-8 flex">
            <div className="self-stretch flex-col justify-start items-start gap-6 flex">
              <div className="self-stretch flex-col justify-start items-start gap-4 flex">

                {/* Email Field */}
                <div className="self-stretch h-[78px] flex-col justify-start items-start gap-2 flex">
                  <div className='w-full'>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#202b3c]">Email address</label>
                    <input 
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="text-gray-700 text-sm self-stretch h-12 px-5 py-[13px] bg-white rounded border border-[#6e7080] block w-full"
                      placeholder="Email address"
                      required
                    />
                  </div>
                </div>

                {/* Phone Number Field */}
                <div className="self-stretch h-[78px] flex-col justify-start items-start gap-2 flex">
                  <div className='w-full'>
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-[#202b3c]">Phone Number</label>
                    <input 
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="text-gray-700 text-sm self-stretch h-12 px-5 py-[13px] bg-white rounded border border-[#6e7080] block w-full"
                      placeholder="Phone number"
                      required
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="self-stretch h-[78px] flex-col justify-start items-start gap-2 flex">
                  <div className="w-full relative">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-[#202b3c]">Password</label>
                    <div className="w-full relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="text-gray-700 text-sm self-stretch h-12 px-5 bg-white rounded border border-[#6e7080] block w-full"
                        placeholder="Password"
                        required
                      />
                      <div onClick={togglePasswordVisibility} className="absolute inset-y-0 right-4 flex items-center cursor-pointer">
                        {showPassword ? <FaRegEye size={18} color='#C1C5E0'/> : <FaRegEyeSlash size={18} color='#C1C5E0'/>}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <button
              // disabled={mutation.isLoading}
              onClick={handleAuthRedirect}
              className="self-stretch px-11 py-4 bg-[#e1e3ef] hover:bg-[#137af0] rounded justify-center cursor-pointer items-center inline-flex overflow-hidden group"
            >
              <div className="justify-center items-center gap-2 flex">
                <div className="text-[#6e7080] group-hover:text-white text-base font-medium">
                  {/* {mutation.isLoading ? <Spinner /> : "Log in"} */}
                  {"Log in"}
                </div>
              </div>
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
}

export default LoginPage;
