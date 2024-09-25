"use client";

import { Inter } from "next/font/google";
import "./globals.css";

import { ReactLenis, useLenis } from "lenis/react";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathName = usePathname();
  var data = "";
  switch (pathName) {
    case "/":
      data = "Ntomawura || Weaving Dreams with fabrics";
      break;

    case "/about":
      data = "Ntomawura || Weaving Dreams with fabrics";
      break;
    case "/services":
      data = "Ntomawura || Weaving Dreams with fabrics";
      break;
    case "/product":
      data = "Ntomawura || Weaving Dreams with fabrics";
      break;
    case "/contact":
      data = "Ntomawura|| contact us for more info";
      break;

    default:
      break;
  }
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <script
          src="https://kit.fontawesome.com/3dd6ec3875.js"
          crossorigin="anonymous"
          async
        />
        <link rel="manifest" href="/site.webmanifest" />
        <title>{data}</title>
      </head>
      <body>
        {/* <ReactLenis root> */}
        {/* content */}
        {children}
        {/* </ReactLenis> */}
      </body>
    </html>
  );
}
