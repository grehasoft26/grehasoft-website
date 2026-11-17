import type { AiMarketingContent } from '@/types/ai-marketing';
import AiHero from '@/components/service/ai-marketing/AiHero';
import DiscoverySection from '@/components/service/ai-marketing/DiscoverySection';
import SearchVisibilitySection from '@/components/service/ai-marketing/SearchVisibilitySection';
import ContentCreationSection from '@/components/service/ai-marketing/ContentCreationSection';
import VideoSection from '@/components/service/ai-marketing/VideoSection';
import ConnectedSection from '@/components/service/ai-marketing/ConnectedSection';
import AiProcessSection from '@/components/service/ai-marketing/AiProcessSection';
import AiWhyChooseSection from '@/components/service/ai-marketing/AiWhyChooseSection';
import AiFaqSection from '@/components/service/ai-marketing/AiFaqSection';
import EnquirySection from '@/components/service/lead-generation/EnquirySection';

interface Props {
  content: AiMarketingContent;
}

/** Section order follows the source document. */
export default function AiMarketingTemplate({ content }: Props) {
  return (
    <main className="bg-white">
      <AiHero hero={content.hero} breadcrumbLabel={content.seo.breadcrumbLabel} />
      <DiscoverySection discovery={content.discovery} />
      <SearchVisibilitySection searchVisibility={content.searchVisibility} />
      <ContentCreationSection contentCreation={content.contentCreation} />
      <VideoSection video={content.video} />
      <ConnectedSection connected={content.connected} />
      <AiProcessSection process={content.process} />
      <AiWhyChooseSection whyChoose={content.whyChoose} />
      <AiFaqSection faq={content.faq} />
      <EnquirySection enquiry={content.enquiry} />
    </main>
  );
}
