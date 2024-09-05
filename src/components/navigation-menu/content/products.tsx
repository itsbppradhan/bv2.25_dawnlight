import React, { useState } from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
import { CaretDownIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

const Products = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <ul className="one m-0 grid list-none gap-1 sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
      <li className="row-span-3 grid">
        <NavigationMenu.Item asChild>
          <Link
            href="/"
            className="focus:shadow-gray-500 from-emerald-500 to-indigo-700 dark:from-emerald-400 dark:to-indigo-950 flex
              h-full w-full select-none flex-col justify-end rounded-2xl bg-gradient-to-b p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px]"
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
          </Link>
        </NavigationMenu.Item>
      </li>

      <ListItem href="https://stitches.dev/" title="Ai.OS">
        CSS-in-JS with best-in-class developer experience.
      </ListItem>
      <ListItem href="/colors" title="Colors">
        Beautiful, thought-out palettes with auto dark mode.
      </ListItem>
      <ListItem href="https://icons.radix-ui.com/" title="Icons">
        A crisp set of 15x15 icons, balanced and consistent.
      </ListItem>
    </ul>
  );
};

const ListItem = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<'a'> & { title: string; href: string }
>(({ className, children, title, href, ...props }, forwardedRef) => (
  <li>
    <NavigationMenu.Item asChild>
      <Link
        href={href}
        className={classNames(
          'focus:shadow-[0_0_0_2px] focus:shadow-gray-500 hover:bg-gray-300/50 border border-transparent dark:hover:border-white/30 hover:border-gray-500 dark:hover:bg-black/50 block select-none rounded-2xl p-3 text-[15px] leading-none no-underline outline-none transition-colors',
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        <div className="text-black dark:text-white mb-[5px] font-medium leading-[1.2]">{title}</div>
        <p className="text-gray-500 dark:text-gray-400 leading-[1.4]">{children}</p>
      </Link>
    </NavigationMenu.Item>
  </li>
));

ListItem.displayName = 'ListItem';

export default Products;
