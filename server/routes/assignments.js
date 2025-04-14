const express = require("express");
const router = express.Router();
const Assignment = require("../models/assignment");

// GET all assignments
router.get("/", async (req, res) => {
  try {
    const assignments = await Assignment.find();
    res.json(assignments);
    console.log(`✅ Assignments fetched, total: ${assignments.length}`);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch assignments", error });
    console.error('❌ Error while fetching assignments:', error);
  }
});

// POST new assignment
router.post("/", async (req, res) => {
  const { name, dueDate, submitted } = req.body;

  const newAssignment = new Assignment({
    name,
    dueDate,
    submitted
  });

  try {
    await newAssignment.save();
    res.status(201).json(newAssignment);
    console.log(`✅ New assignment added: ${name}`);
  } catch (error) {
    res.status(500).json({ message: "Failed to add assignment", error });
    console.error('❌ Error while adding assignment:', error);
  }
});

// GET specific assignment by ID
router.get("/:id", async (req, res) => {
  try {
    const assignment = await Assignment.findById(req.params.id);
    if (!assignment) {
      return res.status(404).json({ message: "Assignment not found" });
    }
    res.json(assignment);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch assignment", error });
    console.error('❌ Error while fetching assignment:', error);
  }
});

// PUT update assignment by ID
router.put("/:id", async (req, res) => {
  try {
    const assignment = await Assignment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(assignment);
  } catch (err) {
    res.status(500).json({ message: "Ошибка при обновлении", error: err });
  }
});

// DELETE assignment by ID
router.delete("/:id", async (req, res) => {
  try {
    await Assignment.findByIdAndDelete(req.params.id);
    res.json({ message: "Задание удалено" });
  } catch (err) {
    res.status(500).json({ message: "Ошибка при удалении", error: err });
  }
});

module.exports = router;
