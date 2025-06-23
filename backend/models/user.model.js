import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    lastLogin: {
      type: Date,
      default: Date.now, // Set default to current date
    },
    isVerified: {
      type: Boolean,
      default: false, // Default to false, indicating the user is not verified
    },
    resetPasswordToken: {
      type: String,
      default: null, // Default to null, indicating no reset token
    },
    resetPasswordExpiresAt: {
      type: Date,
      default: null, // Default to null, indicating no expiration date for reset token
    },
    verificationToken: {
      type: String,
      default: null, // Default to null, indicating no verification token
    },
    verificationTokenExpiresAt: {
      type: Date,
      default: null, // Default to null, indicating no expiration date for verification token
    },
  },
  { timestamps: true }
); // Automatically manage createdAt and updatedAt fields

const User = mongoose.model("User", userSchema);

export default User;
