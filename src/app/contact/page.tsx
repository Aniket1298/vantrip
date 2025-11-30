import Image from 'next/image';
import ContactForm from '../components/ContactForm';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#fffbf2]">
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/contact-hero.jpg" alt="Contact TimelessKashi" fill className="object-cover brightness-[0.65]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#fffbf2]" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white">Get in touch</h1>
          <p className="text-lg text-orange-100 mt-2">Phone, email, or DM on Instagram — we’re happy to help plan your trip.</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16 -mt-20 relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-3">Contact details</h3>
          <p className="text-neutral-600 mb-4">We’re here to help you plan your perfect Varanasi journey. Reach us via any of the details below:</p>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#fff7ed] flex items-center justify-center text-[#be6b00] font-bold">P</div>
              <div>
                <div className="text-sm text-neutral-500">Phone</div>
                <div className="font-semibold">+91 8795019256</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#e2fbff] flex items-center justify-center text-[#085b60] font-bold">E</div>
              <div>
                <div className="text-sm text-neutral-500">Email</div>
                <div className="font-semibold">timelesskashi1@gmail.com</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#fef3c7] flex items-center justify-center text-[#d97706] font-bold">I</div>
              <div>
                <div className="text-sm text-neutral-500">Instagram</div>
                <Link href="https://www.instagram.com/timelesskashi_" className="font-semibold text-[#d97706] hover:underline">@timelesskashi_</Link>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#eafff0] flex items-center justify-center text-[#157a3d] font-bold">W</div>
              <div>
                <div className="text-sm text-neutral-500">WhatsApp</div>
                <div className="font-semibold">+91 8795019256</div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
