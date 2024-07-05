import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const fileContact = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(fileContact);

    const newContact = createFakeContact();

    contacts.push(newContact);

    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');
    console.log(`Successfully added one new contacts.`);
  } catch (error) {
    console.error('Error generating contacts:', error);
  }
};

addOneContact();
