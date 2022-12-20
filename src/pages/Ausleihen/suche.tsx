import { Table } from "@nextui-org/react";
import { GetGeräte } from "../api/DB/singolDB";
export default async function SuchenPage() {
  const Tabele = await Geräte();
  return (
    <>
      <Tabele />
    </>
  );
}

async function Geräte() {
  const geräte: any = await GetGeräte();
  const columms = await Object.keys(geräte[0]);

  return (
    <Table
      shadow={false}
      aria-lable="Suchen"
      color={"secondary"}
      selectionMode="multiple"
    ></Table>
  );
}
