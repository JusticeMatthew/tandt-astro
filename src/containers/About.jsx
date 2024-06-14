import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const { ref, inView } = useInView({ rootMargin: '0px 0px -100%' });

  return (
    <section ref={ref} className="relative z-20 flex items-center h-screen">
      <div className="z-20 w-full bg-glass/30 h-96 backdrop-blur-lg"></div>
      <img
        src="/images/icy-rocks.webp"
        alt="limestone"
        className="object-cover transition-all absolute top-0 left-0 z-0 w-screen h-screen"
      />
    </section>
  );
}
