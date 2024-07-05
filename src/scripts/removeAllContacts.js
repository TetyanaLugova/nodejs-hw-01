import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeAllContacts = async () => {
  try {
    const fileContact = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(fileContact);
    contacts.length = 0;
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');
    console.log(`Сontacts deleted.`);
  } catch (error) {
    console.error('Error remove:', error);
  }
};

removeAllContacts();
