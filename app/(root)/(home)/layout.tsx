

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
   <section className="home">
    {children}
    </section>
  );
}
