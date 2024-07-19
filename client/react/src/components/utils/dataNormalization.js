export const dataNormalization = (initialValue) => {
    console.log(initialValue)
    const normalizedValue = {
        ...initialValue,
        year: typeof initialValue.year === 'string' ? initialValue.year.replace(/\s/g, '') : initialValue.year,
        mileage: typeof initialValue.mileage === 'string' ? initialValue.mileage.replace(/\s/g, '') : initialValue.mileage,
        fuel: typeof initialValue.fuel === 'string' ? initialValue.fuel.toUpperCase() : initialValue.fuel,
        model: typeof initialValue.model === 'string' ? initialValue.model.toUpperCase() : initialValue.model,
        brand: typeof initialValue.brand === 'string' ? initialValue.brand.toUpperCase() : initialValue.brand,
        price: typeof initialValue.price === 'string' ? initialValue.price.replace(/\s/g, '') : initialValue.price,
    };
    return normalizedValue;
};