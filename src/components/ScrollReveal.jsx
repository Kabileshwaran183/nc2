import React, { useEffect, useRef, useState } from "react";

/**
 * ScrollReveal
 * Lightweight, dependency-free scroll animation wrapper built on the
 * Intersection Observer API. Animates children in once when they enter
 * the viewport, then stops observing (no repeat-replay on scroll).
 *
 * Props:
 *  - variant: "fade-up" | "fade-in" | "left" | "right" | "scale"  (default "fade-up")
 *  - delay:   ms delay before the animation starts (default 0)
 *  - as:      element/tag to render (default "div")
 */
const VARIANT_CLASS = {
  "fade-up": "reveal-fade-up",
  "fade-in": "reveal-fade-in",
  left: "reveal-left",
  right: "reveal-right",
  scale: "reveal-scale",
};

const ScrollReveal = ({
  children,
  variant = "fade-up",
  delay = 0,
  className = "",
  as: Tag = "div",
  ...rest
}) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`${VARIANT_CLASS[variant] || VARIANT_CLASS["fade-up"]} ${
        visible ? "reveal-visible" : ""
      } ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default ScrollReveal;
