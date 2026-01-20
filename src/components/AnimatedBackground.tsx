import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Primary blob with color animation */}
      <motion.div
        className="absolute -top-1/2 -left-1/4 w-[80%] h-[80%] rounded-full blur-3xl"
        animate={{
          x: [0, 100, 50, 0],
          y: [0, 50, 100, 0],
          scale: [1, 1.2, 0.95, 1],
          opacity: [0.15, 0.25, 0.2, 0.15],
          background: [
            "radial-gradient(circle, hsl(240 5% 50% / 0.15) 0%, transparent 70%)",
            "radial-gradient(circle, hsl(220 10% 45% / 0.2) 0%, transparent 70%)",
            "radial-gradient(circle, hsl(200 8% 55% / 0.18) 0%, transparent 70%)",
            "radial-gradient(circle, hsl(240 5% 50% / 0.15) 0%, transparent 70%)",
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Secondary blob with opposite movement */}
      <motion.div
        className="absolute -bottom-1/4 -right-1/4 w-[70%] h-[70%] rounded-full blur-3xl"
        animate={{
          x: [0, -80, -40, 0],
          y: [0, -60, -100, 0],
          scale: [1, 0.9, 1.1, 1],
          opacity: [0.12, 0.2, 0.15, 0.12],
          background: [
            "radial-gradient(circle, hsl(210 8% 40% / 0.12) 0%, transparent 70%)",
            "radial-gradient(circle, hsl(230 6% 50% / 0.18) 0%, transparent 70%)",
            "radial-gradient(circle, hsl(250 5% 45% / 0.15) 0%, transparent 70%)",
            "radial-gradient(circle, hsl(210 8% 40% / 0.12) 0%, transparent 70%)",
          ],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      
      {/* Tertiary accent blob */}
      <motion.div
        className="absolute top-1/3 left-1/3 w-[50%] h-[50%] rounded-full blur-3xl"
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -40, 60, 0],
          scale: [1, 1.15, 0.85, 1],
          opacity: [0.1, 0.18, 0.12, 0.1],
          background: [
            "radial-gradient(circle, hsl(220 12% 35% / 0.1) 0%, transparent 60%)",
            "radial-gradient(circle, hsl(200 15% 45% / 0.16) 0%, transparent 60%)",
            "radial-gradient(circle, hsl(240 10% 40% / 0.14) 0%, transparent 60%)",
            "radial-gradient(circle, hsl(220 12% 35% / 0.1) 0%, transparent 60%)",
          ],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />

      {/* Small floating orb */}
      <motion.div
        className="absolute top-1/4 right-1/3 w-32 h-32 rounded-full blur-2xl"
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 40, 0],
          opacity: [0.2, 0.35, 0.25, 0.2],
          background: [
            "radial-gradient(circle, hsl(215 15% 50% / 0.25) 0%, transparent 70%)",
            "radial-gradient(circle, hsl(235 12% 55% / 0.35) 0%, transparent 70%)",
            "radial-gradient(circle, hsl(205 10% 48% / 0.3) 0%, transparent 70%)",
            "radial-gradient(circle, hsl(215 15% 50% / 0.25) 0%, transparent 70%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  );
}