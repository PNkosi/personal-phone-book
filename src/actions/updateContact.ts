"use server"

import prisma from "@/lib/prisma"

export const updateContact = async (formData: FormData, id: string) => {
    const name = formData.get("name") as string;
    const bio = formData.get("bio") as string;
    const email = formData.get("email") as string;
    const phoneNumber = formData.get("phoneNumber") as string;
    
    const contact = await prisma.contact.update({
        where: { id: id },
        data: {
            name,
            bio,
            email,
            phoneNumber,
            updatedAt: new Date()
        }
    })
}