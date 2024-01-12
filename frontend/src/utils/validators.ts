import i18next from 'i18next';

export type FieldValue = Date | boolean | string | undefined | null;
export type FieldValidator = (value: FieldValue) => string | undefined | null;

export const required: FieldValidator = value => (value ? undefined : i18next.t('common:commons.validators.required'));