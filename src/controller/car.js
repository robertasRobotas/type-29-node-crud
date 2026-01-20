let cars = [
  { id: "a1b2c3d4e5", model: "BMW", year: "2025" },
  { id: "f6g7h8i9j0", model: "Audi", year: "2024" },
  { id: "k1l2m3n4o5", model: "Mercedes-Benz", year: "2023" },
  { id: "p6q7r8s9t0", model: "Volkswagen", year: "2022" },
  { id: "u1v2w3x4y5", model: "Toyota", year: "2021" },
  { id: "z6a7b8c9d0", model: "Honda", year: "2020" },
  { id: "e1f2g3h4i5", model: "Ford", year: "2019" },
  { id: "j6k7l8m9n0", model: "Tesla", year: "2018" },
  { id: "o1p2q3r4s5", model: "Volvo", year: "2017" },
  { id: "t6u7v8w9x0", model: "Porsche", year: "2016" },
];

export const getAllCars = (req, res) => {
  return res.json({ cars: cars });
};

export const getCarById = (req, res) => {
  const id = req.params.id;

  const car = cars.find((c) => {
    return c.id === id;
  });

  return res.json({ car: car });
};

export const insertCar = (req, res) => {
  const car = req.body;
  cars.push(car);

  return res.status(201).json({ car: car });
};

export const updateCarById = (req, res) => {
  const id = req.params.id;

  const updateData = req.body;

  const idx = cars.findIndex((c) => {
    return c.id === id;
  });

  cars[idx] = { ...cars[idx], ...updateData };

  return res.status(200).json({ car: cars[idx] });
};

export const deleteCarById = (req, res) => {
  const id = req.params.id;

  const deletedCar = cars.find((c) => {
    return c.id === id;
  });

  const remainingCars = cars.filter((c) => {
    return c.id !== id;
  });

  cars = remainingCars;

  return res.status(200).json({ car: deletedCar });
};
