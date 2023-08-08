import "./globals.css";
export const metadata = {
  title: "Voice Recorder",
  description: "Phenikaa-X Assistant Robot Voice Recorder",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
