import Image from "next/image";

const UserAvatar = ({ name, ...otherProps }) => {
  const imgUrl = `https://ui-avatars.com/api/?name=${name.replace(
    " ",
    "+"
  )}&rounded=true&size=512`;
  return (
    <Image src={imgUrl} width={24} height={24} alt={name} {...otherProps} />
  );
};

export default UserAvatar;
