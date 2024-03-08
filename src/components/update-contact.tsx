"use client";
import { useState } from "react";
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

import { useRouter } from "next/navigation";
import { updateContact } from "@/actions/updateContact";
import { ContactType } from "./user-card";
import { Pencil } from "lucide-react";

const UpdateContactModal = ({ id, name, bio, email, phoneNumber }: ContactType) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleSubmit = async (formData: FormData) => {
    const res = await updateContact(formData, id)
    router.refresh()
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="w-full" size="sm">
          <Pencil size={20} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{name} | Update Contact</DialogTitle>
          <DialogDescription>
            You are updating the contact of {name}
          </DialogDescription>
        </DialogHeader>
        <form className="grid gap-4 py-4" action={handleSubmit} method="PUT">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Full Name
            </Label>
            <Input
              name="name"
              id="name"
              defaultValue={name}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="bio" className="text-right">
              Short Description
            </Label>
            <Input name="bio" id="bio" defaultValue={bio} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email Address
            </Label>
            <Input
              name="email"
              id="email"
              type="email"
              defaultValue={email}
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
              defaultValue={phoneNumber}
              className="col-span-3"
            />
          </div>
          <DialogFooter>
            <Button type="submit">Update</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateContactModal;
