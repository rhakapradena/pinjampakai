import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, Phone, Building2, Music, Users, CalendarCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "Kontak Terkait - Sekretariat Daerah Kabupaten Lamandau",
  description: "Informasi kontak untuk jadwal dan pemesanan fasilitas gedung Sekretariat Daerah Kabupaten Lamandau.",
}

const contacts = [
  {
    title: "Informasi Jadwal & Pemesanan",
    description: "Hubungi untuk informasi umum jadwal dan pemesanan seluruh fasilitas gedung",
    buttonText: "Hubungi via WhatsApp",
    link: "https://wa.me/6281352818058",
    icon: CalendarCheck,
  },
  {
    title: "Pengelola GPU",
    description: "Hubungi untuk pemesanan dan informasi Gedung Pertemuan Umum",
    buttonText: "Hubungi Pengelola GPU",
    link: "https://wa.me/6281251238065",
    icon: Building2,
  },
  {
    title: "Administrasi Aula",
    description: "Hubungi untuk keperluan administrasi peminjaman Aula Setda",
    buttonText: "Hubungi Administrasi Aula",
    link: "https://wa.me/6282254273988",
    icon: Phone,
  },
  {
    title: "Pengelola Aula",
    description: "Hubungi untuk koordinasi teknis dan operasional Aula Setda",
    buttonText: "Hubungi Pengelola Aula",
    link: "https://wa.me/6285387698333",
    icon: Users,
  },
  {
    title: "Sound System",
    description: "Hubungi untuk kebutuhan sound system dan peralatan audio",
    buttonText: "Hubungi Sound System",
    link: "https://wa.me/6285387698333",
    icon: Music,
  },
  {
    title: "Pengelola Ruang Rapat",
    description: "Hubungi untuk pemesanan dan informasi Ruang Rapat",
    buttonText: "Hubungi Pengelola Ruang Rapat",
    link: "https://wa.me/6285249090536",
    icon: Building2,
  },
]

export default function KontakPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-12 lg:py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-2xl lg:text-4xl font-bold text-primary-foreground mb-4 text-balance">
              Kontak Terkait – Informasi & Pemesanan
            </h1>
            <p className="text-primary-foreground/90 max-w-2xl mx-auto text-pretty">
              Silakan hubungi kontak berikut untuk informasi jadwal dan pemesanan fasilitas 
              Sekretariat Daerah Kabupaten Lamandau.
            </p>
          </div>
        </section>

        {/* Contact Cards Section */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-xl lg:text-2xl font-semibold text-foreground text-center mb-8">
              Kontak Informasi Jadwal dan Pemesanan Gedung
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {contacts.map((contact, index) => (
                <Card key={index} className="bg-card border-border shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                        <contact.icon className="w-7 h-7 text-primary" />
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="font-semibold text-lg text-foreground">
                          {contact.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {contact.description}
                        </p>
                      </div>
                      
                      <Button 
                        asChild
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                      >
                        <a 
                          href={contact.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <MessageCircle className="w-4 h-4" />
                          {contact.buttonText}
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="py-12 bg-muted/50">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto space-y-4">
              <MessageCircle className="w-12 h-12 text-primary mx-auto" />
              <h3 className="text-lg font-semibold text-foreground">
                Butuh Bantuan Lebih Lanjut?
              </h3>
              <p className="text-muted-foreground text-pretty">
                Jika Anda memiliki pertanyaan lebih lanjut atau membutuhkan bantuan khusus, 
                silakan hubungi kontak Informasi Jadwal & Pemesanan untuk panduan lengkap.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
