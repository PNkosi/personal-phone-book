import prisma from "./prisma";

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
  };

  return new Intl.DateTimeFormat('en-US', options).format(date);
}


export async function getNumberOfContact() {
  const contacts = await prisma.contact.findMany()
  return contacts.length
}
