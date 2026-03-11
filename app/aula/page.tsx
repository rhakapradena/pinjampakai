import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FacilityPage } from "@/components/facility-page"

export const metadata: Metadata = {
  title: "Aula Setda - Sekretariat Daerah Kabupaten Lamandau",
  description: "Informasi dan jadwal peminjaman Aula Setda Sekretariat Daerah Kabupaten Lamandau. Kapasitas 200 orang untuk berbagai kegiatan.",
}

const aulaData = {
  title: "Aula Setda",
  description: `Aula Setda Sekretariat Daerah Kabupaten Lamandau adalah ruangan multifungsi yang ideal untuk berbagai jenis kegiatan. Dengan desain yang elegan dan fasilitas lengkap, aula ini cocok untuk rapat besar, upacara, pelatihan, dan kegiatan formal pemerintahan.

Berlokasi di Komplek Perkantoran Sekretariat Daerah, aula ini menawarkan suasana yang nyaman dengan pencahayaan alami yang baik dan sistem pendingin udara modern. Kapasitas 200 orang membuatnya ideal untuk acara skala menengah.`,
  image: "/images/aula.jpg",
  capacity: "200 orang",
  location: "Komplek Perkantoran Setda",
  calendarId: "ab970a44f510b2700d3c2154c54c60f5861a9ba4ee2e35913efe2b9a1680b028@group.calendar.google.com",
  bookingLink: "https://docs.google.com/forms/d/e/1FAIpQLSdQLyAp7Rc4sO2Q6qxJtVhRE27Oj1QkAYu62BynlmQBMZqefw/viewform",
  rules: [
    "Pengajuan peminjaman minimal 5 hari kerja sebelum acara berlangsung.",
    "Peminjam wajib mengisi formulir permohonan peminjaman yang tersedia.",
    "Penggunaan aula maksimal hingga pukul 21.00 WIB.",
    "Peminjam bertanggung jawab atas penataan ruangan sesuai kebutuhan.",
    "Konsumsi hanya diperbolehkan di area yang ditentukan.",
    "Menjaga ketertiban dan tidak mengganggu aktivitas kantor.",
  ],
  features: [
    "Sound System",
    "Proyektor & Videtron",
    "AC Split",
    "WiFi Gratis",
    "Meja & Kursi Formal",
    "Podium",
    "Toilet Bersih",
  ],
}

export default function AulaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <FacilityPage {...aulaData} />
      </main>
      <Footer />
    </div>
  )
}
