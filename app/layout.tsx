import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";

export const metadata: Metadata = {
  title: {
    default: "Voice of Bengal",
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {/* Sidebar */}
        <div className="fixed bottom-0 w-full bg-gray-800 text-white sm:static sm:w-64 sm:h-full sm:bottom-auto sm:left-0 sm:top-0">
          <div className="flex sm:flex-col justify-around sm:justify-start sm:items-start p-4 space-x-4 sm:space-x-0 sm:space-y-4">
            <a href="/" className="hover:text-gray-400">
              Home
            </a>
            <a href="/profile" className="hover:text-gray-400">
              Profile
            </a>
            <a href="/messages" className="hover:text-gray-400">
              Messages
            </a>
          </div>
        </div>
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="flex-1 p-4">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
