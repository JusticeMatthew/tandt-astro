import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { navLinks } from '@/constants/navLinks';

export default function Header() {
  const { scrollY } = useScroll();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [hoveredLink, setHoveredLink] = useState('');
  const [navHovering, setNavHovering] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrollPosition(latest);
  });

  return (
    <header className="fixed w-full top-0 z-50 flex items-center h-16">
      <div id="container" className="flex items-center justify-between">
        <a href="/">
          <p
            className={`${
              scrollPosition === 0 ? 'opacity-100' : 'opacity-0'
            } text-5xl -tracking-[.25rem] font-barlow -translate-x-[2px] transition-all duration-250`}
          >
            TT
          </p>
        </a>
        <motion.div
          layout
          onHoverStart={() => setNavHovering(true)}
          onHoverEnd={() => setNavHovering(false)}
          className="relative flex items-center justify-center rounded-md shadow bg-glass/30 backdrop-blur"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onMouseEnter={() => setHoveredLink(link.name)}
              className="z-20 px-6 py-2 group"
            >
              <p className="font-medium text-lg text-center">{link.name}</p>
              {window.location.pathname === link.active && (
                <motion.span
                  layout
                  className="fixed w-[13px] h-[2px] rounded-full bg-dark -mt-[2px] ml-[.5px]"
                />
              )}
            </a>
          ))}
          <motion.div
            layout
            className={`absolute flex ${
              hoveredLink === 'Home' ? 'justify-start' : ''
            } ${hoveredLink === 'Gallery' ? 'justify-center right-2' : ''} ${
              hoveredLink === 'Contact' ? 'justify-end' : ''
            } w-full h-full`}
          >
            <motion.div
              layout
              className={`${hoveredLink === 'Home' ? 'w-[96px]' : ''} ${
                hoveredLink === 'Gallery' ? 'w-[106px]' : ''
              } ${
                hoveredLink === 'Contact' ? 'w-[112px]' : ''
              } h-full rounded-md bg-glass/30 ${
                navHovering ? 'opacity-100' : 'opacity-0'
              } transition-opacity`}
            />
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
}
