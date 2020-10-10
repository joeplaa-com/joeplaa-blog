/* eslint-disable compat/compat */
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const createNoopStorage = () => {
    return {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        getItem(_key) {
            return Promise.resolve(null);
        },
        setItem(_key, value) {
            return Promise.resolve(value);
        },
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        removeItem(_key) {
            return Promise.resolve();
        },
    };
};

const storage = typeof window !== "undefined" ? createWebStorage("local") : createNoopStorage();

export default storage;