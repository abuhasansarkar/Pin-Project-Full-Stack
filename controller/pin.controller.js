import Pin from "../models/pin.model.js";

export const createPin = async (req, res) => {
  const { media, width, height, title, description, link, board, tags, user } =
    req.body;
  console.log(req.body);

  await Pin.create({
    media,
    width,
    height,
    title,
    description,
    link,
    board,
    tags,
    user,
  });

  res.json("Created New Pin");
};

// Get All Pins
export const getAllPins = async (req, res) => {
  const pageNumber = Number(req.query.cursor) || 0;
  const LIMIT = 21;
  const pins = await Pin.find()
    .limit(LIMIT)
    .skip(pageNumber * LIMIT);

  const hasNextyPages = pins.length === LIMIT;

  await new Promise((resolve) => setTimeout(resolve, 1000));

  res
    .status(200)
    .json({ pins, nextCursor: hasNextyPages ? pageNumber + 1 : null });
};

// Get Single Pin
export const getSinglePin = async (req, res) => {
  const id = req.params.id;
  const pin = await Pin.findById({ _id: id });

  res.status(200).json(pin);
};
