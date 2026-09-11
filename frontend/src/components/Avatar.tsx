type AvatarProps = {
  name: string;
};

function Avatar({ name }: AvatarProps) {
  return <div className="avatar">{name.charAt(0).toUpperCase()}</div>;
}

export default Avatar;
