// app/layout.js
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import localFont from "next/font/local";
import Script from 'next/script';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Unforgettable NBA Experiences from Switzerland | Elite Sports Trips",
  description: "Experience live NBA action with Elite Sports Trips. Travel from Switzerland to iconic U.S. cities, watch the Lakers, Warriors, Knicks, and Nets, and explore landmarks like the Golden Gate Bridge and Times Square.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-69X7YC8FSV"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-69X7YC8FSV');
          `}
        </Script>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
