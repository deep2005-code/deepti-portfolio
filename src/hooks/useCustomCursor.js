import { useEffect, useRef, useState } from 'react';

const useCustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef(null);
  const ringRef = useRef(null);

  const handleMouseMove = (event) => {
    setCursorPosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`;
    }
    if (ringRef.current) {
      ringRef.current.style.transform = `translate(${cursorPosition.x - 28}px, ${cursorPosition.y - 28}px)`; // Centering the ring
    }
  }, [cursorPosition]);

  return { cursorRef, ringRef };
};

export default useCustomCursor;

// CSS styles to implement in the global stylesheet:
// .custom-cursor { 
//   position: fixed; 
//   width: 8px; 
//   height: 8px; 
//   background-color: white; 
//   border-radius: 50%; 
//   mix-blend-mode: difference; 
//   pointer-events: none; 
//   transition: transform 0.1s ease-in-out;
// }
// .custom-ring { 
//   position: fixed; 
//   width: 40px; 
//   height: 40px; 
//   border: 2px solid pink; 
//   border-radius: 50%; 
//   transform: scale(1);
//   transition: transform 0.13s ease-in-out;
//   pointer-events: none;
// }
// :hover .custom-ring {
//   transform: scale(1.4);
// }