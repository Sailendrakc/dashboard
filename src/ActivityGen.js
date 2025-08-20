/*
This file generates recent activity data so it can be displayed in the UI.
*/

import { faker } from "@faker-js/faker";

export default function generatePetPosts(count) {
  const posts = [];
  const petTypes = [
    "dog",
    "cat",
    "bird",
    "ferret",
    "rabbit",
    "hamster",
    "fish",
    "guinea pig",
    "lizard",
    "turtle",
  ];
  const emotions = [
    "adorable",
    "hilarious",
    "annoying",
    "heartwarming",
    "chaotic",
  ];

  for (let i = 0; i < count; i++) {
    const petType = faker.helpers.arrayElement(petTypes);
    const petName = faker.person.firstName();
    const emotion = faker.helpers.arrayElement(emotions);

    posts.push({
      userID: faker.internet.username(),
      image: faker.image.avatar(),
      title: `My ${petType} ${faker.helpers.arrayElement([
        "did something",
        "is being",
        "just",
      ])} ${emotion}`,
      post: `My ${petType}, ${petName}, ${faker.lorem.sentences(
        2
      )}. ${faker.lorem.sentence()}`,
    });
  }

  return posts;
}
