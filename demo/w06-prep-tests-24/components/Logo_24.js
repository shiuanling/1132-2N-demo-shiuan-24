import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/logo.png'

function Logo_24() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image src={logo} height="60" width="60" alt="The Wild Oasis logo" />
      <span className="text-xl font-semibold text-primary-100">
        Quiz_1
      </span>
    </Link>
  );
}

export default Logo_24;
