// HS-ADD: app/layout.tsx
import "./styles/normalize.css";    // HS-ADD: must load first
import "./styles/hellospace.css";     // HS-ADD: exact SpaceHey CSS
import "./styles/mobile.css";        // HS-ADD: mobile responsive styles

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SessionProvider from "@/components/SessionProvider";
import FontSizeProvider from "@/components/FontSizeProvider";

export const metadata = {
  title: "HelloSpace",
  description: "a space to be you — HelloSpace.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <FontSizeProvider>
            <Header />
            <main className="container">
              {children}
            </main>
            <Footer />
          </FontSizeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}

