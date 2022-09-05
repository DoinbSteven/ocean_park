import {isMobile} from "react-device-detect";

export function autoWidthVW(width){
    if(isMobile){
        return width/375*100+"vw";
    }
    return width/1920*100+"vw";
}

