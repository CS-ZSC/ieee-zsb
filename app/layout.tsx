import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/ui/internal/header";
import Loading from "./loading";

import { Provider } from "@/components/ui/provider"
import { Box } from "@chakra-ui/react";


export const metadata: Metadata = {
  title: "IEEE ZSB",
  description: "IEEE Zagazig Student Branch",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
      >
        <Provider>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
