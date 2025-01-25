import clientPromise from "@/lib/mongodb";

export async function POST(req) {
    const body = await req.json();
    const client = await clientPromise
    const db = client.db("LinkTree")
    const collection = db.collection("Links")
    console.log(body);
    const user = await collection.findOne({handle: body.handle});
    console.log(user);
    if (!user && !body.link) {
        return Response.json({success:true, message:"User Does not exists"});
    }
    else if(user && !body.link){
        return Response.json({success:false, message:"User Exists", data:user});
    }
    if(!user && body.link){
        await collection.insertOne(body);
        return Response.json({success:true, message:"Done"});
    }

    return Response.json({success:false, message:"Error"});
}