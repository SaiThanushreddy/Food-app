import bcrypt from "bcrypt";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
// import User from "@/models/user"; // Adjust the import path as per your project structure
// import mongoose from "mongoose";

// Ensure MongoDB connection is established
// const connectDB = async () => {
 //   if (mongoose.connection.readyState !== 1) {
// //     await mongoose.connect(process.env.MONGO_URL, {
// //       useNewUrlParser: true,
// //       useUnifiedTopology: true,
// //     });
// //   }
// // };

const authOptions = {
  secret: process.env.SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // CredentialsProvider({
    //   name: 'Credentials',
    //   credentials: {
    //     email: { label: "Email", type: "text" },
    //     password: { label: "Password", type: "password" },
    //   },
      // async authorize(credentials) {
      //   // await connectDB(); // Ensure DB is connected
      //   // const { email, password } = credentials;
      //   // const user = await User.findOne({ email });

      //   if (user && bcrypt.compareSync(password, user.password)) {
      //     return user;
      //   }
      //   return null;
      // }
    
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account.provider === "google") {
        await connectDB(); // Ensure DB is connected
        try {
          const existingUser = await User.findOne({ email: user.email });
          if (!existingUser) {
            const newUser = new User({
              email: user.email,
            });
            await newUser.save();
          }
          return true;
        } catch (error) {
          console.error("Error saving user:", error);
          return false;
        }
      }
      return true;
    }
  }
};

const handler = (req, res) => NextAuth(req, res, authOptions);

export const GET = handler;
export const POST = handler;
