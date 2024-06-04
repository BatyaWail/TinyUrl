import express from "express";
import UserController from "../Controllers/UserController.js";

const UserRouter = express.Router();

UserRouter.get("/", UserController.getList);
UserRouter.get("/:id", UserController.getById);
UserRouter.post("/", UserController.add);
UserRouter.put("/:id", UserController.update);
UserRouter.delete("/:id", UserController.delete);

// Routes for managing links within a user
UserRouter.post("/:userId/links", UserController.addLink);
UserRouter.delete("/:userId/links/:linkId", UserController.removeLink);

export default UserRouter;
