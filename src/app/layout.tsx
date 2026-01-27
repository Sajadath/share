// app/layout.tsx
import "./globals.css";
import Providers from "./providers";

export const metadata = {
  title: "Modern",
  description: "modern UI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-white">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
