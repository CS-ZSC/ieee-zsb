import type { Metadata } from "next";
import { Provider } from "@/components/ui/provider";
import { Stack } from "@chakra-ui/react";
import Header from "@/components/ui/internal/header";
import Footer from "@/components/ui/internal/footer";
import "./global.css";
import { AnimatePresence } from "framer-motion";

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
      <body>
        <Provider>
          <Stack spaceY={"var(--global-spacing)"} margin={"auto"} maxWidth={"3000px"} color={"natural-2"}>
            <Header />
            <AnimatePresence mode="wait">{children}</AnimatePresence>
            <Footer />
          </Stack>
        </Provider>
      </body>
    </html>
  );
}
