
import React, { useState, useEffect } from 'react'

const MouseTracker: React.FC = () => {
    const [ position, setPosition ] = useState({x: 0, y:0})
    useEffect(() => {
        console.log('add')
        const updateMouse = (e: MouseEvent) => {
            console.log('inner')
            setPosition({x: e.clientX, y: e.clientY})
        }

        document.addEventListener('click', updateMouse)

        return () => {
            console.log('remove')
            document.removeEventListener('click', updateMouse)
        }
    }, [])
    return (
        <p>
            X: { position.x }, Y: { position.y }
        </p>
    )
}

export default MouseTracker