import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

import "./MultiActionAreaCard.css";

export default function MultiActionAreaCard() {
  return (
    <div className="Cards-01">    
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
            Máquina do Tempo é o álbum de estreia do rapper brasileiro Matuê, lançado em 10 de setembro de 2020.
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
      <div className="Cards-00">
      <Card sx={{ maxWidth: 250 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="340"
            image="https://i1.sndcdn.com/artworks-dk3ApATnwHlZeosy-ZjwViw-t500x500.jpg"
            />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Drake
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Certified Lover Boy é o sexto álbum de estúdio do rapper canadense Drake, lançado em 3 de setembro de 2021.
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
      <div className="Cards-00">        
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
            JackBoys é um álbum compilação de JackBoys e do rapper americano Travis. JackBoys é um coletivo de rappers. 
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
      <div className="Cards-00">        
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
            Produto Nacional 04 é uma coletânea de seus mais recentes sons que fazem a cabeça de seus fãs nas festas.
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
    
    </div>
  );
}
