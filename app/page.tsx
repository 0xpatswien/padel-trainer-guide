"use client";

export default function Home() {
  const painPoints = [
    {
      icon: "⏰",
      title: "Hours lost to admin",
      description:
        "Bookings, prices, cancellations, and FAQs eat up your mornings before you even step on court.",
    },
    {
      icon: "📱",
      title: "WhatsApp never stops",
      description:
        "Students message at all hours, and the same questions keep pulling you back to your phone.",
    },
    {
      icon: "😤",
      title: "Manual replies drain energy",
      description:
        "Repeating yourself every day makes coaching feel like customer support instead of real work.",
    },
  ];

  const guideContents = [
    "30-page practical guide with no fluff, just what works",
    "Step-by-step Twilio WhatsApp Sandbox setup for complete beginners",
    "The 5 automation templates for bookings, pricing, availability, cancellations, and FAQs",
    "10 ready-to-send message templates you can customize today",
    "Advanced automations for briefings, reminders, waitlists, and feedback",
    "3 real-world case studies from coaches in Ibiza, Mallorca, and Marbella",
    "Scaling roadmap from free tools to a full AI platform",
    "30-minute setup checklist to get your first automation live tonight",
  ];

  const faqs = [
    {
      question: "Does this require coding?",
      answer:
        "No. The playbook is built for coaches and club managers, not developers. You follow step-by-step instructions and copy proven templates.",
    },
    {
      question: "What if I'm not tech-savvy?",
      answer:
        "That is exactly who this is for. The setup is designed to be simple, practical, and usable even if you've never touched an API before.",
    },
    {
      question: "How long until it works?",
      answer:
        "Most coaches can get the core setup live in about 30 minutes and start saving time the same day.",
    },
  ];

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(22,163,74,0.18),_transparent_35%),linear-gradient(180deg,_#f7fdf8_0%,_#ffffff_32%,_#f2fbf4_100%)] text-slate-900">
      <section className="mx-auto flex w-full max-w-6xl flex-col px-6 pb-20 pt-8 sm:px-8 lg:px-12">
        <div className="mb-16 flex items-center justify-between">
          <div className="inline-flex items-center rounded-full border border-green-200 bg-white/80 px-4 py-2 text-sm font-semibold text-green-700 shadow-sm backdrop-blur">
            The Padel Trainer AI Playbook
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
              For padel coaches and club managers
            </p>
            <h1 className="max-w-3xl text-4xl font-black tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Stop Answering the Same WhatsApp Messages Every Day
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl">
              Save 10 hours per week with a practical AI playbook that shows
              you how to automate bookings, pricing, availability,
              cancellations, and FAQs in 30 minutes with no coding required.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#buy"
                className="inline-flex items-center justify-center rounded-full bg-[#16a34a] px-7 py-4 text-base font-semibold text-white shadow-lg shadow-green-600/20 transition hover:bg-green-700"
              >
                Get The Playbook for €19
              </a>
              <div className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-4 text-sm font-medium text-slate-600">
                30-minute setup. PDF delivery. No fluff.
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-green-100 bg-white/95 p-6 shadow-2xl shadow-green-900/10 sm:p-8">
            <div className="rounded-[1.5rem] bg-slate-950 p-6 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-400">
                What you get
              </p>
              <div className="mt-6 space-y-4">
                <div>
                  <p className="text-4xl font-black">€19</p>
                  <p className="text-sm text-slate-300">
                    One-time payment for the full playbook
                  </p>
                </div>
                <div className="grid gap-3 text-sm text-slate-200">
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    8 tactical modules from setup to scaling
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    10 copy-paste message templates
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    Real examples from Spanish padel clubs
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-12 sm:px-8 lg:px-12">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-700">
            The problem
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Coaching should feel like coaching, not inbox triage.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {painPoints.map((point) => (
              <div
                key={point.title}
                className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6"
              >
                <div className="text-3xl">{point.icon}</div>
                <h3 className="mt-4 text-xl font-semibold">{point.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-12 sm:px-8 lg:px-12">
        <div className="grid gap-8 rounded-[2rem] bg-[#16a34a] p-8 text-white shadow-2xl shadow-green-700/20 lg:grid-cols-[0.7fr_1.3fr] lg:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-100">
              The solution
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Everything you need to get your first automation live.
            </h2>
            <p className="mt-4 text-base leading-7 text-green-50">
              This guide distills the real system into a fast, clear playbook
              any coach can follow.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {guideContents.map((item) => (
              <div
                key={item}
                className="rounded-[1.25rem] border border-white/15 bg-white/10 px-4 py-4 text-sm leading-6 backdrop-blur"
              >
                <span className="font-semibold">✓</span> {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-6 py-12 sm:px-8 lg:px-12">
        <div className="rounded-[2rem] border border-green-100 bg-white px-6 py-8 shadow-xl shadow-green-900/5 sm:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-700">
            Social proof
          </p>
          <blockquote className="mt-5 text-2xl font-semibold leading-10 tracking-tight text-slate-900 sm:text-3xl">
            “I went from 2.5 hours of WhatsApp per day to about 20 minutes. My
            income went up €400/month because I stopped losing bookings that
            fell through the cracks.”
          </blockquote>
          <p className="mt-4 text-sm font-medium text-slate-600">
            Marco, Head Coach, Ibiza Padel Club
          </p>
        </div>
      </section>

      <section
        id="buy"
        className="mx-auto w-full max-w-4xl px-6 py-12 sm:px-8 lg:px-12"
      >
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-2xl shadow-slate-200/60 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-700">
            Pricing
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            One playbook. One evening to set it up. Long-term time back.
          </h2>
          <p className="mt-6 text-6xl font-black text-slate-950">€19</p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#16a34a] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-green-600/20 transition hover:bg-green-700"
              href="https://gumroad.com/l/padel-trainer-ai-playbook"
            >
              Buy with Card →
            </a>
            <button
              className="inline-flex min-h-14 items-center justify-center rounded-full border-2 border-[#16a34a] bg-white px-8 py-4 text-base font-semibold text-[#16a34a] transition hover:bg-green-50"
              onClick={() => {
                navigator.clipboard?.writeText('0xa8ea043e5a98c1c54a476487b299733181501c63');
                alert('Wallet address copied!\n\nSend exactly 21 USDC on Base network to:\n0xa8ea043e5a98c1c54a476487b299733181501c63\n\nThen email sapo.agency@gmail.com with your transaction hash to receive your guide instantly.');
              }}
            >
              Pay with Crypto (USDC)
            </button>
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            Card: instant download via Gumroad · Crypto: 21 USDC on Base → sapo.agency@gmail.com
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-6 py-12 sm:px-8 lg:px-12">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-700">
          FAQ
        </p>
        <div className="mt-6 space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {faq.question}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white/70 px-6 py-8 text-center text-sm text-slate-500">
        © 2026 sapo.agency
      </footer>
    </main>
  );
}
