import React from 'react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { cn } from '@/lib/utils'

interface LazySectionProps {
  children: React.ReactNode
  className?: string
  fallback?: React.ReactNode
  rootMargin?: string
}

export function LazySection({ 
  children, 
  className,
  fallback,
  rootMargin = '1200px'
}: LazySectionProps) {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.01,
    rootMargin,
    triggerOnce: true
  })

  return (
    <div ref={elementRef} className={cn("min-h-[200px]", className)}>
      {isIntersecting ? children : (fallback || <div className="w-full h-48 bg-gradient-glow/10 animate-pulse rounded-lg" />)}
    </div>
  )
}