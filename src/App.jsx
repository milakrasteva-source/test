import { ActionButton } from "./ActionButton";

function DemoForm() {
  async function handleSubmit(e) {
    e.preventDefault();
    await new Promise((r) => setTimeout(r, 2000));
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <input
        name="email"
        type="email"
        placeholder="Enter email"
        style={{ padding: "8px 12px", borderRadius: 6, border: "1px solid #ccc" }}
      />
      <ActionButton type="submit" pendingLabel="Submitting...">
        Submit
      </ActionButton>
    </form>
  );
}

export default function App() {
  return (
    <div style={{ maxWidth: 400, margin: "60px auto", fontFamily: "sans-serif" }}>
      <h1 style={{ marginBottom: 24 }}>ActionButton Demo</h1>
      <DemoForm />
    </div>
  );
}
