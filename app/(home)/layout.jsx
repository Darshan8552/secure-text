import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function HomeLayout({ children }) {
  return (
    <main>
        <Navbar />
        {children}
        <Footer/>
    </main>
  );
}
