// import React, { useEffect, useState } from "react";
// import { Grid, Button, Typography } from "@mui/material";
// import AlbumCard from "../Card/Card";

// const Section = ({ title }) => {
//   const [albums, setAlbums] = useState([]);
//   const [showAll, setShowAll] = useState(false);

//   useEffect(() => {
//     const fetchAlbums = async () => {
//       try {
//         const response = await fetch("https://qtify-backend.labs.crio.do/albums/top");
//         const data = await response.json();
//         setAlbums(data);
//       } catch (error) {
//         console.error("Error fetching albums:", error);
//       }
//     };

//     fetchAlbums();
//   }, []);

//   const displayedAlbums = showAll ? albums : albums.slice(0, 9);
  

//   return (
//     <div style={{ margin: "20px 20px" }}>
//     {/* <div> */}
//       <Grid container justifyContent="space-between" alignItems="center" mb={2}>
//         <Typography variant="h6" sx={{ fontWeight: 600, color: "white" }}>
//           {title}
//         </Typography>
//         <Button
//           variant="text"
//           sx={{ color: "#34C94B", textTransform: "none" }}
//           onClick={() => setShowAll(!showAll)}
//         >
//           {showAll ? "Collapse" : "Show All"}
//         </Button>
//       </Grid>

//       <Grid container spacing={2} sx={{ margin: 0, width: "100%" }}>
//         {displayedAlbums.map((album) => (
//           <Grid item xs={12} md={4} lg={3} xl={12/7} key={album.id}>
//             <AlbumCard
//               image={album.image}
//               title={album.title}
//               follows={album.follows}
//             />
//           </Grid>
//         ))}
//       </Grid>
//     </div>
//   );
// };

// export default Section;

// import React, { useEffect, useState } from "react";
// import { Grid, Button, Typography } from "@mui/material";
// import AlbumCard from "../Card/Card";

// const Section = ({ title }) => {
//   const [albums, setAlbums] = useState([]);
//   const [showAll, setShowAll] = useState(false);

//   useEffect(() => {
//     const fetchAlbums = async () => {
//       try {
//         const endpoint =
//           title === "New Albums"
//             ? "https://qtify-backend.labs.crio.do/albums/new"
//             : "https://qtify-backend.labs.crio.do/albums/top";

//         const response = await fetch(endpoint);
//         const data = await response.json();
//         setAlbums(data);
//       } catch (error) {
//         console.error("Error fetching albums:", error);
//       }
//     };

//     fetchAlbums();
//   }, [title]);

//   const displayedAlbums = showAll ? albums : albums.slice(0, 7);

//   return (
//     <div style={{ margin: "20px" }}>
//       <Grid container justifyContent="space-between" alignItems="center" mb={2}>
//         <Typography variant="h6" sx={{ fontWeight: 600, color: "white" }}>
//           {title}
//         </Typography>
//         <Button
//           variant="text"
//           sx={{ color: "#34C94B", textTransform: "none" }}
//           onClick={() => setShowAll(!showAll)}
//         >
//           {showAll ? "Collapse" : "Show All"}
//         </Button>
//       </Grid>

//       <Grid container spacing={2}>
//         {displayedAlbums.map((album) => (
//           <Grid item xs={12} sm={6} md={4} lg={3} key={album.id}>
//             <AlbumCard
//               image={album.image}
//               title={album.title}
//               follows={album.follows}
//             />
//           </Grid>
//         ))}
//       </Grid>
//     </div>
//   );
// };

// export default Section;

import React, { useEffect, useState } from "react";
import { Grid, Button, Typography } from "@mui/material";
import AlbumCard from "../Card/Card";
import Carousel from "../Carousel/Carousel";

const Section = ({ title, endpoint }) => {
  const [albums, setAlbums] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await fetch(endpoint);
        const data = await response.json();
        setAlbums(data);
      } catch (error) {
        console.error("Error fetching albums:", error);
      }
    };
    fetchAlbums();
  }, [endpoint]);

  const displayedAlbums = showAll ? albums : albums.slice(0, 7);

  return (
    <div style={{ margin: "20px" }}>
      <Grid container justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h6" sx={{ fontWeight: 600, color: "white" }}>
          {title}
        </Typography>
        <Button
          variant="text"
          sx={{ color: "#34C94B", textTransform: "none" }}
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Collapse" : "Show All"}
        </Button>
      </Grid>

      {showAll ? (
        <Grid container spacing={2}>
          {displayedAlbums.map((album) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={album.id}>
              <AlbumCard
                image={album.image}
                title={album.title}
                follows={album.follows}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Carousel
          items={albums}
          renderItem={(album) => (
            <AlbumCard
              image={album.image}
              title={album.title}
              follows={album.follows}
            />
          )}
        />
      )}
    </div>
  );
};

export default Section;