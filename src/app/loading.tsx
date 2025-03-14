import Navbar from "@/components/Navbar/Navbar";

export default function Loading() {
    return (
      <>
        <Navbar/>
        <div className="flex items-center justify-center h-screen">
          <div className="w-8 h-8 border-4 border-gray-300 border-t-[#2174ea] rounded-full animate-spin "></div>
        </div>
      </>
    );
  }
  