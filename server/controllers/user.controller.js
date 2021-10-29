import jwt from "jsonwebtoken";
import { User } from "../models/User";

export const UserController = {
	async logIn(req, res) {
		if ((req.body.username || req.body.email, req.body.password)) {
			const user = await new User({
				username: req.body.username,
				email: req.body.email,
				password: req.body.password,
			});
			user.password = await user.encyptPassword(user.password);
			const savedUser = user.save();

			const token = jwt.sign(
				{ _id: savedUser._id },
				process.env.JWT_SECRET || "token",
				{
					expiresIn: 60 * 60 * 24,
				}
			);

			return res.header("auth-token", token).status(200).json("Received");
		}

		return res.status(200).json({
			statusCode: 400,
			message: "Email or username is wrong",
		});
	},
};
