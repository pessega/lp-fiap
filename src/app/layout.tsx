import "@/styles/globals.scss";

export const metadata = {
  title: "FIAP Teste Andressa",
  description: "LP técnica em Next.js + SCSS + TS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
