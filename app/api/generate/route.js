import clientPromise from "@/lib/mongodb";

export async function POST(req) {
    const body = await req.json();
    const client = await clientPromise
    const db = client.db("LinkTree")
    const collection = db.collection("Links")
    console.log(body);
    const user = await collection.findOne({handle: body.handle});
    console.log(user);
    if (user) {
        console.log("exists");
        await collection.findOneAndUpdate({handle: body.handle}, {$set: {link: body.link}});
        
    }
    else{
        await collection.insertOne(body);
    }


    return Response.json({sucess:true, message:"Link Added"});
}