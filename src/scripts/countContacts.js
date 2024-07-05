import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const countContacts = async () => {
  try {
    const fileContact = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(fileContact);
    const lengthContacts = contacts.length;
    return lengthContacts;
  } catch (error) {
    console.error('Error:', error);
  }
};

console.log(await countContacts());
