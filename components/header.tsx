"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, Building2, Users, Presentation, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { href: "/gpu", label: "GPU", icon: Building2, description: "Gedung Pertemuan Umum" },
  { href: "/aula", label: "Aula", icon: Users, description: "Aula Setda" },
  { href: "/ruang-rapat", label: "Ruang Rapat", icon: Presentation, description: "Ruang Rapat" },
  { href: "/kontak", label: "Kontak Terkait", icon: Phone, description: "Informasi & Pemesanan" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo-lamandau.png"
              alt="Logo Kabupaten Lamandau"
              width={48}
              height={48}
              className="w-10 h-10 lg:w-12 lg:h-12 object-contain"
            />
            <div className="hidden sm:block">
              <p className="text-sm lg:text-base font-semibold text-foreground leading-tight">Sekretariat Daerah</p>
              <p className="text-xs lg:text-sm text-muted-foreground">Kabupaten Lamandau</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-foreground/80 hover:text-foreground hover:bg-muted transition-colors"
              >
                <item.icon className="w-4 h-4" />
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-foreground/80 hover:text-foreground hover:bg-muted transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <item.icon className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">{item.label}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
