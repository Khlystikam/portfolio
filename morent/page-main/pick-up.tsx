import MultiSelect from "./MultiSelect";
import './pick-up.css';


const MainPickUp = () => {

  const selectData = [
    {
      name: "Locations",
      id: "1",
      labelName: "Location",
      options: [
        { value: "new-york", label: "New York" },
        { value: "los-angeles", label: "Los Angeles" },
        { value: "chicago", label: "Chicago" },
        { value: "new-york", label: "New York" },
        { value: "los-angeles", label: "Los Angeles" },
        { value: "chicago", label: "Chicago" },
      ],
    },
    {
      name: "Date",
      id: "2",
      labelName: "Date",
      options: [
        { value: "april", label: "April" },
        { value: "may", label: "May" },
        { value: "june", label: "June" },
        { value: "july", label: "July" },
        { value: "august", label: "August" },
        { value: "september", label: "September" },
        { value: "october", label: "October" },
        { value: "november", label: "November" },
        { value: "december", label: "December" }
      ],
    },
    {
      name: "Time",
      id: "3",
      labelName: "Time",
      options: [
        { value: "morning", label: "Morning" },
        { value: "afternoon", label: "Afternoon" },
        { value: "evening", label: "Evening" },
      ],
    },
  ];

  return (
    <div className='main-pick-up'>
        <div className="box-pick-up pick-up-1">
          <div className="radio-box">
            <label className="radio-label">
              <input
                type="radio"
                name="option"
                value="pick-up"
                className="radio-input"
              />
              Pick - Up
            </label>
          </div>

          <MultiSelect data={selectData} />

        </div>
        <button className="swipe-pick-up">
          <img src="/assets/dev-site/morent/swap-icon.png" alt="swap-icon" />
        </button>
        <div className="box-pick-up pick-up-2">
          <div className="radio-box">
            <label className="radio-label">
              <input
                type="radio"
                name="option"
                value="pick-up"
                className="radio-input"
              />
              Drop - Off
            </label>
          </div>

          <MultiSelect data={selectData} />

        </div>
    </div>
  );
};

export default MainPickUp;