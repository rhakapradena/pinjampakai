import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FacilityPage } from "@/components/facility-page"

export const metadata: Metadata = {
  title: "Ruang Rapat - Sekretariat Daerah Kabupaten Lamandau",
  description: "Informasi dan jadwal peminjaman Ruang Rapat Sekretariat Daerah Kabupaten Lamandau. Kapasitas 30 orang untuk pertemuan dan diskusi.",
}

const ruangRapatData = {
  title: "Ruang Rapat",
  description: `Ruang Rapat Sekretariat Daerah Kabupaten Lamandau adalah fasilitas eksklusif yang dirancang untuk pertemuan tingkat tinggi, diskusi kelompok, dan koordinasi antar instansi. Ruangan ini menawarkan suasana profesional yang kondusif untuk pengambilan keputusan.

Dilengkapi dengan meja rapat oval, kursi, dan peralatan presentasi modern, ruang rapat ini menjadi pilihan utama untuk kegiatan yang membutuhkan privasi dan fokus tinggi. Kapasitas 30 orang membuatnya ideal untuk rapat terbatas dan FGD (Focus Group Discussion).`,
  image: "/images/ruang-rapat.jpg",
  capacity: "30 orang",
  location: "Kantor Sekretariat Daerah Kab. Lamandau",
  calendarId: "b53f04fdef69011abbc8c2d84b29cf923e679f4fbae2f5cb2ee4b08a482b5541@group.calendar.google.com",
  bookingLink: "https://docs.google.com/forms/d/e/1FAIpQLSeLDUw250h4YIq2cc1xIhLas4nmmYp-B3m-EyBgEBJ8auFZnQ/viewform",
  rules: [
    "Prioritas penggunaan untuk kegiatan kedinasan Pemerintah Kabupaten Lamandau.",
    "Penggunaan ruang rapat maksimal hingga pukul 17.00 WIB (hari kerja).",
    "Peminjam wajib menjaga kebersihan dan kerapian ruangan.",
    "Dilarang merokok di dalam ruangan.",
    "Peralatan elektronik harus dimatikan setelah selesai digunakan.",
  ],
  features: [
    "Meja Rapat Oval",
    "Kursi 30 unit",
    "Videotron",
    "Video Conference System",
    "AC Split",
    "WiFi High-Speed",
    "Dispenser Air Minum",
  ],
}

export default function RuangRapatPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <FacilityPage {...ruangRapatData} />
      </main>
      <Footer />
    </div>
  )
}
