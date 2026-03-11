import { Metadata } from "next"
import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MessageSquare } from "lucide-react"

export const metadata: Metadata = {
  title: "Kritik & Saran - Sekretariat Daerah Kabupaten Lamandau",
  description:
    "Sampaikan kritik dan saran Anda untuk peningkatan pelayanan fasilitas Sekretariat Daerah Kabupaten Lamandau.",
}

export default function KritikSaranPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">

        {/* Hero Section */}
        <section className="bg-primary py-12 lg:py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-2xl lg:text-4xl font-bold text-primary-foreground mb-4">
              Kritik & Saran
            </h1>

            <p className="text-primary-foreground/90 max-w-2xl mx-auto">
              Kami sangat menghargai masukan Anda untuk meningkatkan kualitas
              pelayanan fasilitas Sekretariat Daerah Kabupaten Lamandau.
            </p>
          </div>
        </section>

            <iframe
              data-tally-src="https://tally.so/embed/5BkpK6?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="600"
              frameBorder="0"
              title="Survei Kepuasan Layanan"
              className="w-full rounded-lg border"
            />

          </div>
        </section>

      </main>

      <Footer />

      {/* Script Tally */}
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="lazyOnload"
      />
    </div>
  )
}
