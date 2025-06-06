import AdminSidebar from "../components/AdminSidebar";
function LayoutWithSidebar({ children }) {
    return (
      <div className="admin-layout">
        <AdminSidebar />
        <div className="admin-main">{children}</div>
           
      </div>
    );
  }
  export default LayoutWithSidebar;