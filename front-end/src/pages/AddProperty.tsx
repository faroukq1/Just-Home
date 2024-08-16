import { Form } from "react-router-dom";
import { CreateListingBar, PropertyForm } from "../component";

const AddProperty = () => {
  return (
    <div className="min-h-screen p-4 align-element">
      <CreateListingBar />
      <Form>
        <div className="carousel rounded-box h-[75vh] w-full mt-8">
          <PropertyForm />
        </div>
      </Form>
    </div>
  );
};

export default AddProperty;
