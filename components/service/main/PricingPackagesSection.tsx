'use client';

import Link from 'next/link';
import { Check } from 'lucide-react';
import { motion } from 'motion/react';

interface Props {
acf: any;
}

export default function PricingPackagesSection({ acf }: Props) {
const data =
acf?.main_service?.digital_marketing_pricing_cards || {};

if (!data?.section_title) return null;

const pricingPackages = [
{
type: data.package_type_1,
name: data.package_name_1,
cost: data.price_range_1,
desc: data.description_1,
includes: [
data.feature_1_1,
data.feature_1_2,
data.feature_1_3,
data.feature_1_4,
data.feature_1_5,
].filter(Boolean),
buttonText: data.button_text_1,
buttonUrl: data.button_url_1,
},
{
type: data.package_type_2,
name: data.package_name_2,
cost: data.price_range_2,
desc: data.description_2,
includes: [
data.feature_2_1,
data.feature_2_2,
data.feature_2_3,
data.feature_2_4,
data.feature_2_5,
].filter(Boolean),
buttonText: data.button_text_2,
buttonUrl: data.button_url_2,
},
{
type: data.package_type_3,
name: data.package_name_3,
cost: data.price_range_3,
desc: data.description_3,
includes: [
data.feature_3_1,
data.feature_3_2,
data.feature_3_3,
data.feature_3_4,
data.feature_3_5,
].filter(Boolean),
buttonText: data.button_text_3,
buttonUrl: data.button_url_3,
},
{
type: data.package_type_4,
name: data.package_name_4,
cost: data.price_range_4,
desc: data.description_4,
includes: [
data.feature_4_1,
data.feature_4_2,
data.feature_4_3,
data.feature_4_4,
data.feature_4_5,
].filter(Boolean),
buttonText: data.button_text_4,
buttonUrl: data.button_url_4,
},
{
type: data.package_type_5,
name: data.package_name_5,
cost: data.price_range_5,
desc: data.description_5,
includes: [
data.feature_5_1,
data.feature_5_2,
data.feature_5_3,
data.feature_5_4,
data.feature_5_5,
].filter(Boolean),
buttonText: data.button_text_5,
buttonUrl: data.button_url_5,
},
].filter((pkg) => pkg.name);

return ( <section
   className="section-padding bg-white"
   id="leads-pricing"
 > <div className="container-custom">


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

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

      {pricingPackages.map((pkg, i) => (
        <motion.div
          key={i}
          whileHover={{ y: -10 }}
          className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 flex flex-col justify-between hover:border-primary/30 hover:bg-white hover:shadow-xl transition-all duration-300"
        >
          <div className="space-y-6">

            <div className="space-y-2">

              <span className="text-[10px] font-bold text-accent uppercase tracking-widest block">
                {pkg.type}
              </span>

              <h3 className="text-lg font-black text-dark leading-tight">
                {pkg.name}
              </h3>

              <div className="text-2xl font-black text-primary">
                {pkg.cost}
              </div>

              <span className="text-[10px] text-gray-400 font-medium font-sans">
                Typical Monthly Range
              </span>

            </div>

            <p className="text-xs text-gray-500 leading-relaxed font-sans border-t border-gray-200/50 pt-4">
              {pkg.desc}
            </p>

            <div className="space-y-3 pt-2">

              <span className="text-[10px] font-black text-dark uppercase tracking-widest block opacity-60">
                Services Included
              </span>

              {pkg.includes.map(
                (feature, index) => (
                  <div
                    key={index}
                    className="flex gap-2.5 items-start"
                  >
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />

                    <span className="text-xs text-gray-700 font-sans">
                      {feature}
                    </span>
                  </div>
                )
              )}

            </div>

          </div>

          <div className="pt-8">

            <Link
              href={pkg.buttonUrl || '/contact'}
              className="btn-primary w-full text-center text-xs py-3.5 block rounded-xl"
            >
              {pkg.buttonText ||
                'Select Plan'}
            </Link>

          </div>

        </motion.div>
      ))}

    </div>

  </div>
</section>


);
}
