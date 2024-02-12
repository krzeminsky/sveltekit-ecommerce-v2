import { db } from "../database/db";

export type StaffMember = {
    ip: string;
    level: number;
    name: string;
    password: string;
}

const staffMembers = new Map<string, StaffMember>();

(db.prepare("SELECT * FROM staff_member").all() as StaffMember[]).forEach(m => staffMembers.set(m.ip, m));


export const staffMemberCache = {
    get(ip: string) {
        return staffMembers.get(ip);
    },

    remove(ip: string) {
        db.prepare("DELETE FROM staff_member WHERE ip = ?").run(ip);
        staffMembers.delete(ip);
    },

    add(ip: string, name: string, level: number, password: string) {
        db.prepare("INSERT INTO staff_member VALUES(?, ?, ?, ?)").run(ip, name, level, password);
        staffMembers.set(ip, { ip, name, level, password });
    },

    update(ip: string, name: string, level: number, password: string) {
        db.prepare("UPDATE staff_member SET name = ?, level = ?, password = ? WHERE ip = ?").run(name, level, password, ip);
        staffMembers.set(ip, { ip, name, level, password });
    },

    has(ip: string) {
        return staffMembers.has(ip);
    }
}