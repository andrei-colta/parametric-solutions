import { Phone, Mail, Instagram } from "@mui/icons-material";
import Link from "next/link";

export default function Contact() {
  const linkClasses = `text-opacity-90 text-xl text-center text-light hover:text-[#fff] font-afacad`;
  const rowClasses = 'flex items-center space-x-4';

  return (
    <div className="flex flex-col max-w-[100vw] items-center justify-center p-8 h-[calc(100vh-4rem)] lg:h-[calc(100vh-5rem)] opacity-0 translate-y-4 animate-fade-in before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black before:opacity-[75%] bg-cover bg-center bg-no-repeat bg-[url('https://firebasestorage.googleapis.com/v0/b/parametric-solutions.firebasestorage.app/o/images%2Fwoodworking%2Fcover-photo.jpg?alt=media&token=c2bdff4a-c05f-470f-8940-d0eeaec5a9a2')]">
      <div className="relative z-10">
        {/* Slogan */}
        <h1 className={`text-2xl md:text-4xl font-bold text-light mb-8 text-center font-afacad`}>
          Let&apos;s Build Something Together
        </h1>

        {/* Contact Info */}
        <div className={`w-full max-w-md bg-primaryDark bg-opacity-80 text-primaryLight justify-center flex flex-col shadow-lg rounded-lg p-6 space-y-6`}>
          {/* Phone */}
          <div className={rowClasses}>
            <Phone className="w-6 h-6" />
            <span className={`text-xl text-light text-center font-afacad`} style={{ flex: 80 }}>+40 742 464 075</span>
          </div>

          {/* Email */}
          <div className={rowClasses}>
            <Mail className="w-6 h-6" />
            <Link href="mailto:office@parametricsolutions.ro" className={linkClasses} style={{ flex: 80 }}>
              office@parametricsolutions.ro
            </Link>
          </div>

          {/* Instagram */}
          <div className={rowClasses}>
            <Instagram className="w-6 h-6" />
            <Link href="https://instagram.com/parametric.solutions" target="_blank" className={linkClasses} style={{ flex: 80 }}>
              @parametric.solutions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
