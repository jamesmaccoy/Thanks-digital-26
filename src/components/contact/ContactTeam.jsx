import { teamContacts } from "@/components/contact/contactData";

export default function ContactTeam() {
  return (
    <section className="py-16 lg:py-24 px-6 md:px-10 border-t border-[#222] 3xl:max-w-[1400px] 3xl:mx-auto">
      <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6 mb-12 lg:mb-16">
        <div>
          <div className="text-xs uppercase tracking-[0.28em] text-textGray mb-4">
            Your contacts
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter">
            Talk to the right person.
          </h2>
        </div>
        <p className="text-textGray text-sm md:text-base max-w-sm leading-relaxed">
          Not sure who to reach out to? Start with Sarah — she&apos;ll route you
          to the right team member.
        </p>
      </div>

      {/* Profile cards — style inspired by home HeroSection profile card & footer contact */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
        {teamContacts.map((member) => (
          <div
            key={member.name}
            className="rounded-2xl border border-[#222] bg-[#111] p-4 lg:p-5 hover:border-[#444] transition-colors group"
          >
            <img
              src={member.avatar}
              alt=""
              className="w-full h-44 md:h-52 object-cover rounded-xl mb-4 grayscale group-hover:grayscale-0 transition duration-500"
            />
            <div className="flex items-center gap-2 text-xs text-textGray mb-3">
              {member.available && (
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              )}
              {member.slots}
            </div>
            <h3 className="text-xl font-medium">{member.name}</h3>
            <p className="text-sm text-textGray mb-3">{member.role}</p>
            <p className="text-sm text-textGray leading-relaxed mb-5">
              {member.desc}
            </p>
            <button className="w-full bg-white text-black py-2.5 rounded-xl font-medium text-sm hover:bg-gray-200 transition-colors">
              Book a 15-Min Call
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
