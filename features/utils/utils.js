export function parseMenuExpression(menuExpression) {
    // menuExpression: Women
    return [menuExpression.trim()];
}

// REVIEW: Where is this used? Is it just copied from previous project?
export function priceStringToNumber(priceString) {
    const numberString = priceString.replace('$', '');

    return Number(numberString);
}