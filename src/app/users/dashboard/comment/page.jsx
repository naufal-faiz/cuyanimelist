import Header from "@/components/Dashboard/Header";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import Link from "next/link";
import React from "react";

const Page = async () => {
  const user = await authUserSession();
  const comments = await prisma.comment.findMany({
    where: { user_email: user?.email },
  });

  return (
    <section className="mt-4 px-4 w-full">
    <Header title="My Comments" />
    <div className="grid grid-cols-1 py-4 gap-4">
      {comments.map((comment) => {
          return (
              <Link
              href={`/anime/${comment.anime_mal_id}`}
              key={comment.id}
              className="bg-myColor-primary text-myColor-dark p-4"
              >
            <p className="italic mb-2">{comment.comment}</p>
            <p className="text-sm font-bold">{comment.anime_title}</p>
          </Link>
        );
    })}
    </div>
    </section>
  );
};

export default Page;
