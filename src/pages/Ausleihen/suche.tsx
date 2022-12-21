import { Button, Table } from "@nextui-org/react";
import { GetGeräte } from "../api/DB/DB";
import connection from "../api/DB/DBcon";
import style from "./Tabeln.module.css";

export const config = {};

export default function SuchenPage() {
  const columns = [
    { label: "ID" },
    { label: "Category" },
    { label: "Manufactor" },
    { label: "StorageID" },
    { label: "network" },
    { label: "modelname" },
    { label: "Seriennummer" },
    { label: "assetName" },
    { label: "lastctive" },
    { label: "inactiveSince" },
    { label: "description" },
    { label: "amount" },
    { label: "status" },
    { label: "Options" },
  ];
  const rows = [
    {
      ID: 1,
      Category: "Monitor",
      Manufactor: "MSi",
      StorageID: "1",
      network: "",
      modelname: "Test1",
      Seriennummer: "23q42342352352345",
      assetName: "Test",
      lastActive: "19.11.1999",
      inactiveSince: "01.01.2000",
      description: "is a Monitor",
      amount: 5,
      status: "available",
    },
  ];
  return (
    <Table
      aria-label="Example table with dynamic content"
      selectionMode="multiple"
      css={{
        height: "auto",
        minWidth: "100%",
      }}
    >
      <Table.Header columns={columns}>
        {columns.map((column) => {
          return Buildcolum(column);
        })}
      </Table.Header>
      <Table.Body items={rows}>
        {(item: any) => (
          <Table.Row key={item.ID}>
            {(columnKey) => {
              if (columnKey == "Options") {
                return (
                  <Table.Cell>
                    <div className={style.buttonCell}>
                      <Button color={"success"} size="xs">
                        Info
                      </Button>
                      <Button color={"warning"} size="xs">
                        Edit
                      </Button>
                      <Button color={"error"} size="xs">
                        Delite
                      </Button>
                    </div>
                  </Table.Cell>
                );
              }
              return <Table.Cell>{item[columnKey]}</Table.Cell>;
            }}
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  );
}
function Buildcolum(col: any) {
  const { label } = col || {};
  return <Table.Column key={label}>{label}</Table.Column>;
}
