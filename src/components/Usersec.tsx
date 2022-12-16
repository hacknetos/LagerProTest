import {
  User,
  Modal,
  Button,
  Dropdown,
  Text,
  Input,
  Spacer,
} from "@nextui-org/react";
import { useSession, signOut, signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

export default function Usersection() {
  const [visible, setVisible] = useState(false);
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const { data: session, status } = useSession();

  if (status == "authenticated") {
    return IsAuthenticated(session);
  } else if (status == "unauthenticated") {
    return Unauthorized(
      [visible, setVisible],
      [Username, setUsername],
      [Password, setPassword]
    );
  }
  return <></>;
}
function IsAuthenticated(session: any) {
  return (
    <Dropdown>
      <Dropdown.Trigger>
        <User src="../../public/User.ico" name={session.user?.name} />
      </Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Section title="UserOptins">
          <Dropdown.Item>
            <Link href={`/User/${session.user.id}/Optionen`}>Optionen</Link>
          </Dropdown.Item>
        </Dropdown.Section>
        <Dropdown.Section title="Danger Zone">
          <Dropdown.Item color={"error"}>
            <Button color={"error"} light onClick={() => signOut()}>
              Logout
            </Button>
          </Dropdown.Item>
        </Dropdown.Section>
      </Dropdown.Menu>
    </Dropdown>
  );
}

function Unauthorized(
  [visible, setVisible]: any,
  [Username, setUsername]: any,
  [Password, setPassword]: any
) {
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
  };

  return (
    <>
      <Button flat color={"success"} auto onClick={handler}>
        Login
      </Button>
      <Modal
        closeButton
        blur
        aria-labelledby="Login-form"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="Login-form" size={18}>
            Please Login
          </Text>
        </Modal.Header>
        <form>
          <Modal.Body>
            <Spacer y={1.8} />
            <Input
              autoComplete="false"
              name="username"
              id="username"
              clearable
              underlined
              labelPlaceholder="email Addres"
              value={Username}
              type="email"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <Spacer y={2.5} />
            <Input
              autoComplete="false"
              name="Password"
              id="Password"
              clearable
              underlined
              labelPlaceholder="Password"
              type={"password"}
              value={Password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button auto flat color={"error"} onClick={closeHandler}>
              Close
            </Button>
            <Button
              auto
              onClick={() => {
                // TODO Rückgabe abfangen
                signIn("credentials", {
                  redirect: false,
                  username: Username,
                  password: Password,
                });
              }}
              flat
              color={"success"}
            >
              Login
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}
