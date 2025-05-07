import { Metadata } from 'next';
import Header_24 from '@/components/shared/header_24';

export const metadata: Metadata = {
  title: 'tku_24',
};


export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="flex h-screen flex-col">
        <Header_24 />
        <main className="flex-1 wrapper">{children}</main>
        </div>
    );
  }
  