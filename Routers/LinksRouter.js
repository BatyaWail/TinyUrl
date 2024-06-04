// import express from "express";
// // import LinksController from "../Controllers/LinksController.js";
// import LinksController from "../Controllers/linkController.js";

// const LinksRouter = express.Router();

// LinksRouter.get("/", LinksController.getList);
// LinksRouter.post("/", LinksController.add);
// LinksRouter.put("/:id", LinksController.update);
// LinksRouter.delete("/:id", LinksController.delete);

// export default LinksRouter;
import express from "express";
// import LinksController from "../Controllers/LinksController.js"; // Ensure this path is correct
import LinksController from "../Controllers/LinksController.js";

const LinksRouter = express.Router();

LinksRouter.get("/", LinksController.getList);
LinksRouter.post("/", LinksController.add);
LinksRouter.put("/:id", LinksController.update);
LinksRouter.delete("/:id", LinksController.delete);

export default LinksRouter;

