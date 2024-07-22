import prisma from "@/libs/prisma";

export async function POST(request) {
    const { anime_mal_id, user_email, comment, username, anime_title } = await request.json();
    const data = { anime_mal_id, user_email, comment, username, anime_title };

    const createComment = await prisma.comment.create({ data });

    if (!createComment) {
        return new Response(JSON.stringify({ status: 500, isCreated: false }), {
            status: 500,
            headers: {
                "Content-Type": "application/json"
            }
        });
    } else {
        return new Response(JSON.stringify({ status: 200, isCreated: true }), {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        });
    }
}
