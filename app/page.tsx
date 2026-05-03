export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          HR &amp; Recruiting
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Get paid when candidates<br />
          <span className="text-[#58a6ff]">ghost your interviews</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Join the shared insurance pool. Pay a small fee per scheduled interview.
          When a candidate no-shows, you get compensated — automatically.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $12/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No contracts. Cancel anytime.</p>
        <div className="mt-16 grid grid-cols-3 gap-6 text-center">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff]">23%</div>
            <div className="text-sm text-[#8b949e] mt-1">avg no-show rate</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff]">$340</div>
            <div className="text-sm text-[#8b949e] mt-1">avg cost per no-show</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff]">48h</div>
            <div className="text-sm text-[#8b949e] mt-1">payout turnaround</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple, flat pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-extrabold text-white mb-1">$12</div>
          <div className="text-[#8b949e] mb-6">/month + small per-interview fee</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited interview tracking",
              "Automated no-show detection",
              "Pool-based payouts within 48h",
              "Company dashboard & reports",
              "Slack & email notifications",
              "Priority support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Get started now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently asked questions</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does the insurance pool work?</h3>
            <p className="text-sm text-[#8b949e]">All member companies contribute a small fee per scheduled interview into a shared pool. When a verified no-show occurs, the affected company receives a payout from the pool — spreading the cost of ghosting across the community.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How is a no-show verified?</h3>
            <p className="text-sm text-[#8b949e]">We integrate with your calendar (Google, Outlook) and ATS. If a candidate misses the interview window without cancelling at least 2 hours in advance, it's automatically flagged as a no-show and your claim is processed.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">What's the per-interview fee?</h3>
            <p className="text-sm text-[#8b949e]">The per-interview contribution is dynamically calculated based on pool size and historical no-show rates — typically $0.50–$2.00 per interview. Your $12/mo base plan covers platform access and reporting.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Interview No-Show Insurance. All rights reserved.
      </footer>
    </main>
  );
}
