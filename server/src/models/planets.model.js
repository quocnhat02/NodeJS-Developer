const fs = require("fs");
const path = require("path");
const { parse } = require("csv-parse");

const planets = require("./planets.mongo");

function isHabitablePlanet(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
}

function loadPlanetsData() {
  return new Promise((resolve, rejects) => {
    fs.createReadStream(
      path.join(__dirname, "..", "..", "data", "kepler_data.csv")
    )
      .pipe(
        parse({
          comment: "#",
          columns: true,
        })
      )
      .on("data", async (data) => {
        if (isHabitablePlanet(data)) {
          // TODO: Replace below create with insert + update = upsert
          await savePlanet(data);
        }
      })
      .on("error", (error) => {
        console.log(error);
        rejects(error);
      })
      .on("end", async () => {
        const countPlanetsFound = (await getAllPlanets()).length;

        console.log(`${countPlanetsFound} habitable planets found! `);

        resolve();
      });
  });
}

async function getAllPlanets() {
  return await planets.find({});
}

async function savePlanet(planet) {
  try {
    await planets.updateOne(
      {
        keplerName: planet.kepler_name,
      },
      {
        $set: { keplerName: planet.kepler_name },
      },
      {
        upsert: true,
        new: true,
        // setDefaultsOnInsert: true,
      }
    );

    // await planets.create({ keplerName: planet.kepler_name });
  } catch (error) {
    console.error(`Could not save planet ${error}`);
  }
}

module.exports = {
  loadPlanetsData,
  getAllPlanets,
};
