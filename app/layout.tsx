import type { Metadata } from "next"

import './style.css'

export const metadata: Metadata = {
  title: "expenseTracker",
  description: "expenseTracker by react and NEXT.js",
};

export default function RootLayout({
  children,
}: any) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
