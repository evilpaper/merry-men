import { useEffect } from "react"

export function Tracker() {
  useEffect(() => {
    function handleMove(event: MouseEvent | TouchEvent) {

      const source = 'touches' in event ? event.touches[0] : event

      // event.touches is a TouchList. It can be empty. Possible reasons:
      // - Touch events other than touchmove
      // - Rare touchmove cases
      // - TypeScript’s view of the world
      if (!source) return

      console.log(`X:${source.clientX}, Y:${source.clientY}`)
    }

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('touchmove', handleMove)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('touchmove', handleMove)
    }
  }, [])
  
    return null
  }