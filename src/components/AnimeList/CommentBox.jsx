import React from "react";
import prisma from "@/libs/prisma";
import { comment } from "postcss";

const CommentBox = async ({ anime_mal_id }) => {
    const comments = await prisma.comment.findMany({ where: { anime_mal_id } })

    return (
        <div className="grid grid-cols-4 gap-4 mb-4">
            {comments.map(comment => {
                return (
                    <div key={comment.id} className="bg-myColor-primary text-myColor-dark p-4">
                        <p className="font-bold">{comment.username}</p>
                        <p>{comment.comment}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default CommentBox;