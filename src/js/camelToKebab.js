function camelToKebab(str) {
    return str.replace(/[A-Z]|-\d+|\d+/g, (match, offset) => {
        return (offset ? (match[0] === "-" ? "" : "-") : "") + (match.length === 1 ? match.toLowerCase() : match);
    });
}

export default camelToKebab;
