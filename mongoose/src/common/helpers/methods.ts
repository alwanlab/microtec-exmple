
let CompanySetting;
export const codePadding = function (text, length = 0) {
    length = length > 0 ? length : CompanySetting.numberingLength;
    return String(text).padStart(CompanySetting.numberingLength, '0');
}


export const setCompanySetting = function (Setting) {
    CompanySetting = Setting;
}


export const getCompanySetting = function (Setting) {
    return CompanySetting;
}