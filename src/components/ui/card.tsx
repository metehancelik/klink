import { motion, useInView, HTMLMotionProps } from "framer-motion";
import * as React from "react";

import { cn } from "@/lib/utils";

function Card({ className, ...props }: HTMLMotionProps<"div">) {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, {
    once: false,
    margin: "-10% 0px -10% 0px",
  });

  return (
    <motion.div
      ref={cardRef}
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm transition-all duration-300",
        className
      )}
      initial={{ opacity: 0.7, y: 20 }}
      animate={{
        opacity: isInView ? 1 : 0.7,
        y: isInView ? 0 : 20,
        scale: isInView ? 1.02 : 1,
        boxShadow: isInView ? "0px 5px 20px rgba(156, 120, 237, 0.3)" : "none",
      }}
      transition={{ duration: 0.4 }}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-[data-slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};
