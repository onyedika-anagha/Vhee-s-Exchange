import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { AnimateType, animate_animation } from "utils/helper/helper";

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  type?: AnimateType;
  className?: string;
  isArticle?: boolean;
}
function Reveal({
  children,
  width = "fit-content",
  type = AnimateType.FadeInLeft,
  className = "",
  isArticle = false,
}: Props) {
  const ref = useRef(null),
    isInView = useInView(ref, { once: true }),
    mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);
  if (isArticle) {
    return (
      <motion.article
        ref={ref}
        className={className}
        variants={animate_animation(type)}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}>
        {children}
      </motion.article>
    );
  }
  return (
    <motion.div
      ref={ref}
      className={className}
      variants={animate_animation(type)}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0.25 }}>
      {children}
    </motion.div>
  );
}

export default Reveal;
