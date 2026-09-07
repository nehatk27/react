type BadgeProps = {
  label: string;
};

function Badge({ label }: BadgeProps) {
  return <span className="badge">{label}</span>;
}

export default Badge;
