// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { db } from "@/database";
import { Entry, IEntry } from "@/models";
import mongoose from "mongoose";
import type { NextApiRequest, NextApiResponse } from "next";

type Data =
  | {
      message: string;
    }
  | IEntry;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: "ID no es valido " + id });
  }

  switch (req.method) {
    case "PUT":
      return updateEntry(req, res);

    case "GET":
      return getEntry(req, res);

    default:
      return res.status(400).json({ message: "Metodo no existe" });
  }
}

const updateEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { id } = req.query;

  await db.connect();

  const entryToUdate = await Entry.findById(id);

  if (!entryToUdate) {
    await db.disconnect();
    return res.status(400).json({
      message: "No hay entradas con ese ID: " + id,
    });
  }

  const {
    description = entryToUdate.description,
    status = entryToUdate.status,
  } = req.body;

  try {
    const updatedEntry = await Entry.findByIdAndUpdate(
      id,
      {
        description,
        status,
      },
      { runValidators: true, new: true }
    );
    //? Lo mismo, pero diferente forma
    //   entryToUdate.description = entryToUdate.description;
    //   entryToUdate.status = entryToUdate.status;
    //   await entryToUdate.save();
    await db.disconnect();
    res.status(200).json(updatedEntry!);
  } catch (error: any) {
    await db.disconnect();
    res.status(400).json({ message: error.errors.status.message });
  }
};

const getEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { id } = req.query;

  await db.connect();

  const entry = await Entry.findById(id);
  await db.disconnect();

  if (!entry) {
    return res.status(400).json({
      message: "No hay entradas con ese ID: " + id,
    });
  }

  res.status(200).json(entry);
};
