"use server";

import prisma from "@/lib/prisma";

const deleteContact = async (id: string) => {
  const contact = await prisma.contact.delete({
    where: { id: id },
  });
};

export default deleteContact;
