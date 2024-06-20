import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from 'react-redux';
import { store } from './store';
import ReduxProvider from './provider';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ETPay Test App",
  description: "Created by Alan Gárate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
