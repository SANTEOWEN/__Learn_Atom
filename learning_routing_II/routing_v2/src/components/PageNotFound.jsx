import { Link } from "@tanstack/react-router";
import { useNavigate } from "@tanstack/react-router";

export const PageNotFound = () => {
  
  const navigate = useNavigate();
  const handleBackToHome = () => {
    navigate({ to: '/' });
  };

  return ( 
    <>
    <div className="flex flex-col items-center justify-center h-screen bg-[#0d1117]">
      <h1 className="text-[#6ec1e4] lg:text-9xl text-center md:text-6xl text-4xl">STILL UNDER CONSTRUCTION</h1>
      <button className="mt-5 bg-[#6ec1e4] rounded-md px-10 py-3 text-white cursor-pointer" onClick={() => handleBackToHome()}>Back to Home</button>
    </div>
    </>
   );
}
 
export default PageNotFound;
