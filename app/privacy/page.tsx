export default function PrivacyPage() {
  return (
    <main className="mx-auto flex min-h-[60vh] w-full max-w-3xl flex-col gap-8 px-6 py-16 text-slate-300 lg:px-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-50">
          Privacy Notice
        </h1>
        <p className="text-sm leading-relaxed">
          We take your privacy seriously. This notice explains how Flow402
          collects, uses, and protects personal information shared with us
          through our site and waitlist form.
        </p>
      </div>

      <section className="space-y-3 text-sm leading-relaxed">
        <h2 className="text-lg font-semibold text-slate-100">What we collect</h2>
        <p>
          When you request access or contact us, we collect the details you
          submit (such as name, email, and message content). We may also collect
          basic usage analytics to understand interest in Flow402.
        </p>
      </section>

      <section className="space-y-3 text-sm leading-relaxed">
        <h2 className="text-lg font-semibold text-slate-100">How we use data</h2>
        <p>
          We use your information to respond to inquiries, coordinate beta
          access, and share product updates. We do not sell personal
          information.
        </p>
      </section>

      <section className="space-y-3 text-sm leading-relaxed">
        <h2 className="text-lg font-semibold text-slate-100">
          How we protect data
        </h2>
        <p>
          Access to personal information is limited to Flow402 team members who
          need it for product operations. We use reasonable safeguards to keep
          data secure.
        </p>
      </section>

      <section className="space-y-3 text-sm leading-relaxed">
        <h2 className="text-lg font-semibold text-slate-100">Your choices</h2>
        <p>
          You can request removal or an update to your information at any time
          by contacting us through the waitlist form. We will honor requests as
          soon as practical.
        </p>
      </section>

      <section className="space-y-3 text-sm leading-relaxed">
        <h2 className="text-lg font-semibold text-slate-100">
          Updates to this policy
        </h2>
        <p>
          We may update this notice to reflect new practices. We will post the
          latest version here with an updated effective date.
        </p>
      </section>

      <section className="space-y-3 text-sm leading-relaxed">
        <h2 className="text-lg font-semibold text-slate-100">Contact</h2>
        <p>
          Questions? Use our waitlist form to reach the Flow402 team and we will
          respond quickly.
        </p>
      </section>

      <p className="text-xs text-slate-500">
        Effective date: {new Date().getFullYear()}
      </p>
    </main>
  );
}
