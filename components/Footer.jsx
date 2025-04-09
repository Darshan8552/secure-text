export default function Footer(){
    return(
        <div className="w-full h-14 flex justify-between text-[#4B5563] px-4 items-center text-sm">
            <p>© 2024 Protected Text. All rights reserved. </p>
            <p>Your privacy is our priority. Data are encrypted and can be deleted by indented recipients.</p>
            <div className="flex gap-2 ">
                <span>Privacy Policy</span>
                <span>Terms of Use</span>
                <span>Security</span>
            </div>
        </div>
    )
}