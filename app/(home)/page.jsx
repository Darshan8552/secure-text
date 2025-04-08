import { Roboto } from "next/font/google";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const roboto = Roboto({
  subsets: ["latin"],
});

export default function HomePage() {
  return (
    <div
      className={`${roboto.className} min-h-[610px] w-full flex  items-center flex-col`}
    >
      <h1 className="text-4xl font-bold py-5">Secure Your Text Data</h1>
      <p className="text-[#4B5563]">Securely store your private text with end-to-end encryption.</p>
      <p className="text-[#4B5563]">No registration required.</p>
      <div className="flex gap-2 items-center mt-18 ">
        <h2 className="text-gray-400 text-lg">Go to secureText.com/</h2>
        <input
          className="border rounded-md border-gray-300 pl-2 py-1"
          placeholder="notes"
        />
        <button className="bg-[#16BC88] px-4 py-1 rounded-md text-white flex items-center gap-2">
          Go <FaArrowRight size={14} />
        </button>
      </div>
      <div className="flex gap-2 mt-[100px]">
        <div className="flex flex-col w-full min-w-[200px]  recipients items-center justify-center gap-2">
            <Image src="/icons/icon1.svg" alt="encryption logo" width={48} height={48} />
            <h2 className="font-semibold ">End-to-End <br /> Encryption</h2>
            <p className="text-[#4B5563] text-sm flex flex-col items-center">
                <span>Your Data are </span>
                <span>encrypted and can only</span> 
                <span>be read by intended </span>
                <span>recipients</span>
            </p>
        </div>
        <div className="flex flex-col w-full min-w-[200px] recipients items-center justify-center gap-2">
            <Image src="/icons/icon2.svg" alt="encryption logo" width={48} height={48} />
            <h2 className="font-semibold ">No Registration</h2>
            <p className="text-[#4B5563] text-sm flex flex-col items-center">
                <span>Start sending secure</span>
                <span>data instantly </span> 
                <span>without creating an</span>
                <span>account</span>
            </p>
        </div>
        <div className="flex flex-col w-full min-w-[200px] recipients items-center justify-center gap-2">
            <Image src="/icons/icon3.svg" alt="encryption logo" width={48} height={48} />
            <h2 className="font-semibold ">Self-Destructing</h2>
            <p className="text-[#4B5563] text-sm flex flex-col items-center">
                <span>Data automatically</span>
                <span>delete after no  </span> 
                <span>interaction in period</span>
                <span>or after a set time</span>
            </p>
        </div>
        <div className="flex flex-col w-full min-w-[200px] recipients items-center justify-center gap-2">
            <Image src="/icons/icon4.svg" alt="encryption logo" width={48} height={48} />
            <h2 className="font-semibold ">Password Protected</h2>
            <p className="text-[#4B5563] text-sm flex flex-col items-center">
                <span>Add an extra layer of </span>
                <span>security with password</span>
                <span>protection</span>
            </p>
        </div>
      </div>
    </div>
  );
}
