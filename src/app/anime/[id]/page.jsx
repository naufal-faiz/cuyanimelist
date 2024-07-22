import { getAnimeResponse } from "@/libs/api-libs";
import VideoPlayer from "@/components/Utilities/videoPlayer";
import Image from "next/image";
import { authUserSession } from "@/libs/auth-libs";
import CollectionButton from "@/components/AnimeList/CollectionButton";
import prisma from "@/libs/prisma";
import CommentInput from "@/components/AnimeList/CommentInput";
import CommentBox from "@/components/AnimeList/CommentBox";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  const user = await authUserSession();
  const collection = await prisma.collection.findFirst({
    where: { user_email: user?.email, anime_mal_id: id },
  });

  return (
    <>
      <div className="pt-4 px-4">
        <h3 className="text-2xl text-myColor-primary font-bold">
          {anime.data.title}{" "}
          {anime.data.year != null ? `(${anime.data.year})` : ""}
        </h3>
        {!collection && user && (
          <CollectionButton
            anime_mal_id={id}
            user_email={user?.email}
            anime_image={anime.data.images.webp.image_url}
            anime_title={anime.data.title}
          />
        )}
      </div>
      <div className="pt-4 px-4 flex gap-2 text-myColor-primary overflow-x-auto">
        <div className="w-36 p-2 flex flex-col justify-center items-center rounded border border-myColor-primary">
          <h3 className="font-bold text-xl">Rank</h3>
          <p>{anime.data.rank}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-myColor-primary">
          <h3 className="font-bold p-2 text-xl">Score</h3>
          <p>{anime.data.score}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-myColor-primary">
          <h3 className="font-bold p-2 text-xl">Episode</h3>
          <p>{anime.data.episodes}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-myColor-primary">
          <h3 className="font-bold p-2 text-xl">Favorites</h3>
          <p>{anime.data.favorites}</p>
        </div>
      </div>
      <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-2 text-myColor-primary">
        <Image
          src={anime.data.images.webp.image_url}
          alt={anime.data.images.jpg.images_url}
          width={250}
          height={250}
          className="w-full rounded object-cover"
        />
        <p className="flex justify-center items-center">
          {anime.data.synopsis}
        </p>
      </div>
      <div className="p-4">
        <h3 className="text-myColor-primary text-2xl mb-2">
          Komentar Penonton
        </h3>
        <CommentBox anime_mal_id={id} />

        {user && (
          <CommentInput
            anime_mal_id={id}
            user_email={user?.email}
            username={user?.name}
            anime_title={anime.data.title}
          />
        )}
      </div>
      <div>
        <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
      </div>
    </>
  );
};

export default Page;
