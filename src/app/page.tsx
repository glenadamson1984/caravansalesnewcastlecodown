import ImageGallery from "@/components/ImageGallery";
import ContactForm from "@/components/ContactForm";

const IMAGES = [
  {
    src: "/images/WhatsApp_Image_2026-02-25_at_09.31.38__1_-d1c2ec76-7893-4bfb-a06b-671c0be2128c.png",
    alt: "Exterior view of 2022 Willerby Kirkland static caravan at Mourneview",
  },
  {
    src: "/images/WhatsApp_Image_2026-02-25_at_09.31.38__4_-69630032-b355-4011-b109-eef40f40c410.png",
    alt: "Living area with L-shaped sofa and panoramic windows",
  },
  {
    src: "/images/WhatsApp_Image_2026-02-25_at_09.31.38__2_-b9da1a00-c3ad-460e-9f9c-f02f763a5f91.png",
    alt: "Living area with sofa and armchair",
  },
  {
    src: "/images/WhatsApp_Image_2026-02-25_at_09.31.37__1_-db5b4bfd-d06c-4095-99d0-e43f6a0f1901.png",
    alt: "Dining area with L-shaped seating and electric fireplace",
  },
  {
    src: "/images/WhatsApp_Image_2026-02-25_at_09.31.37-896c87da-a5cf-4037-b139-6078f9cf8332.png",
    alt: "Modern kitchen with integrated fridge-freezer",
  },
  {
    src: "/images/WhatsApp_Image_2026-02-25_at_09.31.38__3_-67f07455-2096-43e5-80e0-558fae60671c.png",
    alt: "Integrated fridge-freezer and kitchen storage",
  },
  {
    src: "/images/WhatsApp_Image_2026-02-25_at_09.31.37__5_-ae9fabda-e11d-49a6-aff3-6b077b42b073.png",
    alt: "Double bedroom with central heating radiator",
  },
  {
    src: "/images/WhatsApp_Image_2026-02-25_at_09.31.37__4_-f00777ed-04c9-44d6-b6c0-f9c461dbe327.png",
    alt: "Twin bedroom with two single beds",
  },
  {
    src: "/images/WhatsApp_Image_2026-02-25_at_09.31.37__2_-6b65d079-c799-45cc-9929-84916f60273a.png",
    alt: "Bedroom with built-in wardrobe and dressing table",
  },
  {
    src: "/images/WhatsApp_Image_2026-02-25_at_09.31.37__3_-efd6d6c2-50ac-4fd6-a820-072a2cb8f171.png",
    alt: "Twin bedroom with wooden headboards",
  },
  {
    src: "/images/WhatsApp_Image_2026-02-25_at_09.31.37__6_-00446a64-f024-4c07-81bf-479db0e8ff32.png",
    alt: "Bathroom with shower cubicle and washbasin",
  },
  {
    src: "/images/WhatsApp_Image_2026-02-25_at_09.31.38__5_-387260f5-0bfa-4a4d-9265-75968d8d539b.png",
    alt: "Bathroom with toilet and towel radiator",
  },
  {
    src: "/images/WhatsApp_Image_2026-02-25_at_09.31.38-f2e089c8-84c4-4738-a427-fcac1525bdd3.png",
    alt: "Interior storage and cabinetry",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <header className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-coastal-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
        <div className="relative max-w-5xl mx-auto px-6 py-16 md:py-24">
          <p className="text-coastal-300 text-sm font-semibold uppercase tracking-widest mb-2">
            Private Caravan Sales · Newcastle, Co Down
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-4">
            2022 Willerby Kirkland
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-2xl">
            3-bedroom static caravan for sale · Sleeps up to 8 · Excellent
            condition
          </p>

          {/* Price & Savings */}
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-5 border border-white/20">
              <p className="text-sm text-coastal-200 uppercase tracking-wider mb-1">
                Asking Price
              </p>
              <p className="text-4xl md:text-5xl font-bold">£35,000</p>
            </div>
            <div className="bg-emerald-500/20 backdrop-blur-sm rounded-2xl px-6 py-4 border border-emerald-400/30">
              <p className="text-emerald-100 font-semibold text-lg">
                Save £15,000+ vs park prices
              </p>
              <p className="text-emerald-200/90 text-sm mt-1">
                Parks sell similar 2021 models for £48,000–£49,500. This is a
                massive savings buying privately.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Location & CTA */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="font-display text-2xl font-semibold text-slate-800 mb-2">
                Currently sited at Mourneview Caravan Park
              </h2>
              <p className="text-slate-600">
                Newcastle, County Down, Northern Ireland · Straightforward access
                for uplift
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-coastal-600 hover:bg-coastal-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors shadow-lg shadow-coastal-900/20"
            >
              Enquire Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl font-semibold text-slate-800 mb-2">
          Photo Gallery
        </h2>
        <p className="text-slate-600 mb-10">
          Click any image to view full size
        </p>
        <ImageGallery images={IMAGES} />
      </section>

      {/* Specs & Details */}
      <section className="bg-slate-100 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display text-3xl font-semibold text-slate-800 mb-10">
            Full Specification
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-semibold text-slate-800 text-lg mb-4">
                Key Details
              </h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex gap-3">
                  <span className="text-coastal-600 font-medium">•</span>
                  Manufacturer: Willerby
                </li>
                <li className="flex gap-3">
                  <span className="text-coastal-600 font-medium">•</span>
                  Model: Kirkland 2022 (same layout as Willerby Mistral)
                </li>
                <li className="flex gap-3">
                  <span className="text-coastal-600 font-medium">•</span>
                  Size: 35ft × 12ft
                </li>
                <li className="flex gap-3">
                  <span className="text-coastal-600 font-medium">•</span>
                  Bedrooms: 3 (sleeps up to 8)
                </li>
                <li className="flex gap-3">
                  <span className="text-coastal-600 font-medium">•</span>
                  Open-plan living layout
                </li>
                <li className="flex gap-3">
                  <span className="text-coastal-600 font-medium">•</span>
                  Double glazing throughout
                </li>
                <li className="flex gap-3">
                  <span className="text-coastal-600 font-medium">•</span>
                  Central heating
                </li>
                <li className="flex gap-3">
                  <span className="text-coastal-600 font-medium">•</span>
                  Galvanized chassis
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 text-lg mb-4">
                Condition & Sale
              </h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex gap-3">
                  <span className="text-emerald-600 font-medium">✓</span>
                  Excellent, clean condition
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-600 font-medium">✓</span>
                  Very light family use
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-600 font-medium">✓</span>
                  Interior and exterior clean and tidy
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-600 font-medium">✓</span>
                  Fully serviced and winterised
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-600 font-medium">✓</span>
                  Sited on pitch with straightforward access for uplift
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-600 font-medium">✓</span>
                  No outstanding finance or claims
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-600 font-medium">✓</span>
                  Happy to accept offers
                </li>
              </ul>
              <p className="mt-6 text-slate-500 text-sm">
                Note: De-siting and bringing the caravan across the road for
                collection is typically in the region of £800–£1,000 (to be
                confirmed). Sale is for the caravan itself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="bg-coastal-700 text-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl font-semibold mb-4">
            Interested? Get in touch
          </h2>
          <p className="text-coastal-100 mb-10 max-w-xl mx-auto">
            This 2022 Willerby Kirkland is a modern family holiday home in
            excellent condition. At £35,000 you&apos;re saving over £15,000
            compared to buying from a park.
          </p>
          <ContactForm />
        </div>
      </section>

      <footer className="bg-slate-800 text-slate-400 py-8">
        <div className="max-w-5xl mx-auto px-6 text-center text-sm">
          <p>
            Private Caravan Sales · Newcastle, Co Down · Northern Ireland
          </p>
        </div>
      </footer>
    </main>
  );
}
