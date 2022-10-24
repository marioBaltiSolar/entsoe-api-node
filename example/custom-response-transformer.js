import { parseStringPromise } from "xml2js";
import Entsoe, { BiddingZones } from "../src/index";

/**
 * Example using a custom response transformer.
 */

const client = Entsoe({ apiToken: process.env.API_TOKEN });

const customRt = async (xmlString) => {
  const json = parseStringPromise(xmlString);

  /* Do some magic to the response */

  return json;
};
client
  .dayAheadPrices({ biddingZone: BiddingZones.SW4 }, customRt)
  // eslint-disable-next-line no-console
  .then((res) => console.log(res));
