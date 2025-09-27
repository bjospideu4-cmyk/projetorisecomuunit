import React, { useState, useCallback } from 'react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { cn } from '@/lib/utils'

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  placeholder?: string
  wrapperClassName?: string
  priority?: boolean
}

export function LazyImage({ 
  src, 
  alt, 
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PC9zdmc+',
  className,
  wrapperClassName,
  priority = false,
  ...props 
}: LazyImageProps) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '200px',
    triggerOnce: true
  })

  const handleLoad = useCallback(() => {
    setLoaded(true)
  }, [])

  const handleError = useCallback(() => {
    setError(true)
    setLoaded(true)
  }, [])

  const shouldLoad = priority || isIntersecting

  return (
    <div 
      ref={elementRef}
      className={cn("relative overflow-hidden", wrapperClassName)}
    >
      {!loaded && shouldLoad && (
        <div className="absolute inset-0 bg-gradient-glow/20 animate-pulse rounded-lg" />
      )}
      
      {shouldLoad && (
        <img
          src={error ? placeholder : src}
          alt={alt}
          className={cn(
            "transition-opacity duration-300",
            loaded ? "opacity-100" : "opacity-0",
            className
          )}
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : undefined}
          decoding="async"
          {...props}
        />
      )}
    </div>
  )
}