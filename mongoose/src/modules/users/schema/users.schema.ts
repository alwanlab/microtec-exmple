import * as mongoose from 'mongoose';
import { BaseSchema } from 'src/common/base/baseSchema.schema';
import * as bcrypt from 'bcryptjs';

import { loadedAtPlugin, ObjectId } from 'src/common/helpers/mongoose';

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        trim: true,
        required: true,
        dropDups: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        dropDups: true,
    },
    password: {
        type: String,
        required: true,
    },
    fullName: String,
    phone: String,
    userNotes: String,
    ...BaseSchema,
}, {
    timestamps: true,
});

loadedAtPlugin(UserSchema);

UserSchema.pre<any>('save', function (next) {
    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            return next(err);
        }
        bcrypt.hash(this.password, salt, (err2, hash: any) => {
            if (err2) {
                return next(err2);
            }
            this.password = hash;
            next();
        });
    });
});
UserSchema.methods.isPasswordMatch = bcrypt.compareSync;

export {
    UserSchema,
};
