import Link from 'next/link'

export default function Navigation_24() {
  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <Link href="/quiz1/p1_24" className="hover:text-accent-400 transition-colors">
            p1_24
          </Link>
        </li>
        <li>
          <Link href="/quiz1/p2_24" className="hover:text-accent-400 transition-colors">
            p2_24
          </Link>
        </li>
        <li>
          <Link
            href="/quiz1/p3_24" className="hover:text-accent-400 transition-colors"
          >
            p3_24
          </Link>
        </li>
        <li>
          <Link
            href="/quiz1/p4_24" className="hover:text-accent-400 transition-colors"
          >
            p4_24
          </Link>
        </li>
      </ul>
    </nav>
  );
}
