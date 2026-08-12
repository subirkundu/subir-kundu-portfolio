import Link from "next/link";
export default function NotFound() { return <section className="not-found container"><p className="eyebrow">404</p><h1>Not found</h1><p>The page you&apos;re looking for isn&apos;t available.</p><Link className="button primary" href="/">Return home</Link></section>; }
