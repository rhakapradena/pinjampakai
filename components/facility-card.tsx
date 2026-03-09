import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Users, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface FacilityCardProps {
  title: string
  description: string
  image: string
  href: string
  capacity: string
  location: string
}

export function FacilityCard({ title, description, image, href, capacity, location }: FacilityCardProps) {
  return (
    <Card className="group overflow-hidden border-border hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-lg font-semibold text-card">{title}</h3>
        </div>
      </div>
      <CardContent className="p-5 space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{description}</p>
        
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Users className="w-4 h-4 text-primary" />
            <span>{capacity}</span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <MapPin className="w-4 h-4 text-primary" />
            <span>{location}</span>
          </div>
        </div>

        <Button asChild className="w-full bg-primary hover:bg-primary/90">
          <Link href={href} className="flex items-center justify-center gap-2">
            Lihat Detail
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
