import type { Metadata } from "next";
import "./globals.css";

import ClientLayout from "./client-layout";




export const metadata: Metadata = {
  title: "B: Crafting Innovation, Sculpting the Future",
  description: "At B, we create beautiful, tactile software and powerful hardware, blending cutting-edge 3D graphics with seamless performance. Our expertise drives innovation across industries, making technology more accessible and impactful.",
  icons: {
    icon: [
      {
        url: '/lightico.svg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/darkico.svg',
        media: '(prefers-color-scheme: dark)',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClientLayout>{children}</ClientLayout>
  );
}
