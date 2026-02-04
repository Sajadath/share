// app/layout.tsx
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import "./globals.css";
import ToastifyProvider from "@/providers/ToastifyProvider";

export const metadata = {
  title: "Share It",
  description: "Share wtf you want",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-white relative">
        <ReactQueryProvider>
          <ToastifyProvider>{children}</ToastifyProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
