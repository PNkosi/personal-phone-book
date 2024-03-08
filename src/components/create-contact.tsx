"use client"
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import prisma from "@/lib/prisma";
import createContact from "@/actions/createContact";
import { useRouter } from "next/navigation";

const CreateContactModal = () => {
  const router = useRouter()

  const handleSubmit = async (formData: FormData) => {
    console.log(formData)
    await createContact(formData)
    router.refresh()
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Create Contact</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create New Contact</DialogTitle>
          <DialogDescription>
            Add a new contact to your phone book
          </DialogDescription>
        </DialogHeader>
        <form
          className="grid gap-4 py-4"
          action={handleSubmit}
          method="POST"
        >
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Full Name
            </Label>
            <Input
              name="name"
              id="name"
              defaultValue=""
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="bio" className="text-right">
              Short Description
            </Label>
            <Input name="bio" id="bio" defaultValue="" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email Address
            </Label>
            <Input
              name="email"
              id="email"
              type="email"
              defaultValue=""
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="phone" className="text-right">
              Phone Number
            </Label>
            <Input
              name="phoneNumber"
              id="phone"
              type="phone"
              defaultValue=""
              className="col-span-3"
            />
          </div>
          <DialogFooter>
            <Button type="submit">
              Create Contact
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateContactModal;
