import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import classNames from 'classnames';
import StudioPlus from './content/b-studio-plus';
import Products from './content/products';
import Link from 'next/link';

const MobileMenu: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
  <div
    className={`fixed z-40 inset-0 md:hidden flex flex-col items-center justify-center w-full h-screen max-w-[calc(100%)] bg-white/50 dark:bg-black/50  backdrop-blur-md transition-opacity duration-200 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible aria-hidden"} ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
  >
    <div className="flex space-y-2 flex-col w-full max-h-full overflow-auto pt-16 p-2"> {/* Add pt-16 for padding-top */}
      {/* Button instead of AccordionItem */}
      <Link href="/">
      <button className="w-full rounded-full bg-transparent dark:bg-transparent text-black dark:text-white border border-transparent dark:border-transparent hover:bg-white/60 dark:hover:bg-black/40 hover:border-gray-200 dark:hover:border-white/30 transition-all duration-150 py-2">
        Home
      </button>
</Link>
      {/* Accordion items */}
      <Accordion.Root
        type="single"
        defaultValue="null"
        collapsible
        className="flex flex-col w-full space-y-2"
      >
        <AccordionItem className="hidden" value="item-1">
          <AccordionTrigger>
            <span>Products</span>
          </AccordionTrigger>
          <AccordionContent>
            <Products />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem className="hidden" value="item-2">
          <AccordionTrigger>
            <span>B Studio⁺</span>
          </AccordionTrigger>
          <AccordionContent>
          <StudioPlus />
          
          </AccordionContent>
        </AccordionItem>
      </Accordion.Root>
<Link href="https://itsbppradhan.bio.link">
      <button className="w-full rounded-full bg-transparent dark:bg-transparent text-black dark:text-white border border-transparent dark:border-transparent hover:bg-white/60 dark:hover:bg-black/40 hover:border-gray-200 dark:hover:border-white/30 transition-all duration-150 py-2">
        About
      </button>
      </Link>
    </div>
  </div>
);

const AccordionItem = React.forwardRef<HTMLDivElement, Accordion.AccordionItemProps>(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Item
      className={classNames(
        '',
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <div className="flex flex-col space-y-1">
        {children}
      </div>
    </Accordion.Item>
  )
);

AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<HTMLButtonElement, Accordion.AccordionTriggerProps>(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="flex">
      <Accordion.Trigger
        className={classNames(
          'w-full rounded-full bg-transparent dark:bg-transparent text-black dark:text-white border border-transparent dark:border-transparent hover:bg-white/60 dark:hover:bg-black/40 hover:border-gray-200 dark:hover:border-white/30 transition-all duration-150 py-2',
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        {children}
        
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

AccordionTrigger.displayName = 'AccordionTrigger';

const AccordionContent = React.forwardRef<HTMLDivElement, Accordion.AccordionContentProps>(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={classNames(
        'overflow-hidden text-black bg-white/60 dark:text-white rounded-3xl dark:bg-black/50 border border-gray-300 dark:border-gray-300/30 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp text-[15px] mt-2', // Added mt-2 for margin-top
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <div className="py-3 px-3">{children}</div>
    </Accordion.Content>
  )
);

AccordionContent.displayName = 'AccordionContent';

export default MobileMenu;
