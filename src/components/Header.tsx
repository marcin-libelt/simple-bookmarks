import { Button, Flex } from "@chakra-ui/react";
import useFirestore from "../hooks/useFirestore";

function SignIn() {
  const { auth, firebase } = useFirestore();

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return <Button onClick={signInWithGoogle}>Sign with Google</Button>;
}

function Header() {
  const { auth, useAuthState } = useFirestore();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const [user] = useAuthState(auth);
  return (
    <Flex as="header" color="white" justifyContent="flex-end">
      {!user ? (
        <SignIn />
      ) : (
        <>
          Hello {user.displayName}
          <Button onClick={() => auth.signOut()} colorScheme="messenger">
            Sign out
          </Button>
        </>
      )}
    </Flex>
  );
}

export default Header;
