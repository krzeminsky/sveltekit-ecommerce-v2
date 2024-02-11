import { DATA_PATH } from "$env/static/private";
import Database from "better-sqlite3";

const db = new Database(`${DATA_PATH}/database.db`);

export { db }