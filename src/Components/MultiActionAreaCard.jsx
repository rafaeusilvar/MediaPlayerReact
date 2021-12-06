import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

import "./MultiActionAreaCard.css";

export default function MultiActionAreaCard() {
  return (
    <div className="Cards-00">
      
      <Card sx={{ maxWidth: 250 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="340"
            image="https://s2.glbimg.com/kjK95p-B9H8HHIB2HrK0lJBYKq8=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/9/G/qfvEJ5Qdiq18A4BKQGJQ/matue4.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Matuê
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
            <CardActions>
              <Button size="small" color="primary">
                Compartilhar
              </Button>
            </CardActions>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="340"
            image="https://portalpopline.com.br/wp-content/uploads/2021/03/wesley-safadao-2.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Wesley
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
            <CardActions>
              <Button size="small" color="primary">
                Compartilhar
              </Button>
            </CardActions>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="340"
            image="https://jpimg.com.br/uploads/2021/11/design-sem-nome-2021-11-07t185339.079-e1636423745951.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Travis Scott
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
            <CardActions>
              <Button size="small" color="primary">
                Compartilhar
              </Button>
            </CardActions>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="340"
            image="https://i1.sndcdn.com/artworks-000561063351-neyihe-t500x500.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Vegas
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
            <CardActions>
              <Button size="small" color="primary">
                Compartilhar
              </Button>
            </CardActions>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
