"use client";
import { useEffect, useRef, useState } from "react";
import { FaHandPointer } from "react-icons/fa";

interface Square {
  id: number;
  x: number;
  y: number;
}

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const current = useRef({ x: -100, y: -100 });
  const raf = useRef<number>(0);
  const lastSpawn = useRef({ x: -100, y: -100 });
  const counter = useRef(0);

  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [squares, setSquares] = useState<Square[]>([]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      setVisible(true);

      const dx = e.clientX - lastSpawn.current.x;
      const dy = e.clientY - lastSpawn.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > 18) {
        lastSpawn.current = { x: e.clientX, y: e.clientY };
        const id = counter.current++;
        setSquares(prev => [...prev.slice(-14), { id, x: e.clientX, y: e.clientY }]);
        setTimeout(() => setSquares(prev => prev.filter(s => s.id !== id)), 600);
      }
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);
    const onEnterEl = () => setHovered(true);
    const onLeaveEl = () => setHovered(false);

    const loop = () => {
      current.current.x += (pos.current.x - current.current.x) * 0.15;
      current.current.y += (pos.current.y - current.current.y) * 0.15;
      if (cursorRef.current) {
        cursorRef.current.style.left = `${current.current.x}px`;
        cursorRef.current.style.top = `${current.current.y}px`;
      }
      raf.current = requestAnimationFrame(loop);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    const els = document.querySelectorAll("a, button, [role='button'], input, textarea, select, label");
    els.forEach(el => {
      el.addEventListener("mouseenter", onEnterEl);
      el.addEventListener("mouseleave", onLeaveEl);
    });

    raf.current = requestAnimationFrame(loop);
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      els.forEach(el => {
        el.removeEventListener("mouseenter", onEnterEl);
        el.removeEventListener("mouseleave", onLeaveEl);
      });
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      {/* Trailing squares */}
      {squares.map((sq, i) => {
        const size = 6 + (i % 3) * 2;
        return (
          <div
            key={sq.id}
            className="pointer-events-none fixed z-[9998] animate-cursor-square"
            style={{
              left: sq.x,
              top: sq.y,
              width: size,
              height: size,
              transform: `translate(-50%, -50%) rotate(${45 + i * 15}deg)`,
              background: `linear-gradient(135deg, #60a5fa, #a78bfa)`,
              borderRadius: "2px",
              opacity: 0,
            }}
          />
        );
      })}

      {/* Main cursor */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed z-[9999]"
        style={{
          transform: `translate(-4px, -2px) scale(${hovered ? 1.3 : 1})`,
          opacity: visible ? 1 : 0,
          transition: "transform 0.15s ease, opacity 0.2s ease",
        }}
      >
        <FaHandPointer
          size={26}
          style={{
            filter: "drop-shadow(0 0 6px rgba(96,165,250,0.7)) drop-shadow(0 0 12px rgba(167,139,250,0.4))",
            color: "white",
          }}
        />
      </div>
    </>
  );
}
