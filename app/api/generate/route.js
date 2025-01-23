import clientPromise from "@/lib/mongodb";

export async function POST(req) {
    const body = await req.json();
    const client = await clientPromise
    const db = client.db("LinkTree")
    const collection = db.collection("Links")

    await collection.insertOne(body);
    console.log(body);
    return Response.json({sucess:true})
}