import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getLinksSve(key) {
  const myLinks = await AsyncStorage.getItem(key);
  let linkSaves = JSON.parse(myLinks) || [];
  return linkSaves;
}

export async function saveLink(key, newLink) {
  let linksStored = await getLinksSve(key);

  const hasLinks = linksStored.some((link) => link.id === newLink.id);
  if (hasLinks) {
    console.log("Esse link já existe  na lista");
    return;
  }
  linksStored.push(newLink);
  await AsyncStorage.setItem(key, JSON.stringify(linksStored));
  console.log("Link salvo com sucesso");
}

export async function deleteLink(link, id) {
  let myLinks = link.filter((item) => {
    return item.id !== id;
  });
  await AsyncStorage.setItem("links", JSON.stringify(myLinks));
  return myLinks;
}
