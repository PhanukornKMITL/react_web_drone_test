import Toolbar from "react-big-calendar/lib/Toolbar";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../../css/Calendar.css";
import moment from "moment";
import "moment/locale/th";

function CustomToolbar({ label, onNavigate, onView, view }) {
  const [month, year] = label.split(" ");
  const labelShow = `${month} ${parseInt(year) + 543}`;
  console.log(view);
  return (
    <div className="rbc-toolbar">
      <div className="rbc-btn-group">
        <button
          type="button"
          className="rbc-btn-nav"
          onClick={() => onNavigate("PREV")}
        >
          <FaChevronLeft />
        </button>
        <button
          type="button"
          className="rbc-btn-nav"
          onClick={() => onNavigate("NEXT")}
        >
          <FaChevronRight />
        </button>
      </div>
      <span className="rbc-btn-group">
        <button
          type="button"
          className="rbc-btn rbc-btn-primary rbc-btn-today"
          onClick={() => onView("day")}
        >
          วันนี้
        </button>
      </span>
      <span className="rbc-toolbar-label">
        {/* {view == 'month' ? (
        <span className="rbc-toolbar-label">{labelShow}</span>
      ) : (
        <span className="rbc-toolbar-label">{label}</span>
      )} */}
        {label}
      </span>
      <span className="rbc-btn-group">
        <button
          type="button"
          className="rbc-btn rbc-btn-primary rbc-btn-today"
          onClick={() => onView("month")}
        >
          เดือน
        </button>
      </span>
      <span className="rbc-btn-group">
        <button
          type="button"
          className="rbc-btn rbc-btn-primary rbc-btn-today"
          onClick={() => onView("agenda")}
        >
          รายการ
        </button>
      </span>
    </div>
  );
}
export default CustomToolbar;
