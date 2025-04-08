import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className="flex justify-between h-16 w-full px-6 py-2 items-center">
      <div className="flex items-center gap-3">
        <Image src="/logo.svg" alt="nav logo" priority width={30} height={30} />
        <h1 className="text-2xl font-semibold">Secure Text</h1>
      </div>
      <div className="flex items-center gap-4">
        <Link href={""}>About</Link>
        <Link href={""}>Contact</Link>
      </div>
    </div>
  );
}
