/**
 * Get date in format of m-d-y
 *
 * @param {string} dateString Date string, example 2020-05-03T04:41:12
 *
 * @return {string}
 */
export const getFormattedDate = (dateString) => {
    if (!dateString) {
        return "";
    }

    const date = new Date(dateString);

    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
};