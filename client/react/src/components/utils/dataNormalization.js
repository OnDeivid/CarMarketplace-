export const dataNormalization = (initialValue) => {
    const normalizedValue = {
        ...initialValue,
        year: initialValue.year.replace(/\s/g, ''),
        mileage: initialValue.mileage.replace(/\s/g, ''),
        fuel: initialValue.fuel.toUpperCase(),
        model: initialValue.model.toUpperCase(),
        brand: initialValue.brand.toUpperCase(),
        price: initialValue.price.replace(/\s/g, ''),
    };
    return normalizedValue;
};