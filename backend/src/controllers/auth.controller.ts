import catchErrors from "../utils/catchErrors";
import { z } from "zod";

const userSchema = z
  .object({
    email: z.string().email().min(5).max(255),
    password: z.string().min(5).max(255),
    confirmPassword: z.string().min(5).max(255),
    userAgent: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const registerHandler = catchErrors(async (req, res) => {
  //validate request
  const request = userSchema.parse({
    ...req.body,
    userAgent: req.headers["user-agent"],
  });
  //call service
  //send response
});