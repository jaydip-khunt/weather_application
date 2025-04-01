export const cx = (...classNames) => classNames.filter(Boolean).join(" ");

export const parseJwt = (token) => {
    try {
        return JSON.parse(atob(token?.split(".")[1]));
    } catch (e) {
        return null;
    }
};