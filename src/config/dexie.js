import Dexie from "dexie";

export const dexie = new Dexie('MyDatabase');
dexie.version(2).stores({
  users:'++id, firstName,lastName,userName,email,password'
});
