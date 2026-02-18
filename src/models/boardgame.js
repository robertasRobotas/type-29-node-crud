import mongoose from "mongoose";

const boardGameSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    imgUrl: { type: String, required: true },

    rating: { type: Number, required: true },
    ratingsCount: { type: Number, required: true },

    releaseYear: { type: Number, required: true },

    minAvailableForPeopleNumber: { type: Number, required: true },
    maxAvailableForPeopleNumber: { type: Number, required: true },

    minBestPlayForPeopleNumber: { type: Number, required: true },
    maxBestPlayForPeopleNumber: { type: Number, required: true },

    recommendedStartingAge: { type: Number, required: true },

    difficulty: { type: Number, required: true },

    minPlayingTime: { type: Number, required: true },
    maxPlayingTime: { type: Number, required: true },
  },
  { timestamps: true },
);

export default mongoose.model("BoardGame", boardGameSchema);
