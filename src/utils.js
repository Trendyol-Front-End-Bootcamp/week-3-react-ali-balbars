export function capitalize(str) {
    if(!str) {
        return '';
    }

    let capitalized = str[0].toUpperCase() + str.slice(1);
    return capitalized;
}

export function getFormattedName(linkName) {
    if(!linkName) {
        return '';
    }
    
    let splitted = linkName.split("-");
    let capitalized = splitted.map((e) => capitalize(e));
    return capitalized.join(" ");
};