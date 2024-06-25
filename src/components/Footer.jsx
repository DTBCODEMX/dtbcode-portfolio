import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', p: 3, boxShadow: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="body2">
          © 2024 EventPlanner+. Todos los derechos reservados.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Link href="/terms-of-service" color="inherit">
            Términos de Servicio
          </Link>
          <Link href="/privacy-policy" color="inherit">
            Política de Privacidad
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
