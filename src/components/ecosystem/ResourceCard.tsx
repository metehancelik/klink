import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function ResourceCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, {
    once: false,
    margin: "-10% 0px -10% 0px",
  });

  return (
    <motion.div
      ref={cardRef}
      className={className}
      initial={{ opacity: 0.7, y: 30 }}
      animate={{
        opacity: isInView ? 1 : 0.7,
        y: isInView ? 0 : 30,
        boxShadow: isInView
          ? "0px 0px 20px 0px rgba(156, 120, 237, 0.2)"
          : "0px 0px 10px 0px rgba(255, 255, 255, 0.1)",
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
