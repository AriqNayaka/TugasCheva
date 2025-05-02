const { Mahasiswa } = require("../models/mahasiswaModel");

exports.getAllMahasiswa = async (req, res) => {
  const data = await Mahasiswa.findAll();
  res.json(data);
};

exports.getMahasiswaById = async (req, res) => {
  const { id } = req.params;
  const data = await Mahasiswa.findByPk(id);
  if (!data) {
    return res.status(404).json({ message: "Mahasiswa not found" });
  }
  res.json(data);
};

exports.createMahasiswa = async (req, res) => {
  try {
    const data = await Mahasiswa.create(req.body);
    res.status(201).json(data);
  } catch (error) {
    res.status(400).json({ message: "Error creating mahasiswa", error });
  }
};

exports.updateMahasiswa = async (req, res) => {
  const { id } = req.params;
  const { npm, nama, jurusan } = req.body;
  const data = await Mahasiswa.findByPk(id);
  if (!data) {
    return res.status(404).json({ message: "Mahasiswa not found" });
  }
  try {
    await data.update({ npm, nama, jurusan });
    res.json(data);
  } catch (error) {
    res.status(400).json({ message: "Error updating mahasiswa", error });
  }
};

exports.deleteMahasiswa = async (req, res) => {
  const { id } = req.params;
  const data = await Mahasiswa.findByPk(id);
  if (!data) {
    return res.status(404).json({ message: "Mahasiswa not found" });
  }
  try {
    await data.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ message: "Error deleting mahasiswa", error });
  }
};
