// import app from "./app.js";

// app.listen(process.env.PORT, () => {
//   console.log(`SERVER HAS STARTED AT PORT ${process.env.PORT}`);
// });

import app from "./app.js";
import cors from "cors"; // Import the CORS package

// Enable CORS for requests from the frontend
app.use(
  cors({
    origin: "http://localhost:5173", // Frontend URL
    credentials: true, // Allow cookies or other credentials
  })
);

app.listen(process.env.PORT, () => {
  console.log(`SERVER HAS STARTED AT PORT ${process.env.PORT}`);
});
