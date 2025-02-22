import "./globals.css";
import MainLayout from "./layouts/MainLayout";
import NextTopLoader from "nextjs-toploader";
import MaterialThemeProvider from "@providers/MaterialThemeProvider";
import { color } from "@constants/style";
import { Quicksand } from "next/font/google";
import AuthSessionProvider from "@providers/AuthSessionProvider";

export const metadata = {
  title: "Title",
  description: "Description",
};
const quicksand = Quicksand({
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["300", "400", "700", "500", "600"],
  variable: "--quicksand-font",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={quicksand.variable}>
      <body>
        <NextTopLoader color={color.global.primary} showSpinner={false} />
        <MaterialThemeProvider>
          <AuthSessionProvider>
            <MainLayout>{children}</MainLayout>
          </AuthSessionProvider>
        </MaterialThemeProvider>
      </body>
    </html>
  );
}
