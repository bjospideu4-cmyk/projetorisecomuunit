import React, { useEffect, useRef, useState } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { AspectRatio } from "@/components/ui/aspect-ratio"

const testimonials = [
  "https://assets.zyrosite.com/A1az6jRbQRIEyj59/01-t-Yg2457Xobqh14GnV.png",
  "https://assets.zyrosite.com/A1az6jRbQRIEyj59/02-t-AoP4NDQxREi2yzNe.png",
  "https://assets.zyrosite.com/A1az6jRbQRIEyj59/03-t-AGBzvqVEoGSqV8M1.png",
  "https://assets.zyrosite.com/A1az6jRbQRIEyj59/04-t-ALp2b8LZx3h0r24N.png",
  "https://assets.zyrosite.com/A1az6jRbQRIEyj59/06-t-dJoPNlODwwhzln5l.png",
  "https://assets.zyrosite.com/A1az6jRbQRIEyj59/08-t-mnl452EOJGF34ebk.png",
  "https://assets.zyrosite.com/A1az6jRbQRIEyj59/09-t-AMqDp2w39rS1OzWa.png",
]

function TestimonialSlide({ src, index }: { src: string; index: number }) {
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)

  return (
    <div className="relative overflow-hidden shadow-card" style={{ borderRadius: '32px' }}>
      <AspectRatio ratio={9 / 19.5} style={{ borderRadius: '32px' }}>
        {!loaded && (
          <div
            className="absolute inset-0 bg-gradient-glow/40 animate-pulse"
            style={{ borderRadius: '32px' }}
            aria-hidden
          />
        )}
        <img
          src={failed ? "/placeholder.svg" : src}
          alt={`Depoimento ${index + 1} (formato em pé)`}
          className="block w-full h-full object-contain bg-transparent"
          style={{ borderRadius: '32px' }}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => {
            setFailed(true)
            setLoaded(true)
          }}
        />
      </AspectRatio>
    </div>
  )
}

const MemoizedTestimonialSlide = React.memo(TestimonialSlide)

export function TestimonialsCarousel() {
  const [api, setApi] = useState<CarouselApi | undefined>(undefined)
  const autoplayRef = useRef<number | null>(null)

  const stop = () => {
    if (autoplayRef.current) {
      window.clearInterval(autoplayRef.current)
      autoplayRef.current = null
    }
  }

  const start = () => {
    if (!api) return
    stop()
    autoplayRef.current = window.setInterval(() => {
      api.scrollNext()
    }, 3000)
  }

  useEffect(() => {
    if (!api) return
    start()
    return stop
  }, [api])

  return (
    <div
      className="relative w-full max-w-[420px] mx-auto"
      onMouseEnter={stop}
      onMouseLeave={start}
      onTouchStart={stop}
      onTouchEnd={start}
    >
      <Carousel setApi={setApi} opts={{ loop: true, align: "center" }}>
      <CarouselContent className="ml-0" viewportClassName="rounded-[32px]">
        {testimonials.map((image, i) => (
          <CarouselItem key={i} className="pl-0">
            <MemoizedTestimonialSlide src={image} index={i} />
          </CarouselItem>
        ))}
      </CarouselContent>

      </Carousel>
    </div>
  )
}
