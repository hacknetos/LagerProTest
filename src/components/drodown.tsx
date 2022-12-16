import { Dropdown } from "@nextui-org/react";
import DropdownSection from "@nextui-org/react/types/dropdown/dropdown-section";
import Link from "next/link";

export function AdminDropdown() {
  return (
    <Dropdown>
      <Dropdown.Button flat color={"error"}>
        Admin
      </Dropdown.Button>
      <Dropdown.Menu aria-label="Menu">
        <Dropdown.Section title="Admin Stuff">
          <Dropdown.Item key={"Uverwltung"}>User Verwaltung</Dropdown.Item>
          <Dropdown.Item key={"Rverwaltung"}>Roll Verwaltung</Dropdown.Item>
          <Dropdown.Item key={"Rooms"}>Räume Verwalten</Dropdown.Item>
          <Dropdown.Item key={"Admin Log"} withDivider color="warning">
            Log
          </Dropdown.Item>
        </Dropdown.Section>
      </Dropdown.Menu>
    </Dropdown>
  );
}
export function UserDropdown() {
  return (
    <Dropdown>
      <Dropdown.Button flat color={"secondary"}>
        User
      </Dropdown.Button>
      <Dropdown.Menu>
        <Dropdown.Item>
          <Link href={"/Ausleihen/suche"}>Geräte suchen</Link>
        </Dropdown.Item>
        <Dropdown.Section title="Ausleihen">
          <Dropdown.Item>Gerät Anvordern</Dropdown.Item>
          <Dropdown.Item>Geräte Suchen</Dropdown.Item>
        </Dropdown.Section>
        <Dropdown.Section title="Meine Ausleihen">
          <Dropdown.Item>Meine Geräte</Dropdown.Item>
          <Dropdown.Item>Status Anvordern</Dropdown.Item>
        </Dropdown.Section>
      </Dropdown.Menu>
    </Dropdown>
  );
}
export function IntigrativeDropdown() {
  return (
    <Dropdown>
      <Dropdown.Button flat color={"warning"}>
        Intigrative
      </Dropdown.Button>
      <Dropdown.Menu>
        <Dropdown.Section title="Hersteller / Lieferranten">
          <Dropdown.Item>Hersteller</Dropdown.Item>
          <Dropdown.Item>Lieferranten</Dropdown.Item>
        </Dropdown.Section>
        <Dropdown.Section title="Geräte">
          <Dropdown.Item>Verwalten</Dropdown.Item>
        </Dropdown.Section>
        <Dropdown.Section title="Änderungen">
          <Dropdown.Item>Status</Dropdown.Item>
        </Dropdown.Section>
        <Dropdown.Section title="Bestellungen">
          <Dropdown.Item>Anfragen</Dropdown.Item>
          <Dropdown.Item>Rückgaben</Dropdown.Item>
        </Dropdown.Section>
      </Dropdown.Menu>
    </Dropdown>
  );
}
export function LagerDropdown() {
  return (
    <Dropdown>
      <Dropdown.Button flat color={"warning"}>
        Lager
      </Dropdown.Button>
      <Dropdown.Menu>
        <Dropdown.Item>Geräte status</Dropdown.Item>
        <Dropdown.Item>Geräte Position</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
