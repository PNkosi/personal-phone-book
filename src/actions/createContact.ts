"use server";

import prisma from "@/lib/prisma";


const createContact = async (formData: FormData) => {
  const name = formData.get("name") as string;
  const bio = formData.get("bio") as string;
  const email = formData.get("email") as string;
  const phoneNumber = formData.get("phoneNumber") as string;

  try {
    const newContact = await prisma.contact.create({
      data: {
        name,
        bio,
        email,
        phoneNumber,
      },
    });
    console.log(newContact)
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
};

export default createContact;
