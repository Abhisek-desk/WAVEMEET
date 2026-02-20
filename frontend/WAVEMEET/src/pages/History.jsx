import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import { Container } from "@mui/material";

import { IconButton } from "@mui/material";
export default function History() {
  const { getHistoryOfUser } = useContext(AuthContext);

  const [meetings, setMeetings] = useState([]);

  const routeTo = useNavigate();

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const history = await getHistoryOfUser();
        setMeetings(history);
      } catch {
        // IMPLEMENT SNACKBAR
      }
    };

    fetchHistory();
  }, []);

  let formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  return (
    <Container maxWidth="lg" style={{ paddingTop: "20px" }}>
      <Box display="flex" alignItems="center" mb={3}>
        <IconButton onClick={() => routeTo("/home")}>
          <HomeIcon fontSize="large" />
        </IconButton>
        <Typography variant="h4" style={{ marginLeft: "10px" }}>Meeting History</Typography>
      </Box>

      <div className="historyContainer">
        {meetings.length !== 0 ? (
          meetings.map((e, i) => (
            <Card key={i} variant="outlined" sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Meeting Code
                </Typography>
                <Typography variant="h6" component="div">
                  {e.meetingCode}
                </Typography>
                <Typography sx={{ mt: 1.5 }} color="text.secondary">
                  Date: {formatDate(e.date)}
                </Typography>
              </CardContent>
            </Card>
          ))
        ) : (
          <Typography>No meeting history found.</Typography>
        )}
      </div>
    </Container>
  );
}
