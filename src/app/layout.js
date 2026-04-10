import AppShell from "@/components/AppShell";
import "./globals.css";

export const metadata = {
  title: "VU Students Forum",
  description: "Student discussion dashboard for Virtual University forums.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#121417] text-gray-200 antialiased">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
