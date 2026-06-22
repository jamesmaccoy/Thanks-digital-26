import { comparisonFeatures } from "@/components/pricing/pricingData";

function CheckMark() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function CrossMark() {
  return <span className="text-[#444]">—</span>;
}

function CellValue({ value }) {
  if (typeof value === "boolean") return value ? <CheckMark /> : <CrossMark />;
  return <span className="text-sm font-medium">{value}</span>;
}

export default function PricingComparison() {
  return (
    <section className="py-16 lg:py-24 px-6 md:px-10 border-t border-[#222] bg-[#0a0a0a] 3xl:max-w-[1400px] 3xl:mx-auto">
      <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6 mb-12 lg:mb-16">
        <div>
          <div className="text-xs uppercase tracking-[0.28em] text-textGray mb-4">
            Compare
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter">
            Feature-by-feature.
          </h2>
        </div>
        <p className="text-textGray text-sm md:text-base max-w-sm leading-relaxed">
          Every plan includes Figma source files, dedicated designer, and
          rollover hours. Here&apos;s what differs.
        </p>
      </div>

      {/* Desktop table */}
      <div className="hidden lg:block rounded-2xl border border-[#222] overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-[#111]">
              <th className="text-left text-sm font-medium text-textGray py-4 px-6 w-1/3">
                Feature
              </th>
              <th className="text-center text-sm font-medium py-4 px-6">Growth</th>
              <th className="text-center text-sm font-medium py-4 px-6 bg-[#1a1a1a]">
                Scale
                <span className="ml-2 text-xs bg-white text-black px-2 py-0.5 rounded-full">
                  Popular
                </span>
              </th>
              <th className="text-center text-sm font-medium py-4 px-6">Enterprise</th>
            </tr>
          </thead>
          <tbody>
            {comparisonFeatures.map((row, idx) => (
              <tr
                key={row.feature}
                className={`border-t border-[#222] ${idx % 2 === 0 ? "" : "bg-[#080808]"}`}
              >
                <td className="text-sm text-textGray py-4 px-6">{row.feature}</td>
                <td className="text-center py-4 px-6">
                  <div className="flex justify-center">
                    <CellValue value={row.growth} />
                  </div>
                </td>
                <td className="text-center py-4 px-6 bg-[#111]/40">
                  <div className="flex justify-center">
                    <CellValue value={row.scale} />
                  </div>
                </td>
                <td className="text-center py-4 px-6">
                  <div className="flex justify-center">
                    <CellValue value={row.enterprise} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="lg:hidden space-y-4">
        {["growth", "scale", "enterprise"].map((planKey) => (
          <div
            key={planKey}
            className={`rounded-2xl border p-5 ${
              planKey === "scale"
                ? "border-[#333] bg-[#1a1a1a]"
                : "border-[#222] bg-[#111]"
            }`}
          >
            <h3 className="text-lg font-medium mb-4 capitalize">
              {planKey}
              {planKey === "scale" && (
                <span className="ml-2 text-xs bg-white text-black px-2 py-0.5 rounded-full">
                  Popular
                </span>
              )}
            </h3>
            <div className="space-y-3">
              {comparisonFeatures.map((row) => {
                const val = row[planKey];
                if (val === false) return null;
                return (
                  <div key={row.feature} className="flex justify-between items-center text-sm">
                    <span className="text-textGray">{row.feature}</span>
                    <CellValue value={val} />
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
