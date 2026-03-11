import Image from "next/image"
import { Building2, CalendarCheck, ClipboardList, ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FacilityCard } from "@/components/facility-card"
import { Button } from "@/components/ui/button"

const facilities = [
  {
    title: "Gedung Pertemuan Umum (GPU)",
    description: "Gedung pertemuan berkapasitas besar untuk acara resmi, seminar, dan kegiatan masyarakat.",
    image: "/images/gedung-pertemuan-umum.jpg",
    href: "/gpu",
    capacity: "500+ orang",
    location: "Jl. Bukit Hibul Barat (Komp. Perkantoran)",
  },
  {
    title: "Aula Setda",
    description: "Aula multifungsi untuk rapat besar, upacara, dan berbagai kegiatan formal pemerintahan.",
    image: "/images/aula.jpg",
    href: "/aula",
    capacity: "100 orang",
    location: "Kantor Sekretariat Daerah Kab. Lamandau",
  },
  {
    title: "Ruang Rapat",
    description: "Ruang rapat eksekutif dengan fasilitas lengkap untuk pertemuan dan diskusi.",
    image: "/images/ruang-rapat.jpg",
    href: "/ruang-rapat",
    capacity: "20 orang",
    location: "Kantor Sekretariat Daerah Kab. Lamandau",
  },
]

const steps = [
  {
    icon: CalendarCheck,
    title: "Cek Ketersediaan",
    description: "Lihat jadwal ketersediaan fasilitas melalui kalender online yang terintegrasi.",
  },
  {
    icon: ClipboardList,
    title: "Ajukan Peminjaman",
    description: "Isi formulir pengajuan peminjaman dengan informasi acara yang akan diselenggarakan.",
  },
  {
    icon: Building2,
    title: "Konfirmasi & Gunakan",
    description: "Tunggu konfirmasi dari admin, lalu gunakan fasilitas sesuai jadwal yang disetujui.",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center">
          <Image
            src="/images/sekretariat-building.jpg"
            alt="Gedung Sekretariat Daerah Kabupaten Lamandau"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
          
          <div className="relative container mx-auto px-4 py-16 lg:py-24">
            <div className="max-w-2xl space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/20 backdrop-blur-sm text-card text-sm">
                <Building2 className="w-4 h-4" />
                <span>Pemerintah Kabupaten Lamandau</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-card leading-tight text-balance">
                Sistem Peminjaman Gedung Sekretariat Daerah Kabupaten Lamandau
              </h1>
              
              <p className="text-lg text-card/90 leading-relaxed">
                Layanan publik untuk mempermudah masyarakat dalam mengakses dan meminjam fasilitas 
                gedung milik Pemerintah Kabupaten Lamandau secara transparan dan efisien.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="#fasilitas">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    Lihat Fasilitas
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              
                <a href="#panduan">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-card/10 border-card/30 text-card hover:bg-card/20 hover:text-card"
                  >
                    Panduan Peminjaman
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="panduan" className="py-16 lg:py-24 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Cara Meminjam Fasilitas</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Proses peminjaman fasilitas gedung yang mudah dan transparan dalam tiga langkah sederhana.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="absolute top-8 left-1/2 w-full h-0.5 bg-border hidden md:block" 
                    style={{ display: index === steps.length - 1 ? 'none' : undefined }} 
                  />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Facilities */}
        <section id="fasilitas" className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Fasilitas Tersedia</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Pilih fasilitas yang sesuai dengan kebutuhan acara Anda. Setiap fasilitas dilengkapi 
                dengan peralatan modern dan staf pendukung.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {facilities.map((facility) => (
                <FacilityCard key={facility.href} {...facility} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Siap Mengajukan Peminjaman?
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Pilih fasilitas yang Anda butuhkan, cek ketersediaan jadwal, dan ajukan peminjaman 
              dengan mudah melalui sistem kami.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Mulai Sekarang
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
