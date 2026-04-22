import { redirect } from "next/navigation";

export default function Home() {
  redirect("/mwms/inbound/management");
}
