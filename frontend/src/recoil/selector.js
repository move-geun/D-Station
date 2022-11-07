import {selector} from "recoil";
import { UserState } from "./atoms";

export const UserStateSelector = selector({
    key: "UserStateSelector",
    get: ({get}) => {
        // 아 몰라 여기 뭐 들어가야해....
        const token = get(UserState);
        return token;
    }
})