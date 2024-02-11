import type { Statement } from "better-sqlite3";
import { db } from "../database/db";

class SimpleNameCache {
    cache = new Map<number, string>();
    tableName: string;

    addStmnt: Statement;
    getStmnt: Statement;
    deleteStmnt: Statement;
    updateStmnt: Statement;
    allStmnt: Statement;

    constructor(tableName: string) {
        this.tableName = tableName;

        this.addStmnt = db.prepare(`INSERT INTO ${tableName} VALUES(NULL, ?)`);
        this.getStmnt = db.prepare(`SELECT * FROM ${tableName} WHERE id = ?`);
        this.deleteStmnt = db.prepare(`DELETE FROM ${tableName} WHERE id = ?`);
        this.updateStmnt = db.prepare(`UPDATE ${tableName} SET name = ? WHERE id = ?`);
        this.allStmnt = db.prepare(`SELECT * FROM ${tableName}`);
    }

    add(value: string) {
        const id = this.addStmnt.run(value).lastInsertRowid as number;
        this.cache.set(id, value);
        return id;
    }

    get(id: number) {
        return this.cache.get(id) as string|undefined;
    }

    delete(id: number) {
        this.deleteStmnt.run(id);
        this.cache.delete(id);
    }

    update(id: number, value: string) {
        this.updateStmnt.run(value, id);
        this.cache.set(id, value);
    }

    values() {
        return this.cache.values();
    }

    entries() {
        return this.cache.entries();
    }

    refresh() {
        this.cache.clear();
        (this.allStmnt.all() as { id: number, name: string}[]).forEach(i => this.cache.set(i.id, i.name));
    }
}

export const category = new SimpleNameCache("category");
export const colorCache = new SimpleNameCache("color");
export const sizeCache = new SimpleNameCache("size");