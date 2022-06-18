import { useCallback, useState, useEffect } from "react";

const localCache = {};

const useBreedList = (animal) => {
  const [breeds, setBreeds] = useState([]);
  const [status, setStatus] = useState("unloaded");
  const requestBreeds = useCallback(async () => {
    setBreeds([]);
    setStatus("loading");

    const res = await fetch(
      `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
    );
    const json = await res.json();
    localCache[animal] = json.breeds || [];
    setBreeds(localCache[animal]);
    setStatus("loaded");
  }, [animal]);

  useEffect(() => {
    if (!animal) setBreeds([]);
    else if (localCache[animal]) setBreeds(localCache[animal]);
    else requestBreeds();
  }, [animal, requestBreeds]);

  return [breeds, status];
};

export default useBreedList;
