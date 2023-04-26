// const admin = require("./firebase-admin");

// const isAuthenticated = async (req, res, next) => {
//   const authHeader = req.headers.authorization;

//   if (!authHeader || !authHeader.startsWith("Bearer ")) {
//     res.status(401).send("Unauthorized");
//     return;
//   }

//   const idToken = authHeader.split("Bearer ")[1];

//   try {
//     const decodedToken = await admin.auth().verifyIdToken(idToken);
//     req.user = decodedToken;
//     next();
//   } catch (error) {
//     console.error(error);
//     res.status(401).send("Unauthorized");
//   }
// };

// module.exports = isAuthenticated;
