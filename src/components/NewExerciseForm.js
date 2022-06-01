import { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";

function NewExerciseForm({ id }) {
  const [form, setForm] = useState({
    workout_type: "",
    date: "",
    difficulty: "",
    duration: "",
  });
  console.log(id);
  function handleSubmit(e) {
    e.preventDefault();

    const newExercise = {
      user_id: id,
      date: form.date,
      difficulty: form.difficulty,
      duration: form.duration,
      workout_type: form.workout_type,
    };

    fetch("http://localhost:9292/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newExercise),
    }).then((r) => r.json());

    setForm({
      workout_type: "",
      date: "",
      difficulty: "",
      duration: "",
    });
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  console.log(form);
  return (
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Workout type</Form.Label>
          <Form.Select
            onChange={handleChange}
            value={form.workout_type}
            name="workout_type"
          >
            <option>Choose...</option>
            <option>Run</option>
            <option>Swim</option>
            <option>Weight lift</option>
            <option>Bike</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>How did it go?</Form.Label>
          <Form.Select
            onChange={handleChange}
            value={form.difficulty}
            name="difficulty"
          >
            <option>Choose...</option>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </Form.Select>
        </Form.Group>
      </Row>

      <Row>
        <Form.Group as={Col} className="mb-3">
          <Form.Label>Duration, min</Form.Label>
          <Form.Control
            placeholder="Minutes"
            type="number"
            onChange={handleChange}
            value={form.duration}
            name="duration"
          />
        </Form.Group>

        <Form.Group as={Col} className="mb-3">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            onChange={handleChange}
            value={form.date}
            name="date"
          />
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default NewExerciseForm;
