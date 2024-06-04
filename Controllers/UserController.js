import UserModel from "../Models/userModel.js";
import LinkModel from "../Models/linkModel.js";
import linkModel from "../Models/linkModel.js";

const UserController = {
    getList: async (req, res) => {
        try {
            //   const users = await UserModel.find().populate('links');
            const users = await UserModel.find()

            res.json(users);
        } catch (e) {
            res.status(400).json({ message: e.message, users: "tryyyyyyyyyyyyy" });
        }
    },
    getById: async (req, res) => {
        try {
            const user = await UserModel.findById(req.params.id).populate('links');
            //   const user = await UserModel.findById(req.params.id)

            res.json(user);
        } catch (e) {
            res.status(400).json({ message: e.message });
        }
    },
    add: async (req, res) => {
        const { name, email, password, links } = req.body;
        try {
            const newUser = await UserModel.create({ name, email, password });
            const newLinks = await LinkModel.insertMany(
                links.map((link) => ({
                    originalUrl: link.originalUrl
                }))
            );
            for (const link in newLinks) {
                newUser.links.push(link._id)
                await LinkModel.save()
            }
            await user.save();
            res.json(newUser);
        } catch (e) {
            res.status(400).json({ message: e.message });
        }
    },

    update: async (req, res) => {
        const { id } = req.params;
        try {
            const updatedUser = await UserModel.findByIdAndUpdate(id, req.body, {
                new: true,
            }).populate('links');
            res.json(updatedUser);
        } catch (e) {
            res.status(400).json({ message: e.message });
        }
    },

    delete: async (req, res) => {
        const { id } = req.params;
        try {
            const deletedUser = await UserModel.findByIdAndDelete(id);
            res.json(deletedUser);
        } catch (e) {
            res.status(400).json({ message: e.message });
        }
    },

    addLink: async (req, res) => {
        const { userId, originalUrl } = req.body;
        try {
            const user = await UserModel.findById(userId);
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            const newLink = await LinkModel.create({ originalUrl });
            user.links.push(newLink._id);
            await user.save();
            res.json(newLink);
        } catch (e) {
            res.status(400).json({ message: e.message });
        }
    },

    removeLink: async (req, res) => {
        const { userId, linkId } = req.params;
        try {
            const user = await UserModel.findById(userId);
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            user.links.pull(linkId);
            await user.save();
            await LinkModel.findByIdAndDelete(linkId);
            res.json({ message: "Link removed" });
        } catch (e) {
            res.status(400).json({ message: e.message });
        }
    }
};

export default UserController;
