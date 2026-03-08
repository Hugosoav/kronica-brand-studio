import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedTextProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  splitBy?: "words" | "chars";
}

const AnimatedText = ({
  children,
  className = "",
  as: Tag = "p",
  delay = 0,
  splitBy = "words",
}: AnimatedTextProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const lines = children.split("\n");

  let wordIndex = 0;

  return (
    <Tag ref={ref} className={className}>
      {lines.map((line, lineIdx) => {
        const words = splitBy === "words" ? line.split(" ") : line.split("");
        const lineElements = words.map((unit, i) => {
          const currentIndex = wordIndex++;
          return (
            <motion.span
              key={`${lineIdx}-${i}`}
              className="inline-block"
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, filter: "blur(0px)" }
                  : { opacity: 0, y: 20, filter: "blur(4px)" }
              }
              transition={{
                duration: 0.5,
                delay: delay + currentIndex * (splitBy === "words" ? 0.08 : 0.03),
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              {unit}
              {splitBy === "words" && i < words.length - 1 ? "\u00A0" : ""}
            </motion.span>
          );
        });
        return (
          <span key={lineIdx}>
            {lineElements}
            {lineIdx < lines.length - 1 && <br />}
          </span>
        );
      })}
    </Tag>
  );
};

export default AnimatedText;
