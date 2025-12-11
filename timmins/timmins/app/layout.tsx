import "./style.css";
import ScriptsLoader from "./ScriptsLoader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/assets/plugins/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/plugins/css/animate.min.css" />
        <link rel="stylesheet" href="/assets/plugins/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/assets/plugins/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/assets/plugins/css/maginific-popup.min.css" />
        <link rel="stylesheet" href="/assets/plugins/css/nice-select.min.css" />
        <link rel="stylesheet" href="/assets/plugins/css/icofont.css" />
        <link rel="stylesheet" href="/assets/plugins/css/uicons.css" />
      </head>
      <body className="element-wrapper">
        {children}
        {/* Scripts Loader - Loads all scripts in order */}
        <ScriptsLoader />
      </body>
    </html>
  );
}
