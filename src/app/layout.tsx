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
    <html lang="en">
      <body>
        <SessionProvider>
          <Provider>
            <Theme>
              {children}
            </Theme>
          </Provider>
        </SessionProvider>
      </body>
    </html>
  );
}
