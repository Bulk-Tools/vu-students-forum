import AppShell from "@/components/AppShell";
import "./globals.css";

export const metadata = {
  title: "VU Study OS",
  description: "A next-gen study operating system for Virtual University students.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
