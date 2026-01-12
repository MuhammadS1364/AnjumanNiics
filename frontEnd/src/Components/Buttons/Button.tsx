
import './ButtonStyle.css'


interface ButtonEle {
  BtnType? : 'submit' | 'button' | 'reset',
  BtnText : string,
  BtnStyle?  : 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link',
  className ? : string
}


export default function ButtonEle({ 
  BtnType = "button", 
  BtnText = "Click Me", 
  BtnStyle = "primary",
  className = "" 
}: ButtonEleProps) {
  return (
    <div className="btn">
      <button type ={BtnType} className={BtnStyle}>
        {BtnText}
      </button>
    </div>
  );
}
