import React from 'react';
import { FaPlusCircle, FaCalendarAlt, FaCheckCircle, FaUsers, FaTasks, FaDollarSign, FaUserFriends, FaFileAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './MainContent.css';

const MainContent = () => {
  return (
    <Box sx={{ flex: 1, p: 4 }}>
      <Box sx={{ display: 'grid', gridTemplateColumns: { md: '1fr 1fr' }, gap: 2 }}>
        <Box>
          <Typography variant="h3" gutterBottom fontWeight="bold">
            Organiza tus eventos con facilidad
          </Typography>
          <Typography variant="body1" paragraph>
            EventPlanner+ te ayuda a planificar y gestionar tus eventos de manera eficiente, desde fiestas de
            cumpleaños hasta reuniones de trabajo.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button variant="contained" startIcon={<FaPlusCircle />} className="custom-button blue-button">
              Crear Evento
            </Button>
            <Button variant="contained" startIcon={<FaCalendarAlt />} className="custom-button green-button">
              Ver Eventos
            </Button>
          </Box>
        </Box>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Box component="img" src="/placeholder.svg" sx={{ width: '100%', borderRadius: 2, boxShadow: 3 }} />
        </motion.div>
      </Box>
      <Typography variant="h4" sx={{ mt: 4, mb: 2 }} fontWeight="bold">
        Características principales
      </Typography>
      <Box sx={{ display: 'grid', gridTemplateColumns: { lg: '1fr 1fr 1fr' }, gap: 2 }}>
        <FeatureCard
          icon={<FaCheckCircle className="icon blue-icon" />}
          title="Calendario de Eventos"
          description="Mantén un registro organizado de todos tus eventos en un calendario intuitivo."
        />
        <FeatureCard
          icon={<FaUsers className="icon green-icon" />}
          title="Gestión de Invitados"
          description="Crea listas de invitados, envía invitaciones y mantén un seguimiento de las respuestas."
        />
        <FeatureCard
          icon={<FaTasks className="icon yellow-icon" />}
          title="Listas de Tareas"
          description="Crea listas de tareas personalizadas para asegurarte de que nada se te olvide."
        />
        <FeatureCard
          icon={<FaDollarSign className="icon red-icon" />}
          title="Presupuestos y Gastos"
          description="Lleva un seguimiento de tu presupuesto y los gastos relacionados con el evento."
        />
        <FeatureCard
          icon={<FaUserFriends className="icon purple-icon" />}
          title="Colaboración en Equipo"
          description="Invita a tu equipo a colaborar en la planificación y organización de eventos."
        />
        <FeatureCard
          icon={<FaFileAlt className="icon orange-icon" />}
          title="Plantillas Personalizadas"
          description="Crea y guarda tus propias plantillas de eventos para ahorrar tiempo.
          .
          "
        />
      </Box>
    </Box>
  );
}

const FeatureCard = ({ icon, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="feature-card">
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            {icon}
            <Typography variant="h5" fontWeight="bold">{title}</Typography>
          </Box>
          <Typography variant="body2">{description}</Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default MainContent;
