
import './ButtonStyle.css'
export default function ButtonEle({ BtnType = "button", BtnText = "Click Me", BtnStyle = "" }) {
  return (
    <div className="btn">
      <button type={BtnType} className={BtnStyle}>
        {BtnText}
      </button>
    </div>
  );
}
