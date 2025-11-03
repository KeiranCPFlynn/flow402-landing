import Image from "next/image";
import { ApplyButton } from "@/components/apply-button";
import Logo from "./images/flow402-logo.jpeg";

const howItWorks = [
  "User tops up once (e.g., $5–$10 USDC)",
  "Each paid request debits credits off-chain instantly",
  "If low balance, your API returns HTTP 402",
  "Occasional on-chain settlement for clear accounting",
];

const featureCards = [
  {
    title: "Predictable UX",
    body: "No per-call on-chain friction.",
  },
  {
    title: "x402-native",
    body: "Simple pay-links & gateway routes.",
  },
  {
    title: "Real logs",
    body: "Supabase-ready tracking and auditability.",
  },
];

const useCases = [
  "AI Agents: call external tools and pay per use.",
  "APIs: metered endpoints without subscriptions.",
  "Creators: pay-to-unlock premium files & links.",
  "Data Providers: charge for datasets & queries.",
];

const faqs = [
  {
    question: "Is this on-chain every call?",
    answer:
      "No. Only top-ups and settlements are on-chain; per-request debits are off-chain for speed and cost.",
  },
  {
    question: "Why not just subscriptions?",
    answer:
      "Subscriptions don’t fit irregular, agent-driven workloads. We support per-request pricing cleanly.",
  },
  {
    question: "What chains/assets first?",
    answer: "USDC on Base initially, with more assets/networks later.",
  },
  {
    question: "How do I get in?",
    answer: "Apply for beta. We’re onboarding small cohorts weekly.",
  },
  {
    question: "Security?",
    answer:
      "Server-side secrets never hit the client. Settlements are on-chain and auditable.",
  },
  {
    question: "Pricing?",
    answer:
      "Early users get founder-friendly pricing; we’ll publish public pricing at GA.",
  },
];

const curlSnippet = `curl -i https://api.yourservice.com/pro
HTTP/1.1 402 Payment Required
x-402: top-up @ https://flow402.com/pay?ref=abc123`;

const tsSnippet = `const r = await fetch("/your/paid/endpoint");
if (r.status === 402) {
  const payLink = r.headers.get("x-402");
  // show UI to top-up via Flow402
}`;

export default function Home() {
  return (
    <div className="relative min-h-screen bg-slate-950">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[560px] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.35),_transparent_60%)]" />
      <header className="sticky top-0 z-30 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-full border border-slate-700 bg-slate-900/80">
              <Image
                src={Logo}
                alt="Flow402 logo"
                fill
                sizes="40px"
                className="object-cover"
                priority
              />
            </div>
            <span className="text-base font-semibold tracking-tight text-slate-100">
              Flow402
            </span>
          </div>
          <ApplyButton className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/30 transition hover:bg-cyan-300 focus-visible:outline focus-visible:outline-cyan-200">
            Get Early Access
          </ApplyButton>
        </div>
      </header>

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-24 pt-16 sm:pt-20 lg:px-8 lg:pt-32">
        <section className="grid gap-12 lg:grid-cols-[1.15fr,1fr] lg:items-center">
          <div className="flex flex-col gap-8">
            <div className="inline-flex max-w-fit items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.45em] text-cyan-200">
              Make payments invisible
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl sm:leading-tight lg:text-6xl">
                Make 402 invisible.
              </h1>
              <p className="max-w-xl text-lg font-medium text-slate-200 sm:text-xl">
                Pay-per-request credits for APIs & agents.
              </p>
              <p className="max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
                When balance hits zero, your API returns 402—Flow402 auto-tops-up
                in USDC and retries. You keep charging per call without on-chain
                friction.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <ApplyButton className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/30 transition hover:bg-cyan-300 focus-visible:outline focus-visible:outline-cyan-200">
                Get Early Access
              </ApplyButton>
              <a
                className="inline-flex items-center justify-center text-sm font-medium text-slate-300 transition hover:text-slate-100 focus-visible:outline focus-visible:outline-cyan-200"
                href="https://tally.so/r/mDrr7X"
                target="_blank"
                rel="noopener noreferrer"
              >
                Talk to us
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-cyan-500/10">
            <div className="mb-4 flex items-center justify-between text-xs font-medium text-slate-400">
              <span>HTTP 402 Example</span>
              <span className="rounded-full border border-slate-700 px-2 py-0.5 text-[10px] uppercase tracking-[0.2em] text-cyan-300/80">
                x402
              </span>
            </div>
            <pre className="overflow-x-auto whitespace-pre-wrap rounded-xl bg-slate-950/60 p-4 text-sm leading-relaxed text-slate-200">
              <code>{curlSnippet}</code>
            </pre>
          </div>
        </section>

        <section aria-labelledby="how-it-works">
          <div className="mb-10 flex flex-col gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300/70">
              Workflow
            </p>
            <h2
              id="how-it-works"
              className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl"
            >
              How it works
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-sm leading-relaxed text-slate-300 shadow-lg shadow-slate-900/40"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="why-flow402" className="grid gap-10 lg:grid-cols-[1fr,1fr]">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300/70">
              Why Flow402
            </p>
            <h2
              id="why-flow402"
              className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl"
            >
              Shipping for x402-native teams
            </h2>
            <p className="max-w-lg text-base text-slate-400">
              Replace brittle paywalls with credits that work across agents,
              APIs, and human flows—without pulling users on-chain every call.
            </p>
          </div>
          <div className="grid gap-4">
            {featureCards.map(({ title, body }) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-slate-900/40"
              >
                <h3 className="text-lg font-semibold text-slate-50">{title}</h3>
                <p className="mt-2 text-sm text-slate-400">{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="use-cases">
          <div className="mb-10 flex flex-col gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300/70">
              Use cases
            </p>
            <h2
              id="use-cases"
              className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl"
            >
              Built for agents, APIs, and creators
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {useCases.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-sm leading-relaxed text-slate-300 shadow-lg shadow-slate-900/40"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="developer-preview" className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300/70">
              Developer preview
            </p>
            <h2
              id="developer-preview"
              className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl"
            >
              Drop-in snippets for Flow402 integration
            </h2>
            <p className="text-base text-slate-400">
              Test HTTP 402 flows with a single curl call, then wire credits into
              your client or agent runtime with a few lines of TypeScript.
            </p>
          </div>
          <div className="grid gap-6">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-cyan-500/10">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300/70">
                Curl preview
              </p>
              <pre className="overflow-x-auto rounded-xl bg-slate-950/60 p-4 text-sm leading-relaxed text-slate-200">
                <code>{curlSnippet}</code>
              </pre>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-cyan-500/10">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300/70">
                TypeScript fetch
              </p>
              <pre className="overflow-x-auto rounded-xl bg-slate-950/60 p-4 text-sm leading-relaxed text-slate-200">
                <code>{tsSnippet}</code>
              </pre>
            </div>
          </div>
        </section>

        <section aria-labelledby="faq">
          <div className="mb-10 flex flex-col gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300/70">
              FAQ
            </p>
            <h2
              id="faq"
              className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl"
            >
              Answers for operators
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {faqs.map(({ question, answer }) => (
              <div
                key={question}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-slate-900/40"
              >
                <h3 className="text-lg font-semibold text-slate-50">
                  {question}
                </h3>
                <p className="mt-3 text-sm text-slate-400">{answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="apply"
          aria-labelledby="apply-heading"
          className="rounded-3xl border border-slate-800 bg-slate-900/60 p-10 text-center shadow-2xl shadow-cyan-500/10"
        >
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-6">
            <h2
              id="apply-heading"
              className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl"
            >
              Request access
            </h2>
            <ApplyButton className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/30 transition hover:bg-cyan-300 focus-visible:outline focus-visible:outline-cyan-200">
              Get Early Access
            </ApplyButton>
            <p className="text-xs text-slate-500">
              By applying, you agree to be contacted about Flow402.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800/60 bg-slate-950/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>
            © {new Date().getFullYear()} Flow402 — Internet-native payments for
            agents & humans.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a
              className="transition hover:text-slate-300 focus-visible:outline focus-visible:outline-cyan-200"
              href="/privacy"
            >
              Privacy
            </a>
            <a
              className="transition hover:text-slate-300 focus-visible:outline focus-visible:outline-cyan-200"
              href="/terms"
            >
              Terms
            </a>
            <a
              className="transition hover:text-slate-300 focus-visible:outline focus-visible:outline-cyan-200"
              href="https://tally.so/r/mDrr7X"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
