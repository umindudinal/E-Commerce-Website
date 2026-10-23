import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import "./Toast.css";
import { CheckCircle2, AlertCircle, Info, X } from "lucide-react";

const Toast = () => {
  const { toast } = useContext(ShopContext);

  if (!toast) return null;

  const renderIcon = () => {
    switch (toast.type) {
      case "error":
        return <AlertCircle className="toast_icon error" size={20} />;
      case "info":
        return <Info className="toast_icon info" size={20} />;
      case "success":
      default:
        return <CheckCircle2 className="toast_icon success" size={20} />;
    }
  };

  return (
    <div className={`toast_container ${toast.type || "success"}`}>
      <div className="toast_content">
        {renderIcon()}
        <span className="toast_message">{toast.message}</span>
      </div>
    </div>
  );
};

export default Toast;
