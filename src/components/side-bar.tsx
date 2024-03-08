import { format } from "date-fns";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader } from "./ui/card";
import { getNumberOfContact } from "@/lib/utils";

type Props = {};

const SideBar = (props: Props) => {
  return (
    <aside className="sticky top-[10vh] hidden md:flex flex-col gap-3 w-56 h-[90vh]">
      <Card className="bg-slate-950 text-slate-100">
        <CardHeader>
          <h3 className="text-3xl">Welcome</h3>
          {format(new Date(), "do MMMM yyyy")}
          <CardDescription>
            {format(new Date(), "'Today is a' eeee")}
          </CardDescription>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader className="">
          Contacts
          <CardDescription className="my-3">
            You have {getNumberOfContact()} contacts
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="bg-accent p-3 rounded-xl">
        <p>
          Developed by{" "}
          <Link
            className="text-blue-500"
            href="https://perfectnkosi.vercel.app"
            target="_blank"
          >
            Perfect Nkosi
          </Link>
        </p>
        <small>{new Date().getFullYear()}</small>
      </div>
    </aside>
  );
};

export default SideBar;
