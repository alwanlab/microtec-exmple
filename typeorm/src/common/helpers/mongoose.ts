import * as mongoose from 'mongoose';
import * as mongoosePaginate from 'mongoose-paginate-v2';
// import * as mongooseI18n from 'mongoose-i18n-localize';
import * as mongooseAutopopulate from 'mongoose-autopopulate';
import * as enums from 'src/common/json/enums.json';

export const loadedAtPlugin = (schema) => {
    schema.plugin(mongoosePaginate);
    // schema.plugin(mongooseI18n, {
    //     locales: ['ar', 'en'],
    // });
    schema.plugin(mongooseAutopopulate);
    return schema;
};

export const ObjectId = mongoose.Schema.Types.ObjectId;
export const Enums = enums;
