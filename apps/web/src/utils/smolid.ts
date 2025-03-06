import { customAlphabet } from "nanoid";
import { alphanumeric } from "nanoid-dictionary";

export const smolid = customAlphabet(alphanumeric, 8);
