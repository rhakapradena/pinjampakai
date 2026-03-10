import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Users, MapPin, Clock, CheckCircle2, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface FacilityPageProps {
  title: string
  description: string
  image: string
  capacity: string
  location: string
  calendarId: string
  bookingLink: string
  rules: string[]
  features: string[]
}

export function FacilityPage({ 
   title, 
  description, 
  image, 
  capacity, 
  location, 
  calendarId,
  bookingLink,
  rules,
  features
}: FacilityPageProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 lg:h-96">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="container mx-auto px-4 pb-8">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-card/80 hover:text-card transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Kembali ke Beranda</span>
            </Link>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-card">{title}</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="w-5 h-5 text-primary" />
                  Deskripsi Fasilitas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{description}</p>
              </CardContent>
            </Card>

            {/* Calendar */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Jadwal Ketersediaan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video w-full rounded-lg overflow-hidden border border-border">
                  <iframe
                    src={`https://calendar.google.com/calendar/embed?src=${calendarId}&ctz=Asia%2FJakarta&mode=MONTH`}
                    style={{ border: 0 }}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    scrolling="no"
                    title={`Jadwal ${title}`}
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  Kalender di atas menampilkan jadwal peminjaman yang telah dikonfirmasi. 
                  Silakan pilih tanggal yang masih tersedia untuk mengajukan peminjaman.
                </p>
              </CardContent>
            </Card>

            {/* Rules */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  Ketentuan Penggunaan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {rules.map((rule, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-medium flex items-center justify-center shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-muted-foreground">{rule}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info */}
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Informasi Fasilitas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                  <Users className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Kapasitas</p>
                    <p className="font-medium">{capacity}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Lokasi</p>
                    <p className="font-medium">{location}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-medium mb-3">Fasilitas Tersedia:</p>
                  <ul className="space-y-2">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href={bookingLink} target="_blank">
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground mt-4">
                Ajukan Peminjaman
                </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
