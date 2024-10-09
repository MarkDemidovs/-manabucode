import mongoose from "mongoose";

const accountSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    status: [{
        challenge: {
            type: String
        },
        rankDifficulty: {
            type: Number
        }
    }],
    password: {
        type: String,
        required: true,
    }
});

const AccountModel = mongoose.model('Account', accountSchema);
export default AccountModel; 
