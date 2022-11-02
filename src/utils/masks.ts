export default function normalizeCNPJNumber (value: string | undefined) {
    if (!value) return '';

        return value
        .replace(/\D/g, '')
}
export function normalizePhoneNumber (value: string | undefined) {
    if (!value) return '';

        return value
        .replace(/\D/g, '')
}
export function normalizeCPFNumber (value: string | undefined) {
    if (!value) return '';

        return value
        .replace(/\D/g, '')
}