import mangoose from "mongoose";

const userSchema = mangoose.Schema({
    name: {type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true},
    about: { type: String },
    tags: { type: [String] },
    joinedOn: { type: Date, default: Date.now },
})

export default mangoose.model("user", userSchema);