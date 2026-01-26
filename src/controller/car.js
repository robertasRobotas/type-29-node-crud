import CarModel from "../models/car.js";
import { v4 as uuid } from "uuid";

export const getAllCars = async (req, res) => {
  const cars = await CarModel.find({ userId: req.body.userId });

  return res.json({ cars: cars });
};

export const getCarById = async (req, res) => {
  const id = req.params.id;
  const car = await CarModel.findOne({ id: id });

  if (!car) {
    return res.status(404).json({ message: `No car with id: ${id}` });
  }

  if (car?.userId !== req.body.userId) {
    return res.status(401).json({ message: `${id} does not belong to you` });
  }

  return res.json({ car: car });
};

export const insertCar = async (req, res) => {
  const car = new CarModel({
    id: uuid(),
    ...req.body,
    userId: req.body.userId,
  });
  await car.save();

  return res.status(201).json({ car: car });
};

export const updateCarById = async (req, res) => {
  const id = req.params.id;

  const existingCar = await CarModel.find({ userId: req.body.userId });

  if (existingCar?.userId !== req.body.userId) {
    return res.status(401).json({ message: `${id} does not belong to you` });
  }

  if (!existingCar) {
    return res.status(404).json({ message: `No car with id: ${id}` });
  }

  const car = await CarModel.findOneAndUpdate(
    { id: id },
    { ...req.body },
    { new: true },
  );

  return res.status(200).json({ car: car });
};

export const deleteCarById = async (req, res) => {
  const id = req.params.id;

  const existingCar = await CarModel.find({ userId: req.body.userId });

  if (existingCar?.userId !== req.body.userId) {
    return res.status(401).json({ message: `${id} does not belong to you` });
  }

  if (!existingCar) {
    return res.status(404).json({ message: `No car with id: ${id}` });
  }

  const car = await CarModel.findOneAndDelete({ id: id });

  return res.status(200).json({ car: car });
};
