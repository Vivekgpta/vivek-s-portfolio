import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Dock from "../components/Dock/Dock";
export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
       <Dock />
    </>
  );
}