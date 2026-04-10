import "./globals.css";

export const metadata = {
  title: "VU Students Forum",
  description: "Premium student discussion dashboard.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#121417] text-gray-200 antialiased">{children}</body>
    </html>
  );
}
