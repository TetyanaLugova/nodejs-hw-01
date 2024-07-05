import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const fileContact = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(fileContact);

    const newContacts = Array.from({ length: number }, createFakeContact);

    contacts.push(...newContacts);

    await fs.writeFile(PATH_DB, JSON.stringify(contacts, undefined, 2), 'utf8');

    console.log(`Successfully added ${number} new contacts.`);
  } catch (error) {
    console.error('Error generating contacts:', error);
  }
};

generateContacts(2);
