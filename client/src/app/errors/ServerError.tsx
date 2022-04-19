import { Button, Container, Divider, Paper, Typography } from "@mui/material";
import { useLocation } from "react-router";
import { history } from "../..";

interface LocationState {
  state: {
    title: string;
    status: string;
    detail: string;
  };
}

export default function ServerError() {
  // @ts-nocheck
  const { state } = useLocation() as LocationState;
  return (
    <Container component={Paper}>
      {state ? (
        <>
          <Typography variant="h3" color="error" gutterBottom>
            {state.title}
          </Typography>
          <Divider />
          <Typography>{state.detail || "Internal server error"}</Typography>
        </>
      ) : (
        <Typography variant="h3" color="error" gutterBottom>
          Server Error
        </Typography>
      )}
      <Button onClick={() => history.push("/catalog")}>
        Go back to the store
      </Button>
    </Container>
  );
}
