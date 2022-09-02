const mongoose = require("mongoose");


// Collection is table 
// document is data in table (fields)


// mongoose.connect("mongodb://localhost:27017/expressconnectdb", {useNewUrlParser : true, useUnifiedtopology : true});  //this work like promises agar fulfil ho gya toh second kam krwa da ga
mongoose.connect("mongodb://localhost:27017/expressconnectdb", { useNewUrlParser: true, useUnifiedtopology: true })
    .then(() => console.log("connection is successfull")).catch((err) => console.log(err));



////////////////////////////////////////////////// SCHEMA ////////////////////////////////////////////////

// document ka structure schema btata ha 
// kya cheeza ani cahya kya nhi ani cahya wo btaty hain Schema sa 
// default values, validator etc ya cheeza add kr saky gy schema sa


// defineing schema 
const playlistSchema = mongoose.Schema({
    // must be add (require)
    name: {
        type: String,
        required: true
    },
    ctype: String,
    videos: Number,
    author: String,
    active: Boolean,
    // add default value 
    date: {
        type: Date,
        default: Date.now
    }
})


/////////////////////////////////////   MODELS  ////////////////////////////////////////////////

// models sa hum CRUD easily create kr skty hain 
// models ko create krna matlb apna Collection(table) create kr rahy hain 
// isma hum class k sath kam kr rahy hon gy 


/////////////////////////////////////////// Collection creation ////////////////////////////////////
const Playlist = new mongoose.model("Playlist", playlistSchema)      // playlistSchema jo k hum achema create kr chuky hain

//////////////////////////////////////////// create or insert a document //////////////////////////////////////////

// const reactPlaylist = new Playlist({        // ya async type work krta ha
//     name:"React Js",
//     ctype: "Front End",
//     videos: 40,
//     author: "Qasim",
//     active: true
// })

// reactPlaylist.save()      //  ya b promise return kr raha ha 

//////////////////////////// second method with async await  (LATEST METHOD) //////////////////////////////////////////



// const createDocument = async ()=>{
//     try{

//         const reactPlaylist = new Playlist({        
//             name:"Node Js",
//             ctype: "Back End",
//             videos: 50,
//             author: "Qasim",
//             active: true
//         })
//         const result= await reactPlaylist.save()
//         console.log(result);
//     }catch(err){
//         console.log(err);
//     }
// }
// createDocument();


////////////////////////////////////////////  creating and insert(data) MANY documents  /////////////////////////

const createDocument = async () => {
    try {

        const jsPlaylist = new Playlist({
            name: "JavaScript",
            ctype: "Back End",
            videos: 55,
            author: "Qasim",
            active: true
        })
        const mongoPlaylist = new Playlist({
            name: "Mongo Js",
            ctype: "database",
            videos: 20,
            author: "Qasim",
            active: true
        })
        const mongoosePlaylist = new Playlist({
            name: "Mongoose Js",
            ctype: "database",
            videos: 15,
            author: "Qasim",
            active: true
        })
        const expressPlaylist = new Playlist({
            name: "Express Js",
            ctype: "Back End",
            videos: 35,
            author: "Qasim",
            active: true
        })
        const result = await Playlist.insertMany([jsPlaylist, mongoPlaylist, mongoosePlaylist, expressPlaylist]);
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}
// createDocument();


//////////////////////////////  READ THE DATA   ////////////////////////////////

// const getDocument = async()=>{
//     const result = await Playlist.find();
//     console.log(result);
// }

////////////////////////////////////    READ SPECIFIC DATA  /////////////////////////////

// const getDocument = async()=>{
//     const result = await Playlist.find({ctype : "Front End"});
//     console.log(result);
// }

////////////////////////////////////    READ SPECIFIC DATA with only one element  /////////////////////////////

// const getDocument = async()=>{
//     try{

//         const result = await Playlist.find({ctype : "Front End"})
//         .select({name:1})       // agar kisi data ma zyada column hain toh oska aik he column show krwana ha 
//         .limit(1);              // agar zyada data aik he name sa ho to oska aik he data dikhana ha         limit change b kr skty
//         console.log(result);
//     }catch(err){
//         console.log(err);
//     }
// }

// getDocument();








////////////////////////////	comparison operator in Mongoose OR MongoDB	///////////////////////////////////

// $eq					equal to
// $gt					greater then
// $gte				greater then equal to
// $in					matches any value in an array
// $lt					less then
// $lte				less then equal to
// $ne					not equal
// $nin				matches none of the value in an array





// const getDocument = async()=>{
//     try{

//         const result = await Playlist
//         .find({videos : {$gt: 35}})             // videos > 35 jitni b hon gi show krwa da ga 
//         .select({name:1});              
//         console.log(result);
//     }catch(err){
//         console.log(err);
//     }
// }

// getDocument();


// const getDocument = async()=>{
//     try{

//         const result = await Playlist
//         .find({videos : {$gte: 35}})             // videos >= 35 jitni b hon gi show krwa da ga 
//         .select({name:1});              
//         console.log(result);
//     }catch(err){
//         console.log(err);
//     }
// }

// getDocument();
// const getDocument = async()=>{
//     try{

//         const result = await Playlist
//         .find({videos : {$lte: 35}})             // videos <= 35 jitni b hon gi show krwa da ga 
//         .select({name:1});              
//         console.log(result);
//     }catch(err){
//         console.log(err);
//     }
// }

// getDocument();
// const getDocument = async()=>{
//     try{

//         const result = await Playlist
//         .find({videos : {$in: ["Back End", "database"]}})             // 2 condition aik dafa laga skty hain k aik array ma ya 2 values search kr k do 
//         .select({name:1});              
//         console.log(result);
//     }catch(err){
//         console.log(err);
//     }
// }

// getDocument();
// const getDocument = async()=>{
//     try{

//         const result = await Playlist
//         .find({videos : {$nin: ["Back End", "database"]}})             // in dono categories k ilawa jo b hain wo dikha day ga 
//         .select({name:1});              
//         console.log(result);
//     }catch(err){
//         console.log(err);
//     }
// }

// getDocument();











////////////////////////////	Logical operator in Mongoose OR MongoDB	///////////////////////////////////



// $and

// $not

// $nor

// $or



// const getDocument = async()=>{
//     try{

//         const result = await Playlist
//         .find({$or :  [{ ctype:"Back End"  } , { author: "Qasim" }]})             // dono ma sa aik b condition match toh output show krwa da ga
//         .select({name:1});              
//         console.log(result);
//     }catch(err){
//         console.log(err);
//     }
// }

// getDocument();
// const getDocument = async()=>{
//     try{

//         const result = await Playlist
//         .find({$and :  [{ ctype:"Back End"  } , { author: "Qasim" }]})             // dono condition match hoi toh output show krwa da ga
//         .select({name:1});              
//         console.log(result);
//     }catch(err){
//         console.log(err);
//     }
// }

// getDocument();



// //////////////////////////////////////////    COUNT THE DOCUMENTS IN MONGOOSE     /////////////////////////////



// const getDocument = async()=>{
//     try{

//         const result = await Playlist
//         .find({$and :  [{ ctype:"Back End"  } , { author: "Qasim" }]}) 
//         .select({name:1})
//         .countDocuments();                                          //      ya method count krwa k da ga k aik cheez kitni pari hoi ha          
//         console.log(result);
//     }catch(err){
//         console.log(err);
//     }
// }

// getDocument();



////////////////////////////////////////////    SORTING THE DOCUMENTS IN MONGOOSE     /////////////////////////////

const getDocument = async () => {
    try {

        const result = await Playlist
            .find({ author: "Qasim" })
            .select({ name: 1 })
            .sort({ name: -1 });                             //     if  name = 1 then Assending(a to z) & if name = -1 then decending(z to a)
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

// getDocument();


///////////////////////////////////////////// UPDATE IN MONGOOSE    ///////////////////////////////////////////

// Name												Description

// $currentDate			Sets the value of a field to current date, either as a Date or a Timestamp.

// $inc					Increments the value of the field by the specified amount.

// $min					Only updates the field if the specified value is less than the existing field value.

// $max					Only updates the field if the specified value is greater than the existing field value.

// $mul					Multiplies the value of the field by the specified amount.

// $rename				Renames a field.

// $set					Sets the value of a field in a document.

// $setOnInsert			Sets the value of a field if an update results in an insert of a document. Has no effect on update operations that modify existing documents.

// $unset				Removes the specified field from a document.






// const updateDocument = async(_id)=>{
    //     try{
        //         const result = await Playlist.updateOne({_id},{
            //             $set : {                                        // to update any value
            //                 name: "Javascript"
            //             }});
//         console.log(result);

//     }catch(err){
    //         console.log(err);
    //     }
    
    // }
    
    // updateDocument("6304a9563991024d3e12fedc");
    
    
    const updateDocument = async(_id)=>{
        try{
            const result = await Playlist.findByIdAndUpdate({_id},{
                $set : {                                        // to update any value
                    name: "JavaScript"
                }},{
                    new : true,
                    useFindAndModify: false
                });
                console.log(result);
                
            }catch(err){
        console.log(err);
    }

}

// updateDocument("6304a9563991024d3e12fedc");


///////////////////////////////////////////// DELETE IN MONGOOSE    ///////////////////////////////////////////

// const deleteDocument = async(_id)=>{
//     try{
//         const result = await Playlist.deleteOne({_id});
//         console.log(result);
//     }catch(err){
//         console.log(err);
//     }
// }

// deleteDocument("6304a9563991024d3e12fedc")

const deleteDocument = async(_id)=>{
    try{
        const result = await Playlist.findByIdAndDelete({_id});
        console.log(result);
    }catch(err){
        console.log(err);
    }
}

deleteDocument("6304a9563991024d3e12fede")