import CreateContact from "@/components/create-contact";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import UserCard from "@/components/user-card";
import prisma from "@/lib/prisma";

export default async function Home() {
  const contacts = await prisma.contact.findMany();

  console.log(contacts);

  if (contacts.length === 0) {
    return (
      <Card className="h-fit w-full p-8 text-center">
        <CardHeader>Phone book is empty</CardHeader>
        <CardContent>
          <CreateContact />
        </CardContent>
      </Card>
    );
  } else {
    return (
      <main className="container md:max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
        {contacts.map((contact) => (
          <UserCard
            key={contact.id}
            id={contact.id}
            name={contact.name}
            bio={contact.bio}
            email={contact.email}
            phoneNumber={contact.phoneNumber}
            createdAt={contact.createdAt}
            updatedAt={contact.updatedAt}
          />
        ))}
      </main>
    );
  }
}
