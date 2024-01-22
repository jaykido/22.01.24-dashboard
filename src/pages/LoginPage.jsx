import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
  TextField,
  Typography,
  colors,
} from "@mui/material";
import React, { useState } from "react";
import { images } from "../assets";
import { CheckBox } from "@mui/icons-material";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [onRequest, setOnRequest] = useState(false);
  const [loginProgress, setLoginProgress] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Box
      position="relative"
      height="100vh"
      sx={{ "::-webkit-scrollbar": { display: "none" } }}
    >
      <Box
        sx={{
          position: "absolute",
          right: 0,
          height: "100%",
          width: "70%",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${images.loginBg})`,
        }}
      />

      {/* Log In Form!! */}
      <Box
        sx={{
          position: "absolute",
          left: 0,
          height: "100%",
          width: isLoggedIn
            ? "100%"
            : { xl: "30%", lg: "40%", md: "50%", xs: "100%" },
          transition: "all 1s ease-in-out",
          bgcolor: colors.common.white,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            opacity: isLoggedIn ? 0 : 1,
            transition: "all 0.3s ease-in-out",
            height: "100%",
            "::-webkit-scrollbar": { display: "none" },
          }}
        >
          {/* Logo Design */}
          <Box
            sx={{
              textAlign: "center",
              p: 5,
            }}
          >
            <img src={images.logo} alt="logo" height={90}></img>
          </Box>
          {/* Logo Design */}
          {/* Form Design */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box component="form" maxWidth={400} width="100%">
              <Stack spacing={3}>
                <TextField label="username" fullWidth />
                <TextField label="password" type="password" fullWidth />
                <Button
                  type="submit"
                  size="large"
                  variant="contained"
                  color="success"
                >
                  Sign In
                </Button>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="remember credentials"
                    />
                  </FormGroup>
                  <Typography color="error" fontWeight="bold">
                    <Link to="#"> Forgot your Password? </Link>
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Box>
          {/* Form Design */}

          {/* Footer */}
        </Box>
      </Box>

      {/* Log In Form!! */}
    </Box>
  );
};

export default LoginPage;
