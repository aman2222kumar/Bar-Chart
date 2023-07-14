const data = [
  {
    name: "a",
    population: 20,
  },
  {
    name: "b",
    population: 40,
  },
  {
    name: "c",
    population: 60,
  },
  {
    name: "d",
    population: 100,
  },
];

function Chart() {
  return (
    <>
      <div className="chartContainer">
        {data.reverse().map((item, index) => {
          return (
            <>
              <div key={index}>
                <div
                  className="one"
                  style={{
                    width: "5rem",
                    color: "white",
                    height: item.population,
                    backgroundColor: "black",
                  }}
                >
                  <span className="text_bro"> {item.name}</span>
                </div>
                <p className="text_population"> {item.population}%</p>
              </div>
            </>
          );
        })}
        <p className="percentage">population in percentage growth</p>
        <p className="border"></p>
      </div>
    </>
  );
}

export default Chart;
