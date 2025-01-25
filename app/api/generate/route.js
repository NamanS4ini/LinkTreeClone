import clientPromise from "@/lib/mongodb";

export async function POST(req) {
    const body = await req.json();
    const client = await clientPromise
    const db = client.db("LinkTree")
    const collection = db.collection("Links")
    console.log(body);
    const user = await collection.findOne({handle: body.handle});
    console.log(user);
    if (user && !user.created && !body.link) {
        return Response.json({success:true, message:"User Does not exists"});
    }
    else if(user && user.created && !body.link){
        return Response.json({success:false, message:"User Exists", data:user});
    }
    else if(!user && !body.link){
        return Response.json({success:true, message:"User Does not exists"});
    }
    if (user && body.link) {
        console.log("exists");
        await collection.findOneAndUpdate({handle: body.handle}, {$set: {link: body.link}});
        
    }
    else if(!user && body.link){
        await collection.insertOne(body);
    }


    return Response.json({success:true, message:"Link Added"});
}