/** @format */
import React from "react";

import {
  Card,
  Col,
  Row,
  Button,
  Text,
  Container,
  Grid,
  Spacer,
  Input,
  Textarea,
  Image,
} from "@nextui-org/react";
import Form from "@/components/Form";
import Layout from "@/components/Layout";
export default function contacto() {
  return (
    <Layout>
      <Grid.Container>
        <Grid.Container justify="center">
          <Grid>
            <Text className="titulo" h1>Contacto</Text>
          </Grid>
        </Grid.Container>
        <Grid.Container justify="center" xs={12}>
          <Card className="card-contacto" css={{ mw: "80%" }}>
            <Card.Body css={{ py: "$10" }}>
              <Grid.Container alignItems="center">
                <Grid.Container xs={6}>
                  <Card className="card-form-contacto"  css={{ mw: "100%",alignItems:"center" }}>
                    <Grid alignItems="center">
                      <Form></Form>
                    </Grid>
                  </Card>
                </Grid.Container>
                <Grid.Container xs={6}>
                  <Image
                    width={"90%"}
                    height={"90%"}
                    layout='intrinsic'
                    src={'/img/38.jpg'}
                    alt={'imagen'}
                    className="imagen-contacto"
                  >
                  </Image>
                </Grid.Container>
              </Grid.Container>
            </Card.Body>
          </Card>
        </Grid.Container>
      </Grid.Container>
    </Layout>
  );
}