import { db } from "../database/db";

export type StaffMember = {
    id: number;
    ip: string;
    level: number;
    name: string;
}

const staffMembers = new Map<string, StaffMember>();

(db.prepare("SELECT * FROM staff_member").all() as StaffMember[]).forEach(m => staffMembers.set(m.ip, m));


export const staffMemberCache = {
    get(ip: string) {
        return staffMembers.get(ip);
    },

    has(ip: string) {
        return staffMembers.has(ip);
    }
}