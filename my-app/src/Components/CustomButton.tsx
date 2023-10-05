import { Button, styled, useTheme } from "@mui/material";
import React from "react";

interface CustomButtonProps {
  backgroundColor: string;
  color: string;
  buttonText: string;
  heroBtn?: boolean;
  guideBtn?: boolean;
  getStartedBtn?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  backgroundColor,
  color,
  buttonText,
  heroBtn,
  guideBtn,
  getStartedBtn,
}) => {
  const theme = useTheme();

  const StyledCustomButton = styled(Button)(({ theme }) => ({
    backgroundColor: backgroundColor,
    color: color,
    fontWeight: "700",
    fontSize: "14px",
    cursor: "pointer",
    padding: "0.5rem 1.25rem",
    borderRadius: "7px",
    textTransform: "none",
    display: "block",
    border: "2px solid transparent",
    "&:hover": {
      backgroundColor: color,
      color: backgroundColor,
      borderColor: backgroundColor,
    },
    [theme.breakpoints.down("md")]: {
      margin: (heroBtn || getStartedBtn) && theme.spacing(0, "auto", 3, "auto"),
      width: (heroBtn || getStartedBtn) ? "90%" : undefined,
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: guideBtn ? theme.spacing(3) : undefined,
      width: guideBtn ? "90%" : undefined,
    },
  }));

  return <StyledCustomButton>{buttonText}</StyledCustomButton>;
};

export default CustomButton;
