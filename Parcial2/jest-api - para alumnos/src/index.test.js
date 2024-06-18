import { DESCRIBE } from "sequelize/lib/query-types";
import express from "express";

describe("GET /productos/:id", function () {
  // Escenario feliz: existe un producto
  it("Respuesta OK con codigo 200 y un objeto encontrado para el id = 1 ", async () => {
    const res = await request("localhost:3000").get("/api/productos/1");
    expect(res.statusCode).toEqual(200);
    expect(
      res.header["content-type"].toEqual("application/json; charset = utf-8")
    );
    expect(res.body).toEqual(
      expect.objectContaining({
        id: 1,
        nombre: expect.any(String),
      })
    );
  });
  // Camino ERROR 404
  it("Respuesta con con codigo 404 y un mensaje NO ENCONTRADO", async () => {
    const res = await request("localhost:3000").get("/api/productos/99");
    expect(res.statusCode).toEqual(404);
    expect(
      res.header["content-type"].toEqual("application/json; charset = utf-8")
    );
    expect(res.body).toEqual(
      expect.objectContaining({
        mensaje: "Producto no encontrado",
      })
    );
  });
  // Camino ERROR 500
  it("Respuesta OK con codigo 500 y mensaje ERROR INTERNO ", async () => {
    const res = await request("localhost:3000").get("/api/productos/uno");
    expect(res.statusCode).toEqual(500);
    expect(
      res.header["content-type"].toEqual("application/json; charset = utf-8")
    );
    expect(res.body).toEqual(
      expect.objectContaining({
        mensaje: "Producto no encontrado",
      })
    );
  });
});
