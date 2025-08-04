import type { Metadata } from "next";
import { Provider } from "@/components/ui/provider";
import { Stack } from "@chakra-ui/react";
import Header from "@/components/ui/internal/header";
import Footer from "@/components/ui/internal/footer";
import "./global.css";
import { Toaster } from "@/components/ui/toaster";
import GoToTopButton from "@/components/ui/internal/go-to-top-button";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "IEEE ZSB",
  description: `With over ${new Date().getFullYear() - 1999} years of impactful experience, the IEEE Zagazig University Student Branch (ZSB) stands as one of the first and most influential branches in Egypt. While based at Zagazig University, our influence extends nationwide through a variety of workshops, events, and initiatives that explore the evolving role of technology in all aspects of life.`,
  openGraph: {
    title: "IEEE ZSB",
    description:
      "One of the first and most influential IEEE student branches in Egypt. Discover our national impact in tech, events, and innovation.",
    url: "https://ieee-zsb.org/",
    siteName: "IEEE ZSB",
    images: [
      {
        url: "https://ieee-zsb.org/ieee-preview.png",
        width: 1366,
        height: 768,
        alt: "IEEE ZSB Social Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IEEE ZSB",
    description:
      "A legacy of innovation and collaboration - IEEE ZSB at Zagazig University.",
    images: ["https://ieee-zsb.org/ieee-preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body data-new-gr-c-s-check-loaded="8.932.0" data-gr-ext-installed="">
        <Provider>
          <Stack
            gap={0}
            margin={"auto"}
            maxWidth={"3040px"}
            padding={"var(--global-spacing)"}
            color={"natural-2"}
          >
            <Header />
            {children}
            <Analytics />
            <Footer />
            <GoToTopButton />
          </Stack>
          <Toaster />
        </Provider>
      </body>
    </html>
  );
}
