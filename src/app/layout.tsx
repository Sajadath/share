// app/layout.tsx
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import "./globals.css";
import ToastifyProvider from "@/providers/ToastifyProvider";

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
        <ReactQueryProvider>
          <ToastifyProvider>{children}</ToastifyProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
