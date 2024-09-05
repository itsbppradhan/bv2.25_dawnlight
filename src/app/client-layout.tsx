"use client";
import { Plus_Jakarta_Sans } from "next/font/google";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

import NavigationMenu from "@/components/navigation-menu/navigation-menu-layout";
import PageTransitionEffect from "./PageTransitionEffect";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <PageTransitionEffect>
          <NavigationMenu />
          <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
              <div className="flex flex-col rounded-2xl p-2 over items-center justify-center">
                <div className="w-max h-[59px] inline md:hidden"/>
                {children}
              </div>
            </main>
            <footer className="py-4 text-center text-sm text-gray-600 dark:text-gray-400">
              © itsbppradhan 2024-present
            </footer>
          </div>
        </PageTransitionEffect>
      </body>
    </html>
  );
}
