import React from "react";
import { Card, CardMedia, CardContent, Typography, Chip } from "@mui/material";

const AlbumCard = ({ image, title, follows }) => {
  return (
    <>
    <Card
      sx={{
        borderRadius: 2,
        overflow: "hidden",
        backgroundColor: "#FFFF",
        color: "white",
         width: "169px",          // fills its Grid cell
         height: "230px",  
      }}
    >
      <CardMedia
        component="img"
        borderRadius= "2"
        image={image}
        alt={title}
        sx={{ objectFit: "cover" ,
            flex: 2,              // image takes 2/3 of card
         width: "100%",          // fills its Grid cell
         height: "190px", 
        }}
      />
      <CardContent
        sx={{
            flex: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "8px 12px",
        }}
      >
        
        <Chip
          label={`${follows} Follows`}
          size="small"
          sx={{
            backgroundColor: "#121212",
            color: "#FFFF",
            fontWeight: 500,
            fontSize: "0.75rem",
            height: 24,
          }}
        />
      </CardContent>
      
    </Card>
    <Typography
          variant="subtitle1"
          sx={{ fontSize: "0.9rem",
            backgroundColor: "#121212",
            color: "#FFFF",
            display: "flex",
            justifyContent: "flex-start",
           }}
        >
          {title}
    </Typography>
    </>
    
  );
};

export default AlbumCard;