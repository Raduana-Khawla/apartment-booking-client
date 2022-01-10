import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import apartmentBg from "../../../images/apartmentBg.jpg";
import seller from "../../../images/seller1.png";
import { Button, Typography } from "@mui/material";

const apartmentBanner = {
  background: `url(${apartmentBg})`,
  backgroundColor: "rgba(45, 58, 74, 0.9)",
  backgroundBlendMode: "darken, luminosity",
  marginTop: 15,
};

const ApartmentBanner = () => {
  return (
    <Box style={apartmentBanner} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img
            style={{ width: 400, marginTop: "-110px" }}
            src={seller}
            alt=""
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            textAlign: "left",
          }}
        >
          <Box>
            <Typography
              variant="h6"
              sx={{ mb: 5 }}
              style={{ color: "#5CE7ED" }}
            >
              Our Noor Constraction
            </Typography>
            <Typography variant="h4" style={{ color: "white" }}>
              Apartment Buildings for Sale!
            </Typography>
            <Typography
              variant="h6"
              sx={{ my: 5 }}
              style={{ color: "white", fontSize: 14, fontWeight: 300 }}
            >
              Apartment Buildings for Sale Noor Construction has thousands of
              Apartment Building listings currently available for sale on
              LoopNet.com. Save this search. To find Apartment Buildings nearby
              you, try filtering by city, county or by neighborhood name.
            </Typography>
            <Button variant="contained" style={{ backgroundColor: "#5CE7ED" }}>
              Learn More
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ApartmentBanner;
