import { Phone, Mail, Instagram } from "@mui/icons-material";
import Link from "next/link";
import { Theme } from "../shared/theme";

export default function Contact() {
  const linkClasses = `text-opacity-90 text-lg text-center text-[${Theme.LIGHT}] hover:text-white`;
  const rowClasses = 'flex items-center space-x-4';

  return (
    <div className="flex flex-col w-screen items-center justify-center p-8 h-[calc(100vh-14rem)]">
      {/* Slogan */}
      <h1 className={`text-3xl md:text-4xl font-bold text-[${Theme.LIGHT}] mb-8 text-center`}>
        Let's Build Something Together
      </h1>

      {/* Contact Info */}
      <div className={`w-full max-w-md bg-[rgba(217,217,217,0.3)] text-[${Theme.PRIMARY_LIGHT}] justify-center flex flex-col shadow-lg rounded-lg p-6 space-y-6`}>
        {/* Phone */}
        <div className={rowClasses}>
          <Phone className="w-6 h-6" style={{flex: 20}}/>
          <span className={`text-lg text-[${Theme.LIGHT}] text-center`} style={{flex: 80}}>+40 742 464 075</span>
        </div>

        {/* Email */}
        <div className={rowClasses}>
          <Mail className="w-6 h-6" style={{flex: 20}}/>
          <Link href="mailto:office@parametricsolutions.ro" className={linkClasses} style={{flex: 80}}>
            office@parametricsolutions.ro
          </Link>
        </div>

        {/* Instagram */}
        <div className={rowClasses}>
          <Instagram className="w-6 h-6" style={{flex: 20}}/>
          <Link href="https://instagram.com/parametric.solutions" target="_blank" className={linkClasses} style={{flex: 80}}>
            @parametric.solutions
          </Link>
        </div>
      </div>
    </div>
  );
}
