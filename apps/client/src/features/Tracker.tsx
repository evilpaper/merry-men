import { useEffect, useState } from "react"
import { Cursor } from "./Cursor";

export function Tracker() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    function handleMove(event: MouseEvent | TouchEvent) {

      const source = 'touches' in event ? event.touches[0] : event

      // event.touches is a TouchList. It can be empty. Possible reasons:
      // - Touch events other than touchmove
      // - Rare touchmove cases
      // - TypeScript’s view of the world
      if (!source) return

      setMousePos({ x: source.clientX, y: source.clientY });
      console.log(`X:${source.clientX}, Y:${source.clientY}`)
    }

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('touchmove', handleMove)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('touchmove', handleMove)
    }
  }, [])
  
    return <Cursor  x={mousePos.x} y={mousePos.y} id="Robin Hood" />
  }