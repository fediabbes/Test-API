async function get() {
  const response = await fetch(
    "https://www.breakingbadapi.com/api/characters/"
  );
  const data = await response.json();
  console.log(data);

  const details = () => {
    data.map((el) => el.name);
  };

  document.querySelector(
    "#app h1"
  ).innerHTML = `<h1> Action name : ${data[0].name}  </h1>`;
  document.querySelector(
    "#app h2"
  ).innerHTML = `<h2> Actor birthday :  ${data[0].birthday} </h2>`;
  document.querySelector(
    "#app h3"
  ).innerHTML = `<h3>Actor Nickname :  ${data[0].nickname} </h3>`;
  document.querySelector(
    "#app p"
  ).innerHTML = `<p> Actor Occupation : ${data[0].occupation} </p>`;
  document.querySelector("#app img").src = data[0].img;

  document.querySelector("#actor").innerHTML = `
  <select>
  ${data.map((el) => `<option> ${el.name} </option>`)}
  </select>
  `;
}
get();

// ("https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg");
