import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "GF Ultra Slim - Emagrecedor Natural",
  description:
    "Perca até 12kg em 30 dias com GF Ultra Slim, o nutracêutico avançado 100% natural e aprovado pela Anvisa.",
  openGraph: {
    title: "GF Ultra Slim - Emagrecedor Natural",
    description:
      "Perca até 12kg em 30 dias com GF Ultra Slim, o nutracêutico avançado 100% natural e aprovado pela Anvisa.",
    type: "website",
    locale: "pt_BR",
    siteName: "GF Ultra Slim",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
