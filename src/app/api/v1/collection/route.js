// import prisma from "@/libs/prisma"

// export async function POST(request) {
//     const {anime_mal_id, user_email, anime_image, anime_title} = await request.json()
//     const data = {anime_mal_id, user_email, anime_image, anime_title}

//     const createCollection = await prisma.collection.create({ data })

//     if(!createCollection) return new Response.json({ status: 500, isCreated: false})
//     else return new Response.json({ status: 200, isCreated: true })
// }

import prisma from "@/libs/prisma";

export async function POST(request) {
    const { anime_mal_id, user_email, anime_image, anime_title } = await request.json();
    const data = { anime_mal_id, user_email, anime_image, anime_title };

    const createCollection = await prisma.collection.create({ data });

    if (!createCollection) {
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
