import * as mongoose from 'mongoose';
import { BaseSchema } from 'src/common/base/baseSchema.schema';
import { loadedAtPlugin, ObjectId } from 'src/common/helpers/mongoose';

const RegionSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
    },
    nameAr: {
        type: String,
        required: true,
    },
    nameEn: String,
    countryId: {
        type: ObjectId,
        required: true,
        ref: 'country',
        autopopulate: { select: 'code nameAr nameEn' },
    },
    cityId: {
        type: ObjectId,
        required: true,
        ref: 'city',
        autopopulate: { select: 'code nameAr nameEn' },
    },
    ...BaseSchema,
}, {
    timestamps: true,
});

loadedAtPlugin(RegionSchema);

export {
    RegionSchema,
};
