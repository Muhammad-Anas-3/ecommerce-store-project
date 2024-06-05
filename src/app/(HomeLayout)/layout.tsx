import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToastProvider from "@/components/ToastProvider";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Navbar />
      <div>
        <ToastProvider>
          {children}
        </ToastProvider>
      </div>
      <Footer />
    </>
  );
}
