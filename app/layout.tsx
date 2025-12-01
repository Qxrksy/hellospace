// HS-ADD: app/layout.tsx
import "./styles/normalize.css";    // HS-ADD: must load first
import "./styles/hellospace.css";     // HS-ADD: exact SpaceHey CSS

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SessionProvider from "@/components/SessionProvider";

export const metadata = {
  title: "HelloSpace",
  description: "a space to be you — HelloSpace.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <Header />
          <main className="container">
            {children}
          </main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}

