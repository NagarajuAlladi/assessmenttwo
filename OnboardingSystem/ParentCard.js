import React,{useState} from "react";
import OnboardingCard from "./OnboardingCard";
import { Grid, Paper } from "@material-ui/core";
import { Box } from "@material-ui/core";
import styles from "../styles/onboarding/MediaCard.module.css";
import Analytics from "./Analytics";

const mediaCards = [
  {
    id:'1',
    title: "Cooling/Heating Supply",
    images: [
      "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
      "https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWVuJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    ],
    content: [
      "OAHU Temperature Setup",
      "Condenser Water Supplly Temperature Reset",
    ],
  },
  {
    id:'2',
    title: "Occupancy Sensors",
    images: [
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    ],
    content: ["Thermostat Setpoint", "Outdoor Air Optimization"],
  },
  {
    id:'3',
    title: "Cooling/Heating Supply",
    images: [
      "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    ],
    content: [
      "OAHU Temperature Setup",
      "Condenser Water Supplly Temperature Reset",
    ],
  },
  {
    id:'4',
    title: "Chilled Water System",
    images: [
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    ],
    content: [
      "Supply Pressure Reset",
      "Heat Exchanger",
      "Water Pump Optimization",
    ],
  },
  {
    id:'5',
    title: "Zone Heating Setpoint",
    images: [
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    ],
    content: ["ELectric Heat Lockout"],
  },
  {
    id:'6',
    title: "Chilled Water System",
    images: [
      "https://images.unsplash.com/photo-1474176857210-7287d38d27c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    ],
    content: [
      "Supply Pressure Reset",
      "Heat Exchanger",
      "Water Pump Optimization",
    ],
  },
  {
    id:'7',
    title: "AHU Control System",
    images: [
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    ],
    content: ["VFD and VAV Retrofits", "Outdoor Air DCV"],
  },
  {
    id:'8',
    title: "Cooling/Heating Supply",
    images: [
      "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    ],
    content: [
      "OAHU Temperature Setup",
      "Condenser Water Supplly Temperature Reset",
    ],
  },
  {
    id:'9',
    title: "AHU Control System",
    images: [
      "https://images.unsplash.com/photo-1602471615287-d733c59b79c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    ],
    content: ["VFD and VAV Retrofits", "Outdoor Air DCV"],
  },
];
function ParentCard() {
 
  return (
    <div className={styles.container}>
      <Box>
        <Grid xs={12} container spacing={3}>
          {mediaCards.map((mediaCard, i) => {
            
            return (
              <Grid xs={12} sm={6} md={6} lg={4} xl={4} key={mediaCard.id} item>
                <OnboardingCard {...mediaCard} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Box  className={styles.analyticsBox}>
        <Grid>
          <Analytics/>
        </Grid>
      </Box>
    </div>
  );
}

export default ParentCard;
