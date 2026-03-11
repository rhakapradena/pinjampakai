import { Metadata } from "next"
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

                  <div className="text-center mb-8 space-y-3">
                  <MessageSquare className="w-12 h-12 text-primary mx-auto" />
                
                  <h2 className="text-xl lg:text-2xl font-semibold">
                    Form Kritik & Saran
                  </h2>
                
                  <p className="text-muted-foreground">
                    Silakan isi formulir berikut untuk menyampaikan kritik dan saran Anda kepada kami.
                  </p>
                </div>
                
                <iframe
                  data-tally-src="https://tally.so/embed/5BkpK6?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                  loading="lazy"
                  width="100%"
                  height="600"
                  frameBorder="0"
                  title="Survei Kepuasan Layanan"
                  className="w-full rounded-lg border"
                />
                
                <Script src="https://tally.so/widgets/embed.js" strategy="lazyOnload" />

          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
