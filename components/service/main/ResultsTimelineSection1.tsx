'use client';

interface Props {
acf: any;
}

export default function ResultsTimelineSection({ acf }: Props) {
const data =
acf?.main_service?.digital_marketing_results_timeline_1 || {};

if (!data?.section_title) return null;

const resultsTimeline = [
{
channel: data.channel_1,
initial: data.initial_results_1,
significant: data.significant_results_1,
compound: data.long_term_results_1,
},
{
channel: data.channel_2,
initial: data.initial_results_2,
significant: data.significant_results_2,
compound: data.long_term_results_2,
},
{
channel: data.channel_3,
initial: data.initial_results_3,
significant: data.significant_results_3,
compound: data.long_term_results_3,
},
{
channel: data.channel_4,
initial: data.initial_results_4,
significant: data.significant_results_4,
compound: data.long_term_results_4,
},
{
channel: data.channel_5,
initial: data.initial_results_5,
significant: data.significant_results_5,
compound: data.long_term_results_5,
},
{
channel: data.channel_6,
initial: data.initial_results_6,
significant: data.significant_results_6,
compound: data.long_term_results_6,
},
{
channel: data.channel_7,
initial: data.initial_results_7,
significant: data.significant_results_7,
compound: data.long_term_results_7,
},
{
channel: data.channel_8,
initial: data.initial_results_8,
significant: data.significant_results_8,
compound: data.long_term_results_8,
},
].filter((item) => item.channel);

return ( 
<section className="section-padding bg-gray-50 border-t border-b border-gray-100"> <div className="container-custom">


    <div className="text-center max-w-4xl mx-auto mb-16">

      {data?.section_subtitle && (
        <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block">
          {data.section_subtitle}
        </span>
      )}

      <h2 className="text-4xl font-black text-dark mb-6">
        {data.section_title}
      </h2>

      {data?.section_description && (
        <p className="text-gray-600">
          {data.section_description}
        </p>
      )}

    </div>

    <div className="overflow-x-auto rounded-[2rem] border border-gray-150 bg-white shadow-xl max-w-5xl mx-auto">
      <table className="w-full text-left border-collapse font-sans min-w-[700px]">

        <thead>
          <tr className="bg-gray-100/60 text-dark border-b border-gray-200">
            <th className="p-6 text-xs font-extrabold uppercase">
             Campaign Metric
            </th>
            <th className="p-6 text-xs font-extrabold uppercase">
            Typical Performance Improvement
            </th>
            <th className="p-6 text-xs font-extrabold uppercase">
            Benchmark Timeframe
            </th>
            
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-150 text-xs text-gray-600">
          {resultsTimeline.map((row, idx) => (
            <tr
              key={idx}
              className="hover:bg-gray-50/50 transition-colors"
            >
              <td className="p-6 font-bold text-dark text-sm">
                {row.channel}
              </td>

              <td className="p-6 text-primary-600 font-semibold">
                {row.initial}
              </td>

              <td className="p-6 text-emerald-600 font-semibold">
                {row.significant}
              </td>

              <td className="p-6 italic font-medium">
                {row.compound}
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>

    {data?.bottom_text && (
      <p className="text-center text-xs text-gray-500 mt-8 max-w-3xl mx-auto leading-relaxed font-sans">
        {data.bottom_text}
      </p>
    )}

  </div>
</section>


);
}
