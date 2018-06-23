export const composeValidators = (...validators) =>
    value => validators.reduce((error, validator) => error || validator(value), undefined);

export const required = (fieldName) => value => (value ? undefined : `Пожалуйста укажите ${fieldName}`);
export const email = (val) => val && /\S+@\S+\.\S+/.test(val) ? undefined : `Введите верный почтовый ящик`;
