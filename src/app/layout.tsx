import type { Metadata } from "next";
import { Geist, Geist_Mono, Nunito_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/provider/theme-provider";
import { QueryProvider } from "@/components/provider/query-provider";


const playfairDisplayHeading = Playfair_Display({ subsets: ['latin'], variable: '--font-heading' });

const nunitoSans = Nunito_Sans({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Inbox Orbit",
  description: "Inbox Orbit — unified Gmail and Calendar workspace",
  icons: [
    { rel: 'icon', url: '/favicon.svg' },
    { rel: 'icon', url: '/favicon.ico', sizes: '32x32' }
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", nunitoSans.variable, playfairDisplayHeading.variable)}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <QueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
