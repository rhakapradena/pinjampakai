import { Building2, MapPin, Phone, Mail } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold">Sekretariat Daerah</p>
                <p className="text-sm text-primary-foreground/80">Kabupaten Lamandau</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Sistem Peminjaman Gedung merupakan layanan publik untuk memudahkan masyarakat dalam mengakses 
              fasilitas gedung milik Pemerintah Kabupaten Lamandau.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Fasilitas</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/gpu" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Gedung Pertemuan Umum (GPU)
                </Link>
              </li>
              <li>
                <Link href="/aula" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Aula Setda
                </Link>
              </li>
              <li>
                <Link href="/ruang-rapat" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Ruang Rapat
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Kontak Terkait
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Kontak</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span className="text-primary-foreground/80">
                  Jl. Bukit Hibul Barat, Nanga Bulik, Kec. Bulik, Kabupaten Lamandau, Kalimantan Tengah 74161
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 shrink-0" />
                <span className="text-primary-foreground/80">(0532) 123456</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 shrink-0" />
                <span className="text-primary-foreground/80">setda@lamandaukab.go.id</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Pemerintah Kabupaten Lamandau. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}
