import { useFormStatus } from "react-dom";

function App() {

  async function handleSubmit(formData) {
    
    await new Promise((res) => setTimeout(res, 2000));
    console.log("submit");
  }

  function CustomerForm() {
    const { pending } = useFormStatus();
    console.log(pending);

    return (
      <>
        <input type="text" name="username" placeholder="Enter Name" />
        <br />
        <br />
        <input type="password" name="password" placeholder="Enter Password" />
        <br />
        <br /> 
        <button disabled={pending}>{pending ? "Submitting..." : "Submit"}</button>
      </>
    );
  }

  return (
    <div>
      <h1>useFormStatus Hook in React 19</h1>

      <form action={handleSubmit}>
        <CustomerForm />
      </form>
    </div>
  );
}

export default App;
