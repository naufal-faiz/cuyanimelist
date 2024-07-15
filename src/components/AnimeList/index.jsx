import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  if (!api || !api.data || api.data.length === 0) {
    return <div className="min-h-screen flex justify-center items-center font-bold text-xl text-myColor-primary">Anime nya Ghoib atau emang ga ada disini</div>;
  }

  return (
    <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
      {api.data?.map((anime, index) => {
        return (
          <Link
            href={`/anime/${anime.mal_id}`}
            className="cursor-pointer text-myColor-primary hover:text-myColor-accent transition-all"
            key={index}
          >
            <Image
              src={anime.images.webp.image_url}
              alt="..."
              width={350}
              height={350}
              className="w-full h-64 object-cover"
            />
            <h3 className="font-bold md:text-xl text-md p-4">
              {anime.title}
            </h3>
          </Link>
        );
      })}
    </div>
  );
};

export default AnimeList;
