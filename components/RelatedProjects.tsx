import { useEffect, useState } from "react";

import Link from "next/link";
const API = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;
export default
function RelatedProjects({ currentId }: any) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`${API}/portfolio?_embed`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">

        <h2 className="text-3xl font-bold mb-8">
          Related Works
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {items
            .filter((item: any) => item.id !== currentId)
            .slice(0, 2)
            .map((item: any) => {
              const image =
                item._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

              return (
                <Link
                  key={item.id}
                  href={`/portfolio/${item.slug}`}
                >
                  <div className="group">

                    <img
                      src={image}
                      className="rounded-2xl mb-4"
                      alt=""
                    />

                    <h3 className="font-bold text-lg group-hover:text-primary">
                      {item.title?.rendered || "No Title"}
                    </h3>

                    <span className="text-primary text-sm">
                      View Case Study →
                    </span>

                  </div>
                </Link>
              );
            })}
        </div>

      </div>
    </section>
  );
}