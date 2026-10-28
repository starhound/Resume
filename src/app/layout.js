import "./globals.css";

export const metadata = {
  title: "Wesley Reid | Senior Software Engineer",
  description: "Wesley Reid's resume: senior software engineering, AI integrations, full-stack development, and cloud systems.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
