import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CursorDot = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
    };
  }, []);

  return (
    <>
      {/* Outer glow */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full bg-primary/20 blur-md"
        style={{ width: 40, height: 40 }}
        animate={{ x: pos.x - 20, y: pos.y - 20, opacity: visible ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.5 }}
      />
      {/* Inner dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full bg-primary"
        style={{ width: 8, height: 8 }}
        animate={{ x: pos.x - 4, y: pos.y - 4, opacity: visible ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 25, mass: 0.3 }}
      />
    </>
  );
};

export default CursorDot;
