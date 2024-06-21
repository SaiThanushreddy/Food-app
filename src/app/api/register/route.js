// import { User } from "@/models/user";
// import bcrypt from "bcrypt";
// import mongoose from "mongoose";

// export async function POST(req) {
//   const body = await req.json();
//   mongoose.connect(process.env.MONGO_URL);
//   const pass = body.password;
//   if (!pass?.length || pass.length < 5) {
//     return new Response(JSON({ error: 'Password must be at least 5 characters' }), {
//       status: 300,
//       headers: { 'Content-Type': 'application/json' }
//     });
//   }
// console.log(pass);
// const notHashedPassword = pass;
//    const salt = bcrypt.genSaltSync(10);
//    body.password = bcrypt.hashSync(notHashedPassword, salt);

//   const createdUser = await User.create(body);
//   return Response.json("successfully created");
// }