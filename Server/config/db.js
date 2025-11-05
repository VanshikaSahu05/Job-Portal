import mongoose from "mongoose";

// function to connect to mongodb
const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017";
    const dbName = process.env.MONGODB_DB || "job-portal";

    // build connection string safely: if the URI already contains query params, insert DB name before them
    let uri;
    if (mongoUri.includes("?")) {
      const [base, query] = mongoUri.split("?");
      uri = base.endsWith("/")
        ? `${base}${dbName}?${query}`
        : `${base}/${dbName}?${query}`;
    } else {
      uri = mongoUri.endsWith("/")
        ? `${mongoUri}${dbName}`
        : `${mongoUri}/${dbName}`;
    }

    mongoose.connection.on("connected", () =>
      console.log("Database connected")
    );
    mongoose.connection.on("error", (err) =>
      console.error("Database connection error:", err)
    );

    // connect with sensible defaults; mongoose v6+ doesn't require these options but they're harmless
    await mongoose.connect(uri, {
      // keep defaults; options can be added here if needed
    });
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
    // rethrow so caller can decide (server startup may want to fail)
    throw err;
  }
};

export default connectDB;
