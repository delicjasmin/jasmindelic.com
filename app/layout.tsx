import { Cursor } from "@react95/core/Cursor";
import "@react95/core/themes/win95.css";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Jasmin Delić - Software Engineer",
    template: "%s · Jasmin Delić",
  },
  description:
    "Full-stack software engineer. Ships web applications end to end, from the interface to the API and the data behind them.",
  authors: [{ name: "Jasmin Delić" }],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={Cursor.Auto}>
      <body className="min-h-dvh">
        <style>{`
          html.${Cursor.Auto} * {
            cursor: inherit;
          }
        `}</style>
        {children}
      </body>
    </html>
  );
}
