'use client';

import {
Hospital,
Building2,
GraduationCap,
ShoppingCart,
Hotel,
Globe,
Monitor,
Settings,
Briefcase,
Factory,
Plane,
Building,

HeartPulse,
 
  
  
  Truck,
  Landmark,
 
 
  BriefcaseBusiness,
  Rocket,
  ShieldCheck,
  Clapperboard,
  UtensilsCrossed,
  Dumbbell,
  Scale,
  Car,
  HardHat,
  Sprout,
  Zap,
  Wifi,
} from 'lucide-react';

interface Props {
acf: any;
}

export default function IndustriesSection({ acf }: Props) {
const data =
acf?.main_service?.industries_section || {};

if (!data?.section_title) return null;

const Icons = {
Hospital,
Building2,
GraduationCap,
ShoppingCart,
Hotel,
Globe,
Monitor,
Settings,
Briefcase,
Factory,
Plane,
Building,
HeartPulse,
 
  
  
  Truck,
  Landmark,
 
 
  BriefcaseBusiness,
  Rocket,
  ShieldCheck,
  Clapperboard,
  UtensilsCrossed,
  Dumbbell,
  Scale,
  Car,
  HardHat,
  Sprout,
  Zap,
  Wifi,

};

const industries = [
{
icon: data.industry_icon_1,
title: data.industry_title_1,
description: data.industry_description_1,
services: data.industry_services_1,
},
{
icon: data.industry_icon_2,
title: data.industry_title_2,
description: data.industry_description_2,
services: data.industry_services_2,
},
{
icon: data.industry_icon_3,
title: data.industry_title_3,
description: data.industry_description_3,
services: data.industry_services_3,
},
{
icon: data.industry_icon_4,
title: data.industry_title_4,
description: data.industry_description_4,
services: data.industry_services_4,
},
{
icon: data.industry_icon_5,
title: data.industry_title_5,
description: data.industry_description_5,
services: data.industry_services_5,
},
{
icon: data.industry_icon_6,
title: data.industry_title_6,
description: data.industry_description_6,
services: data.industry_services_6,
},
{
icon: data.industry_icon_7,
title: data.industry_title_7,
description: data.industry_description_7,
services: data.industry_services_7,
},
{
icon: data.industry_icon_8,
title: data.industry_title_8,
description: data.industry_description_8,
services: data.industry_services_8,
},
{
icon: data.industry_icon_9,
title: data.industry_title_9,
description: data.industry_description_9,
services: data.industry_services_9,
},
{
icon: data.industry_icon_10,
title: data.industry_title_10,
description: data.industry_description_10,
services: data.industry_services_10,
},
{
icon: data.industry_icon_11,
title: data.industry_title_11,
description: data.industry_description_11,
services: data.industry_services_11,
},
{
icon: data.industry_icon_12,
title: data.industry_title_12,
description: data.industry_description_12,
services: data.industry_services_12,
},
].filter((item) => item.title);

return ( <section className="section-padding bg-gray-55"> <div className="container-custom">


    <div className="text-center max-w-4xl mx-auto mb-20">

      {data?.section_subtitle && (
        <span className="text-accent font-bold uppercase tracking-[0.2em] text-sm mb-4 block">
          {data.section_subtitle}
        </span>
      )}

      <h2 className="text-4xl font-black text-dark mb-6">
        {data.section_title}
      </h2>

      {data?.section_description && (
        <p className="text-gray-600 text-lg leading-relaxed">
          {data.section_description}
        </p>
      )}

    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">

      {industries.map((industry, index) => {
        const Icon =
          Icons[
            industry.icon as keyof typeof Icons
          ] || Briefcase;

        return (
          <div
            key={index}
            className="flex flex-col bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:border-primary/30 hover:scale-105 transition-all group"
          >
            <div className="text-primary group-hover:scale-110 transition-transform flex-shrink-0 mb-4 bg-primary/5 w-10 h-10 rounded-xl flex items-center justify-center">
              <Icon className="w-5 h-5" />
            </div>

            <h4 className="font-bold text-dark text-sm mb-1 leading-snug">
              {industry.title}
            </h4>

            <p className="text-[14px] text-gray-600 mb-2 font-sans">
              {industry.description}
            </p>

            <span className="text-[10px] font-bold text-primary uppercase tracking-wider font-sans mt-auto">
              {industry.services}
            </span>
          </div>
        );
      })}

    </div>

  </div>
</section>


);
}
