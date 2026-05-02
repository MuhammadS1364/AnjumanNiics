
import React from 'react';

interface MessageProps {
  type: 'success' | 'error' | 'info' | 'warning';
  text: string;
  onClose?: () => void;
}

const Message = ({ type, text, onClose }: MessageProps) => {
  // Define colors based on the message type
  const styles = {
    success: "bg-green-50 border-green-500 text-green-800",
    error: "bg-red-50 border-red-500 text-red-800",
    info: "bg-blue-50 border-blue-500 text-blue-800",
    warning: "bg-yellow-50 border-yellow-500 text-yellow-800",
  };

  const icons = {
    success: "✅",
    error: "❌",
    info: "ℹ️",
    warning: "⚠️",
  };

  if (!text) return null;

  return (
    <div className={`flex items-center justify-between p-4 mb-4 border-l-4 rounded-r-lg shadow-md animate-in fade-in slide-in-from-top-4 duration-300 ${styles[type]}`}>
      <div className="flex items-center gap-3">
        <span className="text-xl">{icons[type]}</span>
        <p className="text-sm font-semibold">{text}</p>
      </div>
      
      {onClose && (
        <button 
          onClick={onClose}
          className="ml-4 text-gray-500 hover:text-gray-800 transition-colors"
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default Message;


// How to use The Message components
// import { useState } from 'react';
// import Message from './Message';

// export default function AddNewUser() {
//   const [status, setStatus] = useState({ type: '', msg: '' });

//   const handleSave = async () => {
//     // Example logic
//     const success = true; 
//     if (success) {
//       setStatus({ type: 'success', msg: 'User created successfully!' });
//     } else {
//       setStatus({ type: 'error', msg: 'Failed to create user.' });
//     }
//   };

//   return (
//     <div>
//       {status.msg && (
//         <Message 
//           type={status.type} 
//           text={status.msg} 
//           onClose={() => setStatus({ type: '', msg: '' })} 
//         />
//       )}
//       {/* Rest of your form */}
//     </div>
//   );
// }
