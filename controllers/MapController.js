const Map = require("../models/Map")

const createMap = async (req, res) => {
  const { promptOne, promptTwo, promptThree, promptFour, promptFive } = req.body
  const newMap = new Map({
    promptOne,
    promptTwo,
    promptThree,
    promptFour,
    promptFive,
  })
  const savedMap = await newMap.save()
  res.send(savedMap)
}

const getMaps = async (req, res) => {
  let maps = await Map.find()
  res.send(maps)
}

const deleteMap = async (req, res) => {
  const mapId = req.params.id
  const deletedMap = await Map.findByIdAndDelete(mapId)
  res.send(deletedMap)
}
