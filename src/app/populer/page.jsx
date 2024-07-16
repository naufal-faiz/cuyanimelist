"use client";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import React, { useEffect, useState } from "react";
import AnimeList from "@/components/AnimeList";
import { getAnimeResponse } from "@/libs/api-libs";


const Popular = async () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const fetchData = async () => {
    const popularAnime = await getAnimeResponse("top/anime", `page=${page}`);
    setTopAnime(popularAnime);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <HeaderMenu title={`ANIME TERPOPULER #${page}`}/>
      <AnimeList api={topAnime} />
      <Pagination 
      page={page} 
      lastPage={topAnime?.pagination?.last_visible_page}
      setPage={setPage}
      />
    </>
  );
};

export default Popular;