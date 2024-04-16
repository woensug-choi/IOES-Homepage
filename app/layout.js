import '../styles/globals.css';
import { GoogleAnalytics } from '@next/third-parties/google'

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
    </head>
    <body>{children}</body>
    <GoogleAnalytics gaId="G-1139GLE368" />
  </html>
);

export default RootLayout;
