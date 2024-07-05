import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeLastContact = async () => {
  try {
    const fileContact = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(fileContact);
    if (contacts.length > 0) {
      contacts.splice(-1, 1);
      await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');
      console.log(`Сontacts deleted.`);
    } else {
      console.log(`there are no contacts`);
    }
  } catch (error) {
    console.error('Error remove:', error);
  }
};

removeLastContact();
