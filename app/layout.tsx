import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "El Patio | Restaurante en Rivas-Vaciamadrid",
  description:
    "Descubre El Patio, un restaurante en Rivas-Vaciamadrid. Consulta nuestras fotografías, conoce el restaurante y encuentra cómo llegar.",
  applicationName: "El Patio",
  openGraph: {
    title: "El Patio | Restaurante en Rivas-Vaciamadrid",
    description:
      "Un lugar para disfrutar de la buena mesa en Rivas-Vaciamadrid.",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
