import { Provider } from "@/components/ui/provider";
import "@/styles/globals.css";
import { Container, Theme } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html suppressHydrationWarning>
      <body>
          <Provider>
            <Theme>
              <SessionProvider>
              {children}
              </SessionProvider>
            </Theme>
          </Provider>
      </body>
    </html>
  );
}
