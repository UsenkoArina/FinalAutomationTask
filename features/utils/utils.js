export function parseMenuExpression(menuExpression) {
    // menuExpression: Women
    return [menuExpression.trim()];
}

export function priceStringToNumber(priceString) {
    const numberString = priceString.replace('$', '');

    return Number(numberString);
}