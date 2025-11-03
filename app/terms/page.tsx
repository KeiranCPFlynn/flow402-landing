export default function TermsPage() {
  return (
    <main className="mx-auto flex min-h-[60vh] w-full max-w-3xl flex-col gap-8 px-6 py-16 text-slate-300 lg:px-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-50">
          Terms of Use
        </h1>
        <p className="text-sm leading-relaxed">
          These terms outline the basics of using Flow402&apos;s site and early
          access program. By submitting the waitlist form or browsing this site,
          you agree to these conditions.
        </p>
      </div>

      <section className="space-y-3 text-sm leading-relaxed">
        <h2 className="text-lg font-semibold text-slate-100">Beta access</h2>
        <p>
          Flow402 is currently in private beta. Access is invitation-based. We
          may update, limit, or revoke beta access at any time while the product
          is still evolving.
        </p>
      </section>

      <section className="space-y-3 text-sm leading-relaxed">
        <h2 className="text-lg font-semibold text-slate-100">
          Acceptable use
        </h2>
        <p>
          You agree not to misuse the site or associated waitlist form. This
          includes attempting to interfere with the site&apos;s operation or
          accessing systems without authorization.
        </p>
      </section>

      <section className="space-y-3 text-sm leading-relaxed">
        <h2 className="text-lg font-semibold text-slate-100">
          Intellectual property
        </h2>
        <p>
          Flow402 owns the content and branding on this site. You may reference
          information shared publicly but may not redistribute it as your own
          product documentation without consent.
        </p>
      </section>

      <section className="space-y-3 text-sm leading-relaxed">
        <h2 className="text-lg font-semibold text-slate-100">
          Disclaimer of warranties
        </h2>
        <p>
          The site and private beta are provided &ldquo;as is.&rdquo; We make no
          guarantees about uninterrupted availability or fitness for a particular
          purpose while we iterate quickly.
        </p>
      </section>

      <section className="space-y-3 text-sm leading-relaxed">
        <h2 className="text-lg font-semibold text-slate-100">Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, Flow402 is not liable for
          indirect or consequential damages arising from use of the site or beta
          program.
        </p>
      </section>

      <section className="space-y-3 text-sm leading-relaxed">
        <h2 className="text-lg font-semibold text-slate-100">Contact</h2>
        <p>
          Questions about these terms? Reach out through the waitlist form and
          the team will respond.
        </p>
      </section>

      <p className="text-xs text-slate-500">
        Last updated: {new Date().getFullYear()}
      </p>
    </main>
  );
}
