"use client";

import Image from "next/image";

const clientLogos = [
  "/assets/clients/client1.png",
  "/assets/clients/client2.png",
  "/assets/clients/client3.png",
  "/assets/clients/client4.png",
  "/assets/clients/client5.png",
  "/assets/clients/client6.png",
];

export default function Clients() {
  // Duplicate logos for seamless infinite scroll
  const allLogos = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section className="py-12 bg-background-secondary overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-8">
        <div className="text-center">
          <span className="text-brand font-bold tracking-widest uppercase text-sm">
            Trusted by Leading Organizations
          </span>
        </div>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee flex gap-0 md:gap-8 items-center py-4">
          {allLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-48 md:w-80 h-20 md:h-28 relative opacity-40 hover:opacity-100 transition-all duration-500 cursor-pointer"
            >
              <Image
                src={logo}
                alt={`Client Logo ${index + 1}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
