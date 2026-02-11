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

// Section.jsx
import React, { useEffect, useState } from "react";
import { Grid, Button, Typography, Tabs, Tab } from "@mui/material";
import AlbumCard from "../Card/Card";
import Carousel from "../Carousel/Carousel";

const Section = ({ title, endpoint, isSongs = false }) => {
  const [items, setItems] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(endpoint);
        const data = await response.json();
        setItems(data);

        if (isSongs) {
          const genreResponse = await fetch("https://qtify-backend.labs.crio.do/genres");
          const genreData = await genreResponse.json();
          console.log("Genre API response:", genreData);

          setGenres([{ key: "All", label: "All" }, ...genreData.data]);

        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [endpoint, isSongs]);

  // Filter songs by genre
  const filteredItems = isSongs
    ? selectedGenre === "All"
      ? items
      : items.filter((song) => song.genre.key === selectedGenre)
    : items;

  const displayedItems = showAll ? filteredItems : filteredItems.slice(0, 7);

  return (
    <div style={{ margin: "20px" }}>
      <Grid container justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h6" sx={{ fontWeight: 600, color: "white" }}>
          {title}
        </Typography>

        {!isSongs && (
          <Button
            variant="text"
            sx={{ color: "#34C94B", textTransform: "none" }}
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Collapse" : "Show All"}
          </Button>
        )}
      </Grid>

      {isSongs && (
        // <Tabs
        //   value={selectedGenre}
        //   onChange={(e, newValue) => setSelectedGenre(newValue)}
        //   textColor="#FFFF"
        //   indicatorColor="#34C94B"
        //   sx={{
        //     "& .MuiTab-root": {
        //       color: "#fff",
        //       textTransform: "none",
        //       fontWeight: 500,
        //       marginRight: "12px",
        //       borderRadius: "16px",
        //       backgroundColor: "#121212",
        //     },
        //     "& .Mui-selected": {
        //      backgroundColor: "#121212",
        //       color: "#FFFF",
        //     },
        //   }}
        // >
        //   {genres.map((genre) => (
        //     <Tab key={genre.key} value={genre.key} label={genre.label} />
        //   ))}
        // </Tabs>
       <Tabs
          value={selectedGenre}
          onChange={(e, newValue) => setSelectedGenre(newValue)}
          indicatorColor="primary" // keep this as "primary"
          textColor="inherit"
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: "#34C94B", // 👈 custom color here
              height: "3px",              // optional thickness
              borderRadius: "2px",        // optional rounded edges
            },
            "& .MuiTab-root": {
              color: "#fff",
              textTransform: "none",
              fontWeight: 500,
              marginRight: "12px",
              borderRadius: "16px",
              backgroundColor: "#121212",
            },
            "& .Mui-selected": {
              // backgroundColor: "#34C94B",
              // color: "#000",
            },
            marginBottom: "20px"
            
          }}
        >
          {genres.map((genre) => (
            <Tab key={genre.key} value={genre.key} label={genre.label} />
          ))}
        </Tabs>
      )}

      {isSongs ? (
        <Carousel
          items={filteredItems}
          renderItem={(song) => (
            <AlbumCard
              image={song.image}
              title={song.title}
              follows={song.likes} // show Likes instead of Follows
              isSong
            />
          )}
        />
      ) : showAll ? (
        <Grid container spacing={2}>
          {displayedItems.map((album) => (
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
          items={items}
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