import Navbar from "./Navbar";
import Footer from "./Footer";

//برای اینکه نوبار و فوتر تو لیوت اصلی نذارم و شلوغ نشه این کامپوننت رو ساختم و از داخلش همه صفحات ب صورت سرور کامپوننت رد میشه

function ClientLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer/>
    </>
  );
}

export default ClientLayout;
