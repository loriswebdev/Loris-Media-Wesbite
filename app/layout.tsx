import type { Metadata } from "next";
import "./globals.css";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'


export const metadata: Metadata = {
  title: "Loris Media",
  description: "Loris Media Homepage",
};
config.autoAddCss = false
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='overflow-x-hidden'>{children}</body>
    </html>
  );
}
