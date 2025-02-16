const Button = ({ text, text2, text3, img, img2, img3 }) => {
  return (
    <button>
      <img src={img} alt="" />
      <img src={img2} alt="" />
      <img src={img3} alt="" />
      {text}
      {text2}
      {text3}
    </button>
  );
};

export default Button;
