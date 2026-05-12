interface Props {
  service: any;
}

export default function BrandingTemplate({
  service,
}: Props) {

  const acf = service?.acf || {};

  return (
    <main className="min-h-screen bg-white">

      <section className="py-32 bg-pink-50">

        <div className="container-custom">

          <span className="text-primary uppercase tracking-[0.2em] font-bold text-sm mb-6 block">
            {acf.hero_tag}
          </span>

          <h1 className="text-5xl font-black text-dark mb-6">
            {acf.page_title}
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl">
            {acf.page_desc}
          </p>

        </div>

      </section>

    </main>
  );
}