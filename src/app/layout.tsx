import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="h-full bg-white dark:bg-fit-neutral-900 text-fit-slate-500 dark:text-white font-brand">
        <main className="h-screen mx-auto max-w-7xl">{children}</main>
      </body>
    </html>
  );
}
