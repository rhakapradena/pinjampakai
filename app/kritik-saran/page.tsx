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

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-12 lg:py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-2xl lg:text-4xl font-bold text-primary-foreground mb-4 text-balance">
              Kritik & Saran
            </h1>
            <p className="text-primary-foreground/90 max-w-2xl mx-auto text-pretty">
              Kami sangat menghargai masukan Anda untuk meningkatkan kualitas
              pelayanan fasilitas Sekretariat Daerah Kabupaten Lamandau.
            </p>
          </div>
        </section>

        {/* Tally Form Section */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-8 space-y-3">
              <MessageSquare className="w-12 h-12 text-primary mx-auto" />
              <h2 className="text-xl lg:text-2xl font-semibold">
                Form Kritik & Saran
              </h2>
              <p className="text-muted-foreground">
                Silakan isi formulir berikut untuk menyampaikan kritik dan
                saran Anda kepada kami.
              </p>
            </div>

            <iframe
              data-tally-src="https://tally.so/embed/5BkpK6?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="600"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Kritik dan Saran"
            ></iframe>

            <script
              dangerouslySetInnerHTML={{
                __html: `
                var d=document,w="https://tally.so/widgets/embed.js",v=function(){
                if(typeof Tally!=="undefined"){Tally.loadEmbeds();}
                else{d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach(function(e){
                e.src=e.dataset.tallySrc})}};
                if(typeof Tally!=="undefined"){v();}
                else if(d.querySelector('script[src="'+w+'"]')==null){
                var s=d.createElement("script");
                s.src=w;s.onload=v;s.onerror=v;
                d.body.appendChild(s);}
                `,
              }}
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
