import Header from "@/components/Header";
import type { Metadata } from "next";



export const metadata: Metadata = {
  title: "Public Link in my bio",
  description: "Public Link in my bio",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        
      >
        <Header />
        <main className = "max-w-7xl mx-auto pt-10 px-4 xl:px-0 ">
            {children}
        </main>
      </body>
    </html>
  );
}
