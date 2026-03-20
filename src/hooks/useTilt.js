import { useEffect, useRef } from 'react';

const useTilt = () => {
    const tiltRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (tiltRef.current) {
                const { clientWidth, clientHeight } = tiltRef.current;
                const { left, top } = tiltRef.current.getBoundingClientRect();
                const x = ((e.clientX - left) / clientWidth - 0.5) * 2; // range from -1 to 1
                const y = ((e.clientY - top) / clientHeight - 0.5) * 2; // range from -1 to 1
                const rotateY = -3 + x * 10; // adjust -3 to your desired default angle
                const rotateX = y * -10; 
                tiltRef.current.style.transform = `perspective(900px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
            }
        };

        const handleMouseLeave = () => {
            if (tiltRef.current) {
                tiltRef.current.style.transform = 'perspective(900px) rotateY(-3deg) rotateX(0deg)';
            }
        };

        if (tiltRef.current) {
            tiltRef.current.addEventListener('mousemove', handleMouseMove);
            tiltRef.current.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            if (tiltRef.current) {
                tiltRef.current.removeEventListener('mousemove', handleMouseMove);
                tiltRef.current.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, []);

    return tiltRef;
};

export default useTilt;
