import '../styles/input.css';

export default function SideBarIcon({ icon, text = '' }) {
  return (
        <div className="sidebar-icon group">
          {icon}

        <span className="sidebar-tooltip group-hover:scale-100">
          {text}
        </span>
        </div>);
}
