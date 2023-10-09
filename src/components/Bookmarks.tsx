import { Box, Grid, GridItem } from "@chakra-ui/react";
import useFirestore from "../hooks/useFirestore";
import NewBookmark from "./NewBookmark";

function Bookmarks() {
  const { auth, firestore, useCollectionData } = useFirestore();
  const bookmarksRef = firestore.collection("bookmarks");
  const query = bookmarksRef.where("user_id", "==", auth.currentUser?.uid);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const [values, loading] = useCollectionData(query);

  if (loading) {
    return <div>is loading</div>;
  }
  return (
    <Box>
      {auth.currentUser && (
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {values?.map((c, idx) => (
            <GridItem key={idx} bg="gray.700">
              {c.name}
            </GridItem>
          ))}
        </Grid>
      )}
      <NewBookmark />
    </Box>
  );
}

export default Bookmarks;
