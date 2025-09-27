import React, { useEffect, useRef, useState, useCallback } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { LazyImage } from "@/components/ui/lazy-image"
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver"

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
  return (
    <div className="relative overflow-hidden shadow-card rounded-[32px] will-change-transform">
      <AspectRatio ratio={9 / 19.5} className="rounded-[32px]">
        <LazyImage
          src={src}
          alt={`Depoimento ${index + 1} (formato em pé)`}
          className="block w-full h-full object-contain bg-transparent rounded-[32px] transform-gpu"
          wrapperClassName="w-full h-full rounded-[32px]"
          priority={index < 2}
        />
      </AspectRatio>
    </div>
  )
}

const MemoizedTestimonialSlide = React.memo(TestimonialSlide)

export function TestimonialsCarousel() {
  const [api, setApi] = useState<CarouselApi | undefined>(undefined)
  const autoplayRef = useRef<number | null>(null)
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.3,
    rootMargin: '100px',
    triggerOnce: false
  })

  const stop = useCallback(() => {
    if (autoplayRef.current) {
      window.clearInterval(autoplayRef.current)
      autoplayRef.current = null
    }
  }, [])

  const start = useCallback(() => {
    if (!api || !isIntersecting) return
    stop()
    autoplayRef.current = window.setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext()
      } else {
        api.scrollTo(0)
      }
    }, 4000)
  }, [api, stop, isIntersecting])

  useEffect(() => {
    if (!api) return
    if (isIntersecting) {
      start()
    } else {
      stop()
    }
    return stop
  }, [api, start, stop, isIntersecting])

  return (
    <div
      ref={elementRef}
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
