import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const getAllContacts = async () => {
  try {
    const fileContact = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(fileContact);
    return contacts;
  } catch (error) {
    console.error('Error read:', error);
  }
};

console.log(await getAllContacts());
