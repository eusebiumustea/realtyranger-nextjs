import { getUser } from "@/helpers/auth";
import { Header } from "@/ui-components";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./globals.css";
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getUser();
  return (
    <html lang="en">
      <body>
        {user && <Header user={user} />}
        {children}
      </body>
    </html>
  );
}
