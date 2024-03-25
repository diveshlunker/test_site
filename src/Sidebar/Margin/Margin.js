import Input from "../../components/Input";
import "./Margin.css";

const Margin = ({ handleChange }) => {
  return (
    <>
      <div className="ml">
        <h3 className="sidebar-title margin-title">Additional Margin</h3>

        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleChange={handleChange}
          value={10}
          title="Upto 10%"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={20}
          title="10% - 20%"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={30}
          title="21% - 30%"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={40}
          title="31% - 40%"
          name="test2"
        />

      <Input
          handleChange={handleChange}
          value={50}
          title="41% - 50%"
          name="test2"
        />

      <Input
          handleChange={handleChange}
          value={100}
          title="Over 50%"
          name="test2"
        />
      </div>
    </>
  );
};

export default Margin;