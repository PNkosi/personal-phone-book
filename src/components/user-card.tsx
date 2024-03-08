"use client";
import { formatDistanceToNow } from "date-fns";
import { Separator } from "./ui/separator";
import { User, Mail, Phone, Pencil, Trash } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "./ui/card";
import { Button } from "./ui/button";

import deleteContact from "@/actions/deleteContact";
import { revalidatePath } from "next/cache";
import { formatDate } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { updateContact } from "@/actions/updateContact";
import UpdateContactModal from "./update-contact";

export type ContactType = {
  id: string;
  name: string;
  bio: string;
  email: string;
  phoneNumber: string;
  createdAt: Date;
  updatedAt: Date;
};

const UserCard = (props: ContactType) => {
  const router = useRouter()

  const handleDelete = async (id: string) => {
    const res = await deleteContact(id);
    router.refresh()
  };

  return (
    <Card className="text-center space-y-3 h-fit bg-slate-50 dark:bg-background">
      <CardHeader>
        <User size={50} className="mx-auto" />
        <p className="text-2xl font-semibold">{props.name}</p>
        <CardDescription>{props.bio}</CardDescription>
        <Separator />
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="flex items-center gap-3">
          <Mail size={20} />
          {props.email}
        </p>
        <p className="flex items-center gap-3">
          <Phone size={20} />
          {props.phoneNumber}
        </p>
      </CardContent>
      <CardFooter className="flex-col space-y-3">
        <div className="flex flex-col">
          <small className="text-slate-600 dark:text-slate-400">
            Created {formatDate(props.createdAt)}
          </small>
          <small className="text-slate-600 dark:text-slate-400">
            Updated {formatDate(props.updatedAt)}
          </small>
        </div>
        <Separator />
        <div className="flex items-center gap-3 w-full">
          <UpdateContactModal {...props}/>
          <Button
            onClick={() => {
              handleDelete(props.id);
            }}
            className="w-full"
            variant={"secondary"}
            size="sm"
          >
            <Trash size={20} />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default UserCard;
