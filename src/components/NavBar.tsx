import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between w-full p-4 gap-16 bg-background text-foreground">
        <Link href="/" className="hover:text-blue-500">About</Link>
        <Link href="/projects" className="hover:text-blue-500">Projects</Link>
        <Link href="/ethics" className="hover:text-blue-500">Ethics Essay</Link>
    </nav>
  );
}