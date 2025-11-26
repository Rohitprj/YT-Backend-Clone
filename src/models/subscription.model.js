import mongoose, { Schema } from "mongoose";

const subscriptionSchem = new Schema({
  subscriber: {
    type: Schema.Types.ObjectId, // the guy who is subscribing
    ref: "User",
  },
  channel: {
    type: Schema.Types.ObjectId, // to whom subscriber is subscribing
    ref: "User",
  },
});

export const Subscriber = new mongoose.model("Subscriber", subscriptionSchem);
