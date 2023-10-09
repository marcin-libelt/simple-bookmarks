import { Button } from "@chakra-ui/react";
import { User } from "firebase/auth";
import { useState } from "react";
import useFirestore from "../hooks/useFirestore";

function NewBookmark() {
  const [formValue, setFormValue] = useState("");
  const { auth, firestore, firebase } = useFirestore();
  const bookmarksRef = firestore.collection("bookmarks");

  const onFormSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const { uid } = auth.currentUser as User;

    await bookmarksRef.add({
      user_id: uid,
      name: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        value={formValue}
        onChange={(ev) => setFormValue(ev.target.value)}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}

export default NewBookmark;
