import * as mongoose from 'mongoose';
import { BaseSchema } from 'src/common/base/baseSchema.schema';
import { loadedAtPlugin } from 'src/common/helpers/mongoose';

const CurrencySchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
    },
    nameAr: {
        type: String,
        required: true,
    },
    nameEn: String,
    ...BaseSchema,
}, {
    timestamps: true,
});

loadedAtPlugin(CurrencySchema);

export {
    CurrencySchema,
};
