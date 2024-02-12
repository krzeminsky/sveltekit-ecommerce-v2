import type { Cookies } from "@sveltejs/kit";
import { staffMemberCache } from "../cache/staff-member-cache";
import { generateRandomString } from "oslo/crypto";

const authorizedStaffMemberKeys = new Map<string, { expiresAt: number, key: string }>();
const randStringAlphabet = "#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~"
const KEY_EXPIRE_TIME = 60 * 30;

export function authorizeStaff(ip: string, password: string, cookies: Cookies) {
    if (password == staffMemberCache.get(ip)?.password) {
        const key = generateRandomString(32, randStringAlphabet);
        const expiresAt = Date.now() + 1000 * KEY_EXPIRE_TIME;

        authorizedStaffMemberKeys.set(ip, {
            expiresAt,
            key
        });

        cookies.set("staff_key", key, { maxAge: KEY_EXPIRE_TIME, path: '/' })
        return true;
    }

    return false;
}

export function verifyStaff(ip: string, cookies: Cookies) {
    const key = cookies.get('staff_key');
    if (!key) return false;

    const staffKey = authorizedStaffMemberKeys.get(ip);
    if (!staffKey || Date.now() > staffKey.expiresAt) return false;

    return key == staffKey.key;
}

export function isStaffMember(ip: string) {
    return staffMemberCache.has(ip);
}