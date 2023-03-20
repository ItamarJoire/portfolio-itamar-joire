import { Typography, Box, List, ListItem, ListItemText } from "@mui/material";
import { BoxContainer, TitleContainer } from "../../containers";

import IconCircle from '../../assets/images/icon-circle.svg'

export function About() {
  return (
    <Box sx={{
      display: 'flex',
      bgcolor: '#0C0C1E',
    }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <BoxContainer>
          <TitleContainer name='Sobre mim' />

          <Typography
            variant='subtitle1'
            maxWidth='100%'
            sx={{ mt: 4 }}
          >
            Olá, meu nome é Itamar Joire e gosto de desenvolver para web. Desde a concepção interface do usuário até a codificação.  Sempre com foco em garantir uma melhor experiência para o usuário. Gosto de trabalhar em equipe e de participar de todo processo criativo.
            <br />
            <br />
            Estou cursando Sistemas de Informação pela UFBA com previsão de conclusão para 2024.2.
            <br />
            <br />
            Aqui estão algumas tecnologias com as quais trabalho recentemente:
          </Typography>
          <List sx={{ display: 'flex' }}>
            <Box >
              <Box display='flex' mr={8}>
                <img src={IconCircle} alt='' style={{ marginRight: '8px' }} />
                <ListItemText primary='JavaScript' />
              </Box>
              <Box display='flex'>
                <img src={IconCircle} alt='' style={{ marginRight: '8px' }} />
                <ListItemText primary='TypeScript' />
              </Box>
              <Box display='flex'>
                <img src={IconCircle} alt='' style={{ marginRight: '8px' }} />
                <ListItemText primary='React' />
              </Box>
            </Box>

            <Box>
              <Box display='flex'>
                <img src={IconCircle} alt='' style={{ marginRight: '8px' }} />
                <ListItemText primary='Scss' />
              </Box>
              <Box display='flex'>
                <img src={IconCircle} alt='' style={{ marginRight: '8px' }} />
                <ListItemText primary='Material UI' />
              </Box>
              <Box display='flex'>
                <img src={IconCircle} alt='' style={{ marginRight: '8px' }} />
                <ListItemText primary='Figma' />
              </Box>
            </Box>
          </List>
        </BoxContainer>
      </Box >
    </Box >
  )
}