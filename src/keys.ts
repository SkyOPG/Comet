import { getEnvVar } from "./utils/env.js";

export const Keys = {
    clientToken: getEnvVar('CLIENT_TOKEN'),
    mongoURI: getEnvVar('MONGO')
} as const;

export default Keys;