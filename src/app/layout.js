import { Inter } from 'next/font/google';
import '../styles/globals.css';
import ClientLayout from './ClientLayout';

const inter = Inter({
  subsets: ['latin', 'cyrillic', 'greek'],
  display: 'swap',
});

// Separate viewport configuration

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`bg-[#eeeeee] relative ${inter.className}`} suppressHydrationWarning>
  
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}