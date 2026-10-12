import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found" data-theme="dark">
      <div className="wrap">
        <p className="mono label">Error 404</p>
        <h1 className="page-hero__title">
          This one slipped <em>through.</em>
        </h1>
        <p className="page-hero__lede">Rare for us. The page you&rsquo;re after doesn&rsquo;t exist — but everything else is right where we left it.</p>
        <Link href="/" className="btn btn--sky btn--lg">
          Back to safety
        </Link>
      </div>
    </section>
  );
}
