export function getAge (dateCheck, dateBase?) {
    let today;
    // eslint-disable-next-line mdx/no-unused-expressions
    dateBase ? today = new Date(dateBase) : today = new Date();
    const birthDate = new Date(dateCheck);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}