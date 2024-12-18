import express from "express";
import {
  send_reservation,
  getAllReservations,
  getReservationById,
  updateReservation,
  deleteReservation,
} from "../controller/reservation.js";

const router = express.Router();

router.post("/send", send_reservation);

router.get("/", getAllReservations);

router.get("/:id", getReservationById);

router.put("/:id", updateReservation);

router.delete("/:id", deleteReservation);

export default router;
