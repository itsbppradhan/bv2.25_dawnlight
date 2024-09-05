import React, { useState } from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
import { CaretDownIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

const NavigationMenuDemo = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <NavigationMenu.Root className="fixed hidden top-3.5 z-[50] md:flex w-full justify-center pointer-events-none">
      <NavigationMenu.List className="center space-x-0.5 shadow-blackA4 m-0 flex list-none rounded-full bg-white/65 dark:bg-black/65 border border-gray-300 dark:border-white/30 backdrop-blur-sm p-1 shadow-[0_1px_4px] pointer-events-auto">
        
      <NavigationMenu.Item>
          <NavigationMenu.Link
            className={classNames(
              "group flex select-none items-center justify-between gap-[2px] rounded-full px-2 py-1 text-[15px] font-medium leading-none outline-none transition-transform duration-150 ease-out border dark:text-white",
              activeIndex === 69 ? "bg-blackA1 dark:bg-white/20 border-1 scale-95 border-blackA4 dark:border-white/30" : "text-blackA10 hover:bg-blackA1 hover:dark:bg-white/20 focus:shadow-blackA7 border-transparent focus:border-blackA4 focus:dark:border-white/30 "
            )}
            onMouseDown={() => setActiveIndex(69)}
            onMouseUp={() => setActiveIndex(null)}          
            href="/"
          >
            Home
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        
        
        
        <NavigationMenu.Item className="hidden">
          <NavigationMenu.Trigger
            className={classNames(
              "group flex select-none items-center justify-between gap-[2px] rounded-full px-2 py-1 text-[15px] font-medium leading-none outline-none transition-transform duration-150 ease-out border dark:text-white",
              activeIndex === 0 ? "bg-blackA1 dark:bg-white/20 border-1 scale-95 border-blackA4 dark:border-white/30" : "text-blackA10 hover:bg-blackA1 hover:dark:bg-white/20 focus:shadow-blackA7 border-transparent focus:border-blackA4 focus:dark:border-white/30 "
            )}
            onMouseDown={() => setActiveIndex(0)}
            onMouseUp={() => setActiveIndex(null)}
          >
            Products{' '}
            <CaretDownIcon
              className="text-blackA10 dark:text-white relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto">
            <ul className="one m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
              <li className="row-span-3 grid">
                <NavigationMenu.Link asChild>
                  <a
                    className="focus:shadow-gray-500 from-emerald-500 to-indigo-700 dark:from-emerald-400 dark:to-indigo-950 flex
                    h-full w-full select-none flex-col justify-end rounded-[6px] bg-gradient-to-b p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px]"
                    href="/"
                  >
                    <svg aria-hidden width="38" height="38" viewBox="0 0 25 25" fill="white">
                      <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
                      <path d="M12 0H4V8H12V0Z"></path>
                      <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
                    </svg>
                    <div className="mt-4 mb-[7px] text-[18px] font-medium leading-[1.2] text-white">
                      B.Ai
                    </div>
                    <p className="text-mauve4 text-[14px] leading-[1.3]">
                      Step into the productive first future. Ditch the big-tech.
                    </p>
                  </a>
                </NavigationMenu.Link>
              </li>

              <ListItem href="/" title="Ai.OS">
                CSS-in-JS with best-in-class developer experience.
              </ListItem>
              <ListItem href="/colors" title="Colors">
                Beautiful, thought-out palettes with auto dark mode.
              </ListItem>
              <ListItem href="https://icons.radix-ui.com/" title="Icons">
                A crisp set of 15x15 icons, balanced and consistent.
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item className="hidden">
          <NavigationMenu.Trigger
            className={classNames(
              "group flex select-none items-center justify-between gap-[2px] rounded-full px-2 py-1 text-[15px] font-medium leading-none outline-none transition-transform duration-150 ease-out border dark:text-white",
              activeIndex === 1 ? "bg-blackA1 dark:bg-white/20 border-1 scale-95 border-blackA4 dark:border-white/30" : "text-blackA10 hover:bg-blackA1 hover:dark:bg-white/20 focus:shadow-blackA7 border-transparent focus:border-blackA4 focus:dark:border-white/30 "
            )}
            onMouseDown={() => setActiveIndex(1)}
            onMouseUp={() => setActiveIndex(null)}
          >
            B Studio⁺{' '}
            <CaretDownIcon
              className="text-blackA10 dark:text-white relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto">
            <ul className="m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-3">
              <ListItem title="Introduction" href="/primitives/docs/overview/introduction">
                Build high-quality, accessible design systems and web apps.
              </ListItem>
              <ListItem title="Getting started" href="/primitives/docs/overview/getting-started">
                A quick tutorial to get you up and running with Radix Primitives.
              </ListItem>
              <ListItem title="Styling" href="/primitives/docs/guides/styling">
                Unstyled and compatible with any styling solution.
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <Link
            className={classNames(
              "group flex select-none items-center justify-between gap-[2px] rounded-full px-2 py-1 text-[15px] font-medium leading-none outline-none transition-transform duration-150 ease-out border dark:text-white",
              activeIndex === 3 ? "bg-blackA1 dark:bg-white/20 border-1 scale-95 border-blackA4 dark:border-white/30" : "text-blackA10 hover:bg-blackA1 hover:dark:bg-white/20 focus:shadow-blackA7 border-transparent focus:border-blackA4 focus:dark:border-white/30 "
            )}
            onMouseDown={() => setActiveIndex(3)}
            onMouseUp={() => setActiveIndex(null)}          
            href="https://itsbppradhan.bio.link"
          >
            About
          </Link>
        </NavigationMenu.Item>

      </NavigationMenu.List>

      <div className="perspective-[2000px] absolute top-full left-0 flex w-full justify-center">
        <NavigationMenu.Viewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-xl border shadow-[0_2px_12px] shadow-blackA3 border-blackA4 bg-white/50 dark:border-white/15 dark:bg-black/65 backdrop-blur-md  transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
      </div>
    </NavigationMenu.Root>
  );
};

const ListItem = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<'a'> & { title: string,  href: string }
>(({ className, children, title, href, ...props }, forwardedRef) => (
  <li>
    <Link
        href={href}
        className={classNames(
          'focus:shadow-[0_0_0_2px] focus:shadow-gray-500 hover:bg-gray-300/50 border border-transparent dark:hover:border-white/30 hover:border-gray-500 dark:hover:bg-black/50 block select-none rounded-md p-3 text-[15px] leading-none no-underline outline-none transition-colors',
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        <div className="text-black dark:text-white mb-[5px] font-medium leading-[1.2]">{title}</div>
        <p className="text-gray-500 dark:text-gray-400 leading-[1.4]">{children}</p>
      
    </Link>
  </li>
));

ListItem.displayName = 'ListItem';

export default NavigationMenuDemo;
