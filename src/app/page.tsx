import Image from "next/image";
import Link from "next/link";

export default function ComingSoon() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#333333] text-center text-white px-4">
      {/* Logo */}
      <div className="animate__animated animate__fadeIn">
        <Image
          src="/spaccini-barbecue-logo.svg"
          alt="Spaccini Barbecue Logo"
          width={600}
          height={300}
          priority
        />
      </div>

      {/* Coming Soon Text */}
      <h1 className="text-5xl font-bold text-[#FF5733] mt-8 animate__animated animate__fadeIn animate__delay-1s">
        Stiamo per portarti il miglior barbecue!
      </h1>
      <p className="mt-6 text-lg text-[#BBBBBB] max-w-2xl mx-auto animate__animated animate__fadeIn animate__delay-2s">
        Da Spaccini, siamo un laboratorio specializzato nella preparazione di carne al barbecue, con il nostro sistema esclusivo di barbecue a pellet. Offriamo carne succulenta, cotta lentamente, per asporto e servizio sul posto per eventi. Presto potrai gustarla!
      </p>

      {/* Contact Links */}
      <div className="mt-10 animate__animated animate__fadeIn animate__delay-3s">
        <p className="text-lg text-[#BBBBBB]">Rimani aggiornato, contattaci o seguici sui social:</p>
        <div className="mt-6 flex justify-center space-x-8">
          {/* Email Link */}
          <Link href="mailto:robertospaccini@outlook.com">
            <div className="flex items-center space-x-3 cursor-pointer bg-[#FF5733] hover:bg-[#FF7F5C] transition-all px-6 py-3 rounded-full">
              <Image
                src="/email-icon.svg"
                alt="Email Icon"
                width={24}
                height={24}
              />
              <span className="text-white text-lg font-semibold">Contattaci via Email</span>
            </div>
          </Link>

          {/* Instagram Link */}
          <Link href="https://www.instagram.com/bbq.you/?hl=it" target="_blank">
            <div className="flex items-center space-x-3 cursor-pointer bg-[#FF5733] hover:bg-[#FF7F5C] transition-all px-6 py-3 rounded-full">
              <Image
                src="/instagram-icon.svg"
                alt="Instagram Icon"
                width={24}
                height={24}
              />
              <span className="text-white text-lg font-semibold">Seguici su Instagram</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-[#BBBBBB] text-sm">
        <p>&copy; 2025 Spaccini Barbecue. Tutti i diritti riservati.</p>
      </footer>
    </div>
  );
}
