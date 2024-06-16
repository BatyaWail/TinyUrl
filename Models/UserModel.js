import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    // _id: {
    //     type: Number,
    //     // required: true,
    //     // default: 0
    // },
    name: {
        type: String,
        required: true,
        default: "default user"
    },
    email: {
        type: String,
        required: true,
        default: "user123@gmail.com"
    },
    password: {
        type: String,
        required: true,
        default: "123"
    },
    // links:[]
    links: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Link'

    }]
});

export default mongoose.model("User", UserSchema);
