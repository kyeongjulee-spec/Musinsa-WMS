import { redirect } from "next/navigation";

export default function MWMSRoot() {
  redirect("/mwms/inbound/management");
}
