import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";


const Page = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`);
  const topAnime = await response.json();

  return (
    <div>
      {/* Anime Terpopuler */}
      <section>
      <Header title="Paling Populer" linkTitle="Lihat Semua" linkHref="/populer"/>
      <AnimeList api={topAnime} />
      </section>

      {/* Anime Terbaru */}
      <section>
      <Header title="Anime Terbaru" linkTitle="Ikuti Sekarang" linkHref="/new"/>
      <AnimeList api={topAnime} />
      </section>
    </div>
  );
};

export default Page;