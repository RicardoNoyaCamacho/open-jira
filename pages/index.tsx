import { NextPage } from "next";
import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import { Layouts } from "@/components/layouts";
import { EntryList, NewEntry } from "@/components/ui";

const HomePage: NextPage = () => {
  return (
    <Layouts title="Home - OpenJira">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="Pendientes" />
            {/* Agregar nueva entrada */}
            <NewEntry />
            {/* Listado de entradas */}
            <EntryList status="pending" />
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="En Progreso" />
            <EntryList status="in-progress" />
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="Completados" />
            <EntryList status="finished" />
          </Card>
        </Grid>
      </Grid>
    </Layouts>
  );
};

export default HomePage;
