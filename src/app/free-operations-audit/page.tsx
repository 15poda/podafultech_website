import React from 'react';

const FreeOperationsAudit = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* VIDEO SECTION */}
      <section className="relative pt-24 pb-16 overflow-hidden text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-[120px]" />
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
          <span className="text-purple-400">Find What’s Slowing Your </span>
          <span className="text-white">Operations Down</span>
        </h2>
        <p className="text-sm text-muted-foreground mb-1">In this short video, I'll show you:</p>
        <p className="text-xs text-muted-foreground mb-5">
          • what operational bottlenecks we typically uncover • how disconnected workflows slow teams down • and what we look for during the audit
        </p>
        <div className="relative w-full max-w-3xl mx-auto aspect-video overflow-hidden rounded-2xl border border-white/10">
          <iframe
            src="https://player.vimeo.com/video/1193659622?badge=0&autopause=0&player_id=0&app_id=58479"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            className="absolute inset-0 h-full w-full"
            title="landing_page_video_1"
          ></iframe>
        </div>
        <a
          href="https://calendly.com/podasecondarybiz/free-system-audit"
          className="inline-block bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 mt-5"
        >
          Apply for a Free Operations Audit
        </a>
      </section>

      {/* WHAT THE AUDIT COVERS */}
      <section className="py-20 relative">
        <h2 className="text-3xl font-bold text-center text-purple-400 mb-10">What the Audit Covers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="card bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-purple-400 mb-4">Workflow Visibility</h3>
            <p className="text-muted-foreground">See how information moves across teams and where communication slows down.</p>
          </div>
          <div className="card bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-purple-400 mb-4">Operational Bottlenecks</h3>
            <p className="text-muted-foreground">Identify repetitive manual coordination and process friction.</p>
          </div>
          <div className="card bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-purple-400 mb-4">Systems Alignment</h3>
            <p className="text-muted-foreground">Understand where disconnected tools are creating inefficiency.</p>
          </div>
          <div className="card bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-purple-400 mb-4">Streamlining Opportunities</h3>
            <p className="text-muted-foreground">Find areas that could be simplified through better workflows or internal systems.</p>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="py-20 bg-black/40 relative">
        <h2 className="text-3xl font-bold text-center text-purple-400 mb-10">Who This Is For</h2>
        <ul className="list-disc list-inside mx-auto max-w-3xl text-muted-foreground">
          <li className="mb-4">Businesses that manage multiple workflows or departments</li>
          <li className="mb-4">Companies relying heavily on spreadsheets/manual coordination</li>
          <li className="mb-4">Organizations struggling with visibility across operations</li>
          <li className="mb-4">Teams feeling operational friction as the business grows</li>
        </ul>
      </section>

      {/* PROOF SECTION */}
      <section className="py-20 relative">
        <h2 className="text-3xl font-bold text-center text-purple-400 mb-10">Proof</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <div className="case-study bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-purple-400 mb-4">Fabrication Company</h3>
            <p className="text-muted-foreground mb-3">Disconnected departments and QuickBooks limitations were slowing operations.</p>
            <p className="text-muted-foreground">We rebuilt sales, inventory, procurement and production workflows into one centralized system.</p>
          </div>
          <div className="case-study bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-purple-400 mb-4">Microfinance Company</h3>
            <p className="text-muted-foreground mb-3">Manual spreadsheets caused tracking errors and slow collections.</p>
            <p className="text-muted-foreground">We automated loan tracking, reminders and accounting workflows.</p>
          </div>
          <div className="case-study bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-purple-400 mb-4">Logistics Company</h3>
            <p className="text-muted-foreground mb-3">Staff were overwhelmed handling shipment enquiries manually.</p>
            <p className="text-muted-foreground">We built an automated tracking assistant that delivers instant cargo status updates.</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
      <section className="py-20 bg-black/40 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold text-purple-400 mb-4">Trusted by Businesses Like Yours</h2>
          </div>

          <div className="max-w-3xl mx-auto rounded-3xl border border-primary/20 bg-primary/5 p-8">
            <div className="border-b border-white/10 pb-5 mb-6 text-left">
              <p className="font-bold">Ruth M</p>
              <p className="text-sm text-muted-foreground">Director, Realz Credit</p>
            </div>
            <p className="text-lg leading-relaxed text-foreground text-left">
              "Before Lendflow, we were managing everything in spreadsheets and it was becoming difficult to keep track as we grew. The system has made things much easier, everything is now in one place, and we don't have to worry about errors or missed updates. It's improved how we manage our operations."
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-20 bg-black/40 text-center relative">
        <h2 className="text-3xl font-bold text-purple-400 mb-10">Most operational bottlenecks stay invisible until growth starts exposing them</h2>
        <a
          href="https://calendly.com/podasecondarybiz/free-system-audit"
          className="bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700"
        >
          Apply for a Free Operations Audit
        </a>
      </section>
    </main>
  );
};

export default FreeOperationsAudit;