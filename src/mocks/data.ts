import {Station} from "../types.ts";

export const generateRandomStationId = () => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';

  const randomChar = (source: string) => source[Math.floor(Math.random() * source.length)];

  const randomLetter1 = randomChar(letters);
  const randomLetter2 = randomChar(letters);
  const randomNumber = Array.from({ length: 6 }, () => randomChar(numbers)).join('');

  return `${randomLetter1}${randomLetter2}${randomNumber}`;
};

export const generateStations = () => {
  return Array.from({ length: 60000 }, () => {
    const randomStationId = generateRandomStationId();

    const newStation: Station = {
      stationId: randomStationId,
      stationName: `충전소 ${randomStationId}`,
      latitude: 37 + 0.25 + 9999 * Math.random() * 0.00005,
      longitude: 127 - 0.25 + 9999 * Math.random() * 0.00005,
    };

    return newStation;
  });
};
