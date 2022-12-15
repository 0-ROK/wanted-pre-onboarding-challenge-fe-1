import React, { useState } from "react";
import { Card, Grid, Link } from "@mui/material";
import SignIn from "../modules/SignIn";
import SignUp from "../modules/SignUp";

enum SignPageTypes {
  SignIn,
  SignUp,
}

interface SignPageProps {
  setAuthToken: (state: string | null) => void;
}

const SignPage: React.FC<SignPageProps> = ({ setAuthToken }) => {
  const [pageType, setPageType] = useState<SignPageTypes>(SignPageTypes.SignIn);

  return (
    <div className="App-header">
      <Card style={{ padding: 80, width: "50%" }}>
        <Grid item>
          {pageType === SignPageTypes.SignIn ? (
            <>
              <SignIn setAuthToken={setAuthToken} />
              <Link
                variant="body2"
                onClick={() => setPageType(SignPageTypes.SignUp)}
                style={{
                  cursor: "pointer",
                }}
              >
                계정이 없으신가요?
              </Link>
            </>
          ) : (
            pageType === SignPageTypes.SignUp && (
              <>
                <SignUp setAuthToken={setAuthToken} />
                <Link
                  variant="body2"
                  onClick={() => setPageType(SignPageTypes.SignIn)}
                  style={{
                    cursor: "pointer",
                  }}
                >
                  이미 계정이 있습니다!
                </Link>
              </>
            )
          )}
        </Grid>
      </Card>
    </div>
  );
};

export default SignPage;
