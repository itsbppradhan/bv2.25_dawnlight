import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
import Link from 'next/link';

const StudioPlus = () => {
  return (
    <NavigationMenu.Root>
      <NavigationMenu.List className="m-0 grid list-none gap-x-[10px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-3">
        <ListItem title="Introduction" href="/contact">
          Build high-quality, accessible design systems and web apps.
        </ListItem>
        <ListItem title="Getting started" href="/primitives/docs/overview/getting-started">
          A quick tutorial to get you up and running with Radix Primitives.
        </ListItem>
        <ListItem title="Styling" href="/primitives/docs/guides/styling">
          Unstyled and compatible with any styling solution.
        </ListItem>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};

const ListItem = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<'a'> & { title: string; href: string }
>(({ className, children, title, href, ...props }, forwardedRef) => (
  <NavigationMenu.Item asChild>
    <li>
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
    </li>
  </NavigationMenu.Item>
));

ListItem.displayName = 'ListItem';

export default StudioPlus;
