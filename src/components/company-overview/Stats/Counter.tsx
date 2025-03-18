import {
  motion,
  useMotionValue,
  animate,
  useMotionValueEvent,
} from "framer-motion";
import { useEffect, useState } from "react";

import { parseStatValue, getValueSuffix } from "@/helpers";

interface CounterAnimationProps {
  value: string;
  type: "value" | "label";
}

export const CounterAnimation: React.FC<CounterAnimationProps> = ({
  value,
  type,
}) => {
  const targetValue = parseStatValue(value);
  const suffix = getValueSuffix(value);
  const count = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useMotionValueEvent(count, "change", (latest) => {
    setDisplayValue(Math.round(latest));
  });

  useEffect(() => {
    if (!isMounted) return;

    const animation = animate(count, targetValue, {
      duration: 2,
      ease: "easeOut",
    });

    return animation.stop;
  }, [count, targetValue, isMounted]);

  if (!isMounted) {
    return (
      <>
        {type === "value" ? (
          <h3 className="text-6xl font-normal text-[#0B1133] tracking-tight whitespace-nowrap">
            {0 + suffix}
          </h3>
        ) : (
          <p className="text-xl text-[#9583FF] text-center">{0}</p>
        )}
      </>
    );
  }

  return (
    <>
      {type === "value" ? (
        <motion.h3 className="text-6xl font-normal text-[#0B1133] tracking-tight whitespace-nowrap">
          {displayValue + suffix}
        </motion.h3>
      ) : (
        <motion.p className="text-xl text-[#9583FF] text-center">
          {displayValue}
        </motion.p>
      )}
    </>
  );
};
