import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse, getNestedAnimeResponse } from "@/libs/api-lips";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=10");
  let recomendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry");
  recomendedAnime = {data: recomendedAnime.slice(0, 10)}

  return (
    <div>
      {/* Anime Terpopuler */}
      <section>
        <Header
          title="Paling Populer"
          linkTitle="Lihat Semua"
          linkHref="/populer"
        />
        <AnimeList api={topAnime} />
      </section>
      {/* Anime Rekomendasi */}
      <section>
        <Header
          title="Rekomendasi"
        />
        <AnimeList api={recomendedAnime} />
      </section>
    </div>
  );
};

export default Page;
