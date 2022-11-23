const mongoose = require("mongoose");

const ChatSchema = new mongoose.Schema({
    squadId: {
        type: String,
        required: true,
    },
    messages: [{
        _id: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        },
        imageURL: String,
        createdAt: {
            type: String,
            required: true
        },
        member: {
            firstName: {
                type: String,
                required: true,
            },
            lastName: {
                type: String,
                required: true,
            },
            profilePic: {
                type: String,
                required: true,
            },
        }
    }]
});

module.exports = Chat = mongoose.model('chat', ChatSchema);