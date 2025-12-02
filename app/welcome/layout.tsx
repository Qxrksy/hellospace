import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome | HelloSpace",
  description: "Complete your HelloSpace account setup",
};

export default function WelcomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
