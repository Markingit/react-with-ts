import React, { useState, useEffect } from 'react'
// 自定义hook名必须以use开头
const useMousePosition = () => {
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
    return position
}

export default useMousePosition