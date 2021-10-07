

import React from "react";
import OnboardingCard from "./OnboardingCard";
import styles from '../../styles/OnboardingSystem/ParentCard.module.css'
import { Grid } from "@material-ui/core";

const employeeCards = [
  {
    cardTitle: "Applicant1",
    cardImage:
      "https://media.istockphoto.com/photos/red-grunge-background-picture-id171316682?b=1&k=20&m=171316682&s=170667a&w=0&h=IwoqSmgveZSQhteOHNa8yJ7H0penx2yToCWA6qNXDEc=",
    cardContent: "Short Introduction by the Candidate",
  },
  {
    cardTitle: "Applicant2",
    cardImage:
      "https://media.istockphoto.com/photos/night-sky-with-stars-and-clouds-picture-id532378051?b=1&k=20&m=532378051&s=170667a&w=0&h=K-6-sbYMHOM7i7yqFFdI0VCmFOY03rLAQMHxHObJUGY=",
    cardContent: "Short Introduction by the Candidate",
  },
  {
    cardTitle: "Applicant3",
    cardImage:
      "https://media.istockphoto.com/photos/vintage-fabric-background-sb51-19621972-picture-id185234346?b=1&k=20&m=185234346&s=170667a&w=0&h=r3S45PeUx7teFDD6OAdnsxRpSd6lzqGjQhCxsTv1OSU=",
    cardContent: "Short Introduction by the Candidate",
  },
  {
    cardTitle: "Applicant4",
    cardImage:
      "https://media.istockphoto.com/photos/abstract-blue-stripes-picture-id157376698?b=1&k=20&m=157376698&s=170667a&w=0&h=Yc8LJW0kd0cbVmGCpIxoXcXFU9DSX3-9Mz2SkCpmaaA=",
    cardContent: "Short Introduction by the Candidate",
  },
];

function ParentCard() {
  return (
    <div className={styles.container}>
      <Grid xs={12} container spacing={3} >
        {employeeCards.map((employeeCard, i) => {
          return (
            <Grid item xs={12} sm={6} md={3} lg={3} xl={3}  className={styles.wrapper}>
              <OnboardingCard key={i} {...employeeCard} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default ParentCard;
