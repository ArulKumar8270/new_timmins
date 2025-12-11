import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>My App</title>
        <link rel='stylesheet' href='/assets/css/bootstrap.min.css' type='text/css' media='all' />
        <link rel='stylesheet' href='/assets/css/owl.css' type='text/css' media='all' />
        <link rel='stylesheet' href='/assets/css/swiper.min.css' type='text/css' media='all' />
        <link rel='stylesheet' href='/assets/css/jquery.fancybox.min.css' type='text/css' media='all' />
        <link rel='stylesheet' href='/assets/css/icomoon.css' type='text/css' media='all' />
        <link rel='stylesheet' href='/assets/css/flexslider.css' type='text/css' media='all' />
        <link rel='stylesheet' href='/assets/css/font-awesome.min.css' type='text/css' media='all' />
        <link rel='stylesheet' href='/assets/css/style.css' type='text/css' media='all' />
        <link rel='stylesheet' href='/assets/css/scss/elements/theme-css.css' type='text/css' media='all' />
      </head>
      <body>
        {children}
        <script type='text/javascript' src='/assets/js/jquery-3.6.0.min.js'></script>
        <script type='text/javascript' src='/assets/js/bootstrap.min.js'></script>
        <script type='text/javascript' src='/assets/js/jquery.fancybox.js'></script>
        <script type='text/javascript' src='/assets/js/jquery.flexslider-min.js'></script>
        <script type='text/javascript' src='/assets/js/owl.js'></script>
        <script type='text/javascript' src='/assets/js/swiper.min.js'></script>
        <script type='text/javascript' src='/assets/js/isotope.min.js'></script>
        <script type='text/javascript' src='/assets/js/countdown.js'></script>
        <script type='text/javascript' src='/assets/js/jquery.countTo.js'></script>
        <script type='text/javascript' src='/assets/js/creote-extension.js'></script>
      </body>
    </html>
  );
}
