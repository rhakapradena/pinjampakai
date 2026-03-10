import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FacilityPage } from "@/components/facility-page"

export const metadata: Metadata = {
  title: "Gedung Pertemuan Umum (GPU) - Sekretariat Daerah Kabupaten Lamandau",
  description: "Informasi dan jadwal peminjaman Gedung Pertemuan Umum (GPU) Sekretariat Daerah Kabupaten Lamandau. Kapasitas 500 orang untuk acara besar.",
}

const gpuData = {
  title: "Gedung Pertemuan Umum (GPU)",
  description: `Gedung Pertemuan Umum (GPU) adalah fasilitas terbesar milik Sekretariat Daerah Kabupaten Lamandau yang dirancang khusus untuk menampung acara-acara berskala besar. Gedung ini sering digunakan untuk seminar nasional, konferensi, resepsi pernikahan, dan berbagai acara kemasyarakatan lainnya.

Dengan kapasitas hingga 500 orang, GPU dilengkapi dengan sistem tata suara profesional, pencahayaan modern, AC sentral, dan akses yang mudah dijangkau. Area parkir yang luas tersedia untuk kenyamanan para tamu undangan.`,
  image: "/images/gedung-pertemuan-umum.jpg",
  capacity: "500 orang",
  location: "Komplek Perkantoran Setda",
  calendarId: "https://calendar.google.com/calendar/embed?src=7b58bbe0c83c7a700ecc2edcd4387baaab56bb0f130ae64696d498e2b4d0c48e%40group.calendar.google.com&ctz=Asia%2FJakarta"
  bookingLink: "https://docs.google.com/forms/d/e/1FAIpQLSf2Z_1oMvfOACsbShVWk0SCQmxGte9n-XG-y7fS2PuXS4AsyA/viewform",
  rules: [
    "Pengajuan peminjaman minimal 7 hari kerja sebelum acara berlangsung.",
    "Peminjam wajib menyerahkan proposal kegiatan yang akan diselenggarakan.",
    "Penggunaan gedung maksimal hingga pukul 22.00 WIB.",
    "Peminjam bertanggung jawab atas kebersihan dan keamanan selama acara.",
    "Dilarang membawa minuman keras dan melakukan kegiatan yang melanggar hukum.",
    "Kerusakan fasilitas menjadi tanggung jawab peminjam.",
  ],
  features: [
    "Sound System Profesional",
    "Proyektor & Layar",
    "AC Sentral",
    "WiFi Gratis",
    "Panggung & Podium",
    "Kursi Lipat 500 unit",
    "Ruang Ganti / Persiapan",
    "Area Parkir Luas",
  ],
}

export default function GPUPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <FacilityPage {...gpuData} />
      </main>
      <Footer />
    </div>
  )
}
