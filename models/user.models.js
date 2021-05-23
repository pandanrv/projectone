const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
    {
        pseudo: {
            type: String,
            required: true,
            minLenght: 3,
            maxLenght: 50,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            validate: [isEmail],
            Lowercase: 50,
            unique: true,
            trim: true
        },
        password: {
            type: String,
            required: true,
            max: 1001,
            minlenght: 6,
        },
        likers: {
            type: String,
            require: true,
        },
        likes: {
            type: String,
            require: true,
        },
        picture: {
            type: String,
        },
        following: {
            type: [String]
        },
        followers: {
            type: [String]
        },
        bio: {
            type: String
        }
    },
    {
        timestamp: true,
    }
)

userSchema.pre('save', async function (next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt)
    next()
});

userSchema.statics.login = async function(email, password) {
    const user = await this.findOne({ email });
    if (user) {
        const auth = await bcrypt.compare(password, user.password)
        if (auth) {
            return user;
        }
        throw Error('password invalid');
    }
    throw Error('email invalid')
}


const UserModel = mongoose.model('user', userSchema);
module.exports = UserModel;