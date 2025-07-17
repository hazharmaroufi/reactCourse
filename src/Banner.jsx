function Banner({ title, desc, age, os }) {
  return (
    <div>
      <hr />
      <h1>{title}</h1>
      <p>{desc}</p>
      <p>{age} years old</p>
      <span>using {os}</span>
      <hr />
    </div>
  );
}

export default Banner;
