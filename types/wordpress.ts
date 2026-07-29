export interface Slide {
  title: string;
  video: string;
  thumbnail: string;
  label: string;
  description: string;
  slide_duration: number;
}

export interface AboutData {
  title_?: string;
  description?: string;
  feature1?: string;
  feature2?: string;
  feature3?: string;
  feature4?: string;
  feature5?: string;
  feature6?: string;
  image_url?: {
    url: string;
  };
  video_url?: string;
  experience?: string;
  projects?: string;
  satisfaction?: string;
}

export interface AwardsData {
  section_tag?: string;
  section_title?: string;
  highlight_text?: string;
  awards_count?: string;
  awards_label?: string;
  card1_title?: string;
  card1_year?: string;
  card2_title?: string;
  card2_year?: string;
  card3_title?: string;
  card3_year?: string;
  card4_title?: string;
  card4_year?: string;
  awards_media?: {
    card1_video_url?: string;
    card1_image_url?: string;
    card2_video_url?: string;
    card2_image_url?: string;
    card3_video_url?: string;
    card3_image_url?: string;
    card4_video_url?: string;
    card4_image_url?: string;
  };
}

export interface ProductsData {
  pms_badge?: string;
  pms_title_part1?: string;
  pms_title_highlight?: string;
  pms_title_part2?: string;
  pms_description?: string;
  pms_image_url?: string;
  pms_feature1_title?: string;
  pms_feature1_desc?: string;
  pms_feature2_title?: string;
  pms_feature2_desc?: string;
  pms_feature3_title?: string;
  pms_feature3_desc?: string;
  pms_feature4_title?: string;
  pms_feature4_desc?: string;
  pms_btn1_link?: string;
  pms_btn1_text?: string;
  pms_btn2_link?: string;
  pms_btn2_text?: string;
}

export interface CTAData {
  cta_badge?: string;
  cta_title_part1?: string;
  cta_title_highlight?: string;
  cta_title_part2?: string;
  cta_description?: string;
  cta_btn_link?: string;
  cta_btn_text?: string;
  cta_btn2_link?: string;
  cta_btn2_text?: string;
}

export interface HomeData {
  hero: Slide[];
  about: AboutData | null;
  awards: AwardsData | null;
  cta: CTAData | null;
  products: ProductsData | null;
  services: any[] | null;
  clients: any[] | null;
  portfolioProjects: any[] | null;
  portfolioCategories: any[] | null;
  contact: any | null;
  footerData: any | null;
  footerMenu: any[] | null;
  schemaJson: string;
}

export interface ACFPostObject {
  ID: number;
  post_title: string;
  post_name: string;
  post_type: string;
  post_status: string;
}

export interface ProjectGalleryACF {
  short_description: string;
  related_service_page?: number | ACFPostObject | null;
  related_service?: number | ACFPostObject | null;
  live_website?: string | null;
}

export interface EmbeddedServicePost {
  id: number;
  slug: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  featured_media: number;
}

export interface EmbeddedFeaturedMedia {
  id?: number;
  source_url?: string;
  code?: string;
  message?: string;
}

export interface ProjectGalleryEmbedded {
  'acf:post'?: EmbeddedServicePost[];
  'wp:featuredmedia'?: EmbeddedFeaturedMedia[];
}

export interface YoastImage {
  width: number;
  height: number;
  url: string;
  type: string;
}

export interface YoastHeadJson {
  og_image?: YoastImage[];
}

export interface ProjectGalleryItem {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  acf: ProjectGalleryACF;
  yoast_head_json?: YoastHeadJson;
  _embedded?: ProjectGalleryEmbedded;
}

