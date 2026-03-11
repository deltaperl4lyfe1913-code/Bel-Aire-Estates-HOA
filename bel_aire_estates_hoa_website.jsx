export default function BelAireEstatesHOAWebsite() {
  const announcements = [
    "Spring HOA Meeting — April 15 at 7:00 PM",
    "Community Cleanup Day — May 3",
    "Pool opens Memorial Day weekend",
  ];

  const documents = [
    "Community Bylaws",
    "Covenants & Restrictions",
    "Architectural Review Request",
    "Meeting Minutes",
  ];

  const boardMembers = [
    "Board President",
    "Vice President",
    "Treasurer",
    "Secretary",
  ];

  const faqs = [
    {
      q: "How do I submit an architectural request?",
      a: "Complete the Architectural Review Request form and send it to the HOA email for board review.",
    },
    {
      q: "Where can residents find HOA documents?",
      a: "Documents are listed in the Documents section and can be replaced with your actual HOA files.",
    },
    {
      q: "How are announcements shared?",
      a: "Important notices, meeting reminders, and neighborhood updates are posted on the home page.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8f5ef] text-slate-800">
      <header className="bg-gradient-to-r from-[#0f2747] via-[#183765] to-[#0f2747] text-white">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#d4af37]/40 bg-white/10 shadow-lg backdrop-blur">
              <div className="text-center leading-tight">
                <div className="text-2xl font-bold tracking-widest text-[#f2d57a]">BA</div>
                <div className="text-[10px] uppercase tracking-[0.35em] text-white/80">Est.</div>
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-wide md:text-4xl">Bel Aire Estates</h1>
              <p className="mt-1 text-sm uppercase tracking-[0.3em] text-[#f2d57a]">Homeowners Association</p>
            </div>
          </div>

          <nav className="flex flex-wrap gap-3 text-sm font-medium">
            {['Home', 'Announcements', 'Documents', 'Events', 'Board', 'FAQ', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="rounded-full border border-white/15 bg-white/10 px-4 py-2 transition hover:bg-white/20"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(212,175,55,0.16),_transparent_30%)]" />
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center">
          <div className="relative z-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#a78423]">Welcome Home</p>
            <h2 className="text-4xl font-bold leading-tight text-[#102947] md:text-5xl">
              A polished community website for Bel Aire Estates residents.
            </h2>
            <p className="mt-5 max-w-xl text-lg text-slate-600">
              Share HOA updates, meeting notices, neighborhood documents, events, and board information in one elegant, resident-friendly place.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#documents" className="rounded-2xl bg-[#0f2747] px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-[1.02]">
                View Documents
              </a>
              <a href="#contact" className="rounded-2xl border border-[#c8a94a] bg-[#f8f5ef] px-6 py-3 font-semibold text-[#0f2747] transition hover:bg-[#f5edd5]">
                Contact HOA
              </a>
            </div>
          </div>

          <div className="relative z-10">
            <div className="rounded-[2rem] border border-[#d8c38a] bg-[#fffdfa] p-8 shadow-2xl">
              <div className="mb-5 flex items-center justify-between">
                <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#a78423]">Community Snapshot</span>
                <span className="rounded-full bg-[#f5edd5] px-3 py-1 text-xs font-semibold text-[#7b6319]">Resident Hub</span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-[#f7f1e1] p-5">
                  <div className="text-2xl font-bold text-[#102947]">24/7</div>
                  <div className="mt-1 text-sm text-slate-600">Access to notices and HOA resources</div>
                </div>
                <div className="rounded-2xl bg-[#eef3f8] p-5">
                  <div className="text-2xl font-bold text-[#102947]">1 Site</div>
                  <div className="mt-1 text-sm text-slate-600">For announcements, docs, and events</div>
                </div>
                <div className="rounded-2xl bg-[#eef3f8] p-5">
                  <div className="text-2xl font-bold text-[#102947]">HOA</div>
                  <div className="mt-1 text-sm text-slate-600">Board details and governance information</div>
                </div>
                <div className="rounded-2xl bg-[#f7f1e1] p-5">
                  <div className="text-2xl font-bold text-[#102947]">Easy</div>
                  <div className="mt-1 text-sm text-slate-600">Ready to customize with your real content</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl space-y-8 px-6 py-12">
        <section id="announcements" className="rounded-[2rem] bg-white p-8 shadow-lg ring-1 ring-slate-200">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#a78423]">Latest Updates</p>
              <h3 className="mt-2 text-2xl font-bold text-[#102947]">Community Announcements</h3>
            </div>
            <span className="rounded-full bg-[#102947] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white">Active Notices</span>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {announcements.map((item) => (
              <div key={item} className="rounded-3xl border border-[#eadfb7] bg-[#fffdfa] p-5 shadow-sm">
                <div className="mb-3 h-2 w-14 rounded-full bg-[#d4af37]" />
                <p className="font-medium text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr]">
          <section id="documents" className="rounded-[2rem] bg-[#102947] p-8 text-white shadow-lg">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#f2d57a]">Resources</p>
            <h3 className="mt-2 text-2xl font-bold">HOA Documents</h3>
            <p className="mt-3 max-w-2xl text-white/80">
              Replace these placeholders with your real HOA files, governing documents, forms, and downloadable meeting materials.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {documents.map((doc) => (
                <div key={doc} className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                  <div className="text-sm uppercase tracking-[0.2em] text-[#f2d57a]">Document</div>
                  <div className="mt-2 text-lg font-semibold">{doc}</div>
                  <button className="mt-4 rounded-xl bg-[#d4af37] px-4 py-2 text-sm font-semibold text-[#102947]">
                    Add File Link
                  </button>
                </div>
              ))}
            </div>
          </section>

          <section id="events" className="rounded-[2rem] bg-white p-8 shadow-lg ring-1 ring-slate-200">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#a78423]">Calendar</p>
            <h3 className="mt-2 text-2xl font-bold text-[#102947]">Upcoming Events</h3>
            <div className="mt-6 space-y-4">
              {[
                ['Apr 15', 'Quarterly HOA Meeting', 'Clubhouse · 7:00 PM'],
                ['May 03', 'Community Cleanup Day', 'Neighborhood Entrance · 9:00 AM'],
                ['May 25', 'Pool Opening Weekend', 'Community Pool · 10:00 AM'],
              ].map(([date, title, detail]) => (
                <div key={title} className="flex gap-4 rounded-3xl bg-[#f8f5ef] p-4">
                  <div className="min-w-20 rounded-2xl bg-[#102947] px-3 py-4 text-center text-white">
                    <div className="text-sm font-semibold uppercase">{date.split(' ')[0]}</div>
                    <div className="text-xl font-bold">{date.split(' ')[1]}</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-[#102947]">{title}</div>
                    <div className="text-slate-600">{detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <section id="board" className="rounded-[2rem] bg-white p-8 shadow-lg ring-1 ring-slate-200">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#a78423]">Leadership</p>
            <h3 className="mt-2 text-2xl font-bold text-[#102947]">HOA Board</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {boardMembers.map((member) => (
                <div key={member} className="rounded-3xl border border-slate-200 p-5">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef3f8] text-lg font-bold text-[#102947]">
                    {member
                      .split(' ')
                      .map((word) => word[0])
                      .join('')
                      .slice(0, 2)}
                  </div>
                  <div className="text-lg font-semibold text-[#102947]">{member}</div>
                  <div className="text-sm text-slate-500">Add board member name here</div>
                </div>
              ))}
            </div>
          </section>

          <section id="faq" className="rounded-[2rem] bg-[#f7f1e1] p-8 shadow-lg">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#a78423]">Resident Help</p>
            <h3 className="mt-2 text-2xl font-bold text-[#102947]">Frequently Asked Questions</h3>
            <div className="mt-6 space-y-4">
              {faqs.map((item) => (
                <div key={item.q} className="rounded-3xl bg-white p-5 shadow-sm">
                  <div className="font-semibold text-[#102947]">{item.q}</div>
                  <div className="mt-2 text-slate-600">{item.a}</div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section id="contact" className="rounded-[2rem] bg-gradient-to-r from-[#102947] to-[#183765] p-8 text-white shadow-2xl">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#f2d57a]">Get In Touch</p>
              <h3 className="mt-2 text-3xl font-bold">Contact Bel Aire Estates HOA</h3>
              <p className="mt-4 max-w-xl text-white/80">
                Replace this sample contact information with your official HOA email, phone number, mailing address, and office hours.
              </p>
              <div className="mt-6 space-y-2 text-sm text-white/90">
                <div>Email: info@belaireestateshoa.com</div>
                <div>Phone: (000) 000-0000</div>
                <div>Office Address: Add HOA mailing address here</div>
              </div>
            </div>

            <div className="rounded-[2rem] bg-white p-6 text-slate-800 shadow-xl">
              <div className="grid gap-4">
                <input className="rounded-2xl border border-slate-200 px-4 py-3 outline-none" placeholder="Your Name" />
                <input className="rounded-2xl border border-slate-200 px-4 py-3 outline-none" placeholder="Email Address" />
                <textarea className="min-h-32 rounded-2xl border border-slate-200 px-4 py-3 outline-none" placeholder="Message to the HOA" />
                <button className="rounded-2xl bg-[#d4af37] px-5 py-3 font-semibold text-[#102947]">Send Message</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>© 2026 Bel Aire Estates HOA. All rights reserved.</div>
          <div className="uppercase tracking-[0.25em] text-[#a78423]">Elegant community living</div>
        </div>
      </footer>
    </div>
  );
}
