import { Badge } from "../ui/badge";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function EcosystemCard({
  card,
  index,
}: {
  card: {
    title: string;
    description: string;
  };
  index: number;
}) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, {
    once: false,
    margin: "-5% 0px -5% 0px",
  });

  return (
    <motion.div
      ref={cardRef}
      className={`flex gap-2 hover:bg-[#9C78ED33] transition-all duration-300 px-5 py-[14px] rounded-2xl items-center ${
        index != 0 && "opacity-30"
      }`}
      initial={{ opacity: 0.5, x: -20 }}
      animate={{
        opacity: isInView ? (index != 0 ? 0.7 : 1) : 0.5,
        x: isInView ? 0 : -20,
        backgroundColor: isInView
          ? index === 0
            ? "rgba(156, 120, 237, 0.2)"
            : "transparent"
          : "transparent",
      }}
      whileHover={{
        backgroundColor: "rgba(156, 120, 237, 0.2)",
        opacity: 1,
        transition: { duration: 0.2 },
      }}
      transition={{ duration: 0.4 }}
    >
      <Badge
        variant="outline"
        className="text-[#9C78ED] p-3 rounded-lg border-none bg-white/5 lg:text-3xl font-bold md:text-xl text-sm"
      >
        {"0" + (index + 1)}
      </Badge>
      <div>
        <p className="text-white lg:text-xl font-semibold md:text-lg text-sm">
          {card.title}
        </p>
        <p className="opacity-60 font-medium text-sm lg:text-base">
          {card.description}
        </p>
      </div>
      <Badge
        variant="outline"
        className="text-[#9C78ED] ml-auto p-3 rounded-lg border-none bg-white/5 font-bold lg:text-md md:text-sm text-[9.5px]"
        {...(index == 0 && {
          style: {
            background:
              "linear-gradient(106.18deg, #FFE0D3 17.5%, #FFCBFF 73.21%)",
            color: "#0F0F0F",
          },
        })}
      >
        {index == 0 ? "Live" : "Beta"}
      </Badge>
    </motion.div>
  );
}
