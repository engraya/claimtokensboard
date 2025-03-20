import Wrapper from '../../components/Wrapper/Wrapper'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useMutation } from "react-query";
import { toast } from 'react-toastify';
import { apiClient } from '../../api/axios';
import { useDispatch } from "react-redux";
import { loginUser } from '../../store/reducers/auth';
import { Spinner } from 'flowbite-react';
import { logo } from '../../assets';

function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [lastFourDigits, setLastFourDigits] = useState('');
    const [loading, setLoading] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);
    const [isFetchEnabled, setIsFetchEnabled] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
  
    const togglePasswordVisibility = () => {
      setShowPassword((prevState) => !prevState);
    };
    
    const [formData, setFormData] = useState({
      email: "",
      phone: "",  
      password: "",
    });

    const validateForm = (updatedData: { email: string; phone: string; password: string }) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isEmailValid = emailRegex.test(updatedData.email);
      const isPhoneValid = updatedData.phone.length >= 10; 
      const isPasswordValid = updatedData.password.length >= 6;
    
      setIsFormValid(isEmailValid && isPhoneValid && isPasswordValid);
    };
    

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //   const { id, value } = e.target;
    //   const updatedData = { ...formData, [id]: value };
    //   setFormData(updatedData);
    //   validateForm(updatedData);
    
    //   if (id === "email") {
    //     if (!value.trim()) {
    //       setLastFourDigits(""); // Clear hint when email is deleted
    //     } else {
    //       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //       if (emailRegex.test(value)) {
    //         fetchUserLastFourDigitPhoneNumber(value);
    //       }
    //     }
    //   }
    // };

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
      const { id, value } = e.target;
      const updatedData = { ...formData, [id]: value };
      setFormData(updatedData);
      validateForm(updatedData);
    
      if (id === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsFetchEnabled(emailRegex.test(value)); 
      }
    };
    
  

    const mutation = useMutation(
      async (data: typeof formData) => {
        const response = await apiClient.post(
          "/v1/aast/auth/login",
          data
        );
        return response.data;
      },
      {
        onSuccess: (data) => {
          toast.success('Login successful!!...', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
          });
          dispatch(loginUser(data));
          navigate("/"); 
        },
        onError: (error: any) => {
          toast.error(error.response?.data?.message || "Something went wrong!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
          });
        },
      }
    );
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const { email, phone, password } = formData;
  
      // Validate form data
      if (!email || !phone || !password) {
        toast.error("Email, phone number, and password are required.");
        return;
      }
  
      // Trigger the mutation
      mutation.mutate({ email, phone, password });
    };

    // Function to fetch last four digits of phone number
    const fetchUserLastFourDigitPhoneNumber = async (email: string) => {
      if (!email) return; // Prevent empty email requests
      setLoading(true);
      try {
        const response = await apiClient.get(`/v1/aast/account/phone/${email}`);
        const userLastFourDigits = response?.data?.data || "";
        setLastFourDigits(userLastFourDigits)
        console.log("Digit Response", response)
      } catch (error) {
        console.error('User Data not found or error fetching data', error);
      }
      setLoading(false);
    };




  return (
    <Wrapper>
      <div className="w-full md:w-[588px] flex-col justify-start items-center gap-8 inline-flex">
      <div className="w-[93.14px] h-10 pl-[5.60px] pr-[5.74px] pt-[1.40px] justify-center items-center inline-flex">
            <div className="relative flex-col justify-start items-start flex">
                <img className="w-[80px] bg-transparent" src={logo} alt="logo" />
            </div>
        </div>
        <div className="self-stretch px-4 pt-11 pb-12 bg-[#f4f5f9] rounded-2xl flex-col justify-start items-center gap-8 flex">
          <div className="self-stretch h-[25px] flex-col justify-start items-center gap-2 flex">
            <div className="text-center text-[#07070a] text-xl font-bold font-['Mulish']">Sign in to your account</div>
          </div>
          <form  onSubmit={handleSubmit} className="self-stretch flex-col justify-start items-start gap-8 flex">
            <div className="self-stretch flex-col justify-start items-start gap-6 flex">
              <div className="self-stretch flex-col justify-start items-start gap-6 flex">

                {/* Email Field */}
                <div className="self-stretch h-[78px] flex-col justify-start items-start gap-2 flex">
                  <div className='w-full'>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#202b3c]">Email address</label>
                    <input 
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={e => {
                        handleChange(e);
                        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
                        if (emailRegex.test(e.target.value)) { 
                          fetchUserLastFourDigitPhoneNumber(e.target.value);
                        }
                      }}
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
                      type="text"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="text-gray-700 text-sm self-stretch h-12 px-5 py-[13px] bg-white rounded border border-[#6e7080] block w-full"
                      placeholder="Phone number"
                      required
                    />
                    <div className='w-full flex justify-between'>
                {/* Fetch Button */}
                    <span 
                      // @ts-ignore
                      onClick={isFetchEnabled ? fetchUserLastFourDigitPhoneNumber : undefined}
                      className={`text-xs sm:text-sm mt-1 px-2 cursor-pointer ${isFetchEnabled ? 'text-green-500' : 'text-gray-300 italic underline cursor-not-allowed'}`}
                    >
                      Fetch Last 4 Digits
                    </span>
                    {/* Loading or Hint */}
                    {loading ? (
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="w-4 h-4 border border-green-500 rounded-full animate-spin"></div>
                        <p className="text-xs sm:text-sm text-green-500">Fetching...</p>
                      </div>
                    ) : lastFourDigits && formData.email && (
                      <div className="flex items-center space-x-2 mt-1">
                        <p className="text-xs sm:text-sm text-green-500">Hint: ...{lastFourDigits}</p>
                      </div>
                    )}
                    </div>
    
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
              type="submit"
              disabled={mutation.isLoading}
              className="self-stretch px-11 py-4 hover:bg-[#d8dbee] bg-[#137af0] rounded justify-center cursor-pointer items-center inline-flex overflow-hidden group"
            >
              <div className="justify-center items-center gap-2 flex">
                <div className="text-gray-50 group-hover:text-white text-base font-medium">
                  {mutation.isLoading ? <Spinner /> : "Log in"}
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
