import Image from "next/image";

const gameData = {
  title: "Fortnite",
  description:
    "Battle royale game with building mechanicsFortnite is a free-to-play Battle Royale game with numerous game modes for every type of game player.",
  longDescription:
    "Fortnite is a free-to-play Battle Royale game with numerous game modes for every type of game player. Watch a concert, build an island or fight.Fortnite is a free-to-play Battle Royale game with numerous game modes for every type of game player. Watch a concert, build an island or fight.Fortnite is a free-to-play Battle Royale game with numerous game modes for every type of game player. Watch a concert, build an island or fight.Fortnite is a free-to-play Battle Royale game with numerous game modes for every type of game player. Watch a concert, build an island or fight.Fortnite is a free-to-play Battle Royale game with numerous game modes for every type of game player. Watch a concert, build an island or fight.Fortnite is a free-to-play Battle Royale game with numerous game modes for every type of game player. Watch a concert, build an island or fight.Fortnite is a free-to-play Battle Royale game with numerous game modes for every type of game player. Watch a concert, build an island or fight.",
  imgSrc:
    "https://store-images.s-microsoft.com/image/apps.29094.70702278257994163.1152c6f1-f586-40eb-a61e-0f8bad1ee621.314f1cc2-cc6c-4ff5-a64c-8de57bb88084?q=90&w=177&h=177",
  views: "1M",
  category: "Action",
};

const relatedGames = [
  {
    imgSrc:
      "https://store-images.s-microsoft.com/image/apps.60885.71371076658790719.f03e633a-c24b-4548-a357-e08218cd4846.0c69d6c3-b99d-4ebb-8881-58c756962388?q=90&w=177&h=177",
    title: "Apex Legends",
    views: "900K",
  },
  {
    imgSrc:
      "https://store-images.s-microsoft.com/image/apps.48955.67371239721334796.8bbda3d3-c8f4-4287-8b53-f9b733a25bc2.660c434b-c402-428d-b814-b6f109be8be6?q=90&w=177&h=177",
    title: "Call of Duty: Warzone",
    views: "850K",
  },
  {
    imgSrc:
      "https://store-images.s-microsoft.com/image/apps.22131.64374245401097180.1f6449c0-3d28-414b-b818-dea88d640877.c04e013e-5ba6-48f8-a42c-32a224f4beb0?q=90&w=177&h=177",
    title: "PUBG",
    views: "950K",
  },
  {
    imgSrc:
      "https://store-images.s-microsoft.com/image/apps.35283.68847167288522183.9fdea778-258f-40d6-9f9e-fab92915bc6d.98c2dd25-9180-49e5-bdd3-6bdb1d857889?q=90&w=177&h=265",
    title: "Tomb Raider",
    views: "700K",
  },
  {
    imgSrc:
      "https://store-images.s-microsoft.com/image/apps.19948.66939704732857862.bc0ad359-452c-446e-8027-d65c6b21a9e1.edde501d-efe2-4e74-98ea-6589d3ca8357?q=90&w=177&h=177",
    title: "Ghost of Tsushima",
    views: "1M",
  },
  {
    imgSrc:
      "https://store-images.s-microsoft.com/image/apps.59392.13795277965042335.eb5c2a6c-bebe-4b49-a4a6-abb56cb08828.53d25ee8-02f0-4d89-82a9-176c00aa6197?q=90&w=177&h=177",
    title: "Outer Worlds",
    views: "600K",
  },
  {
    imgSrc:
      "https://store-images.s-microsoft.com/image/apps.31359.13725572606452219.a4dffb94-6b02-4273-90f0-6a0ef6f40b4e.ce31003b-1b3d-4d4a-aec2-ba1a9f2c644e?q=90&w=177&h=177",
    title: "Far Cry 5",
    views: "750K",
  },
  {
    imgSrc:
      "https://store-images.s-microsoft.com/image/apps.35283.68847167288522183.9fdea778-258f-40d6-9f9e-fab92915bc6d.98c2dd25-9180-49e5-bdd3-6bdb1d857889?q=90&w=177&h=265",
    title: "Tomb Raider",
    views: "700K",
  },
  {
    imgSrc:
      "https://store-images.s-microsoft.com/image/apps.19948.66939704732857862.bc0ad359-452c-446e-8027-d65c6b21a9e1.edde501d-efe2-4e74-98ea-6589d3ca8357?q=90&w=177&h=177",
    title: "Ghost of Tsushima",
    views: "1M",
  },
  {
    imgSrc:
      "https://store-images.s-microsoft.com/image/apps.59392.13795277965042335.eb5c2a6c-bebe-4b49-a4a6-abb56cb08828.53d25ee8-02f0-4d89-82a9-176c00aa6197?q=90&w=177&h=177",
    title: "Outer Worlds",
    views: "600K",
  },
  {
    imgSrc:
      "https://store-images.s-microsoft.com/image/apps.31359.13725572606452219.a4dffb94-6b02-4273-90f0-6a0ef6f40b4e.ce31003b-1b3d-4d4a-aec2-ba1a9f2c644e?q=90&w=177&h=177",
    title: "Far Cry 5",
    views: "750K",
  },
  {
    imgSrc:
      "https://store-images.s-microsoft.com/image/apps.35283.68847167288522183.9fdea778-258f-40d6-9f9e-fab92915bc6d.98c2dd25-9180-49e5-bdd3-6bdb1d857889?q=90&w=177&h=265",
    title: "Tomb Raider",
    views: "700K",
  },
  {
    imgSrc:
      "https://store-images.s-microsoft.com/image/apps.19948.66939704732857862.bc0ad359-452c-446e-8027-d65c6b21a9e1.edde501d-efe2-4e74-98ea-6589d3ca8357?q=90&w=177&h=177",
    title: "Ghost of Tsushima",
    views: "1M",
  },
  {
    imgSrc:
      "https://store-images.s-microsoft.com/image/apps.59392.13795277965042335.eb5c2a6c-bebe-4b49-a4a6-abb56cb08828.53d25ee8-02f0-4d89-82a9-176c00aa6197?q=90&w=177&h=177",
    title: "Outer Worlds",
    views: "600K",
  },
  {
    imgSrc:
      "https://store-images.s-microsoft.com/image/apps.31359.13725572606452219.a4dffb94-6b02-4273-90f0-6a0ef6f40b4e.ce31003b-1b3d-4d4a-aec2-ba1a9f2c644e?q=90&w=177&h=177",
    title: "Far Cry 5",
    views: "750K",
  },
];

function Card({ imgSrc, title, views }) {
  return (
    <div className="flex-shrink-0 flex flex-col bg-[#1e2837] rounded-md p-4 shadow-2xl items-center w-32 md:w-40 overflow-visible shadow-gray-800">
      <Image
        src={imgSrc}
        width={100}
        height={100}
        alt={title}
        className="w-52 h-44 object-cover"
      />
      <p className="font-semibold text-lg text-center mt-2 uppercase truncate w-full">
        {title}
      </p>
      <p className="text-md font-bold">👁️ {views}</p>
    </div>
  );
}

export default function GamePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0f172a] text-white mt-5 md:mt-0">
      <main className="flex-grow">
        <section className="bg-[#1e2837] w-full py-12">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-5">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl font-bold mb-4">{gameData.title}</h1>
              <p className="text-lg mb-6">{gameData.description}</p>
              <p className="text-md mb-6">
                👁️ {gameData.views} | 🏷️ {gameData.category}
              </p>
              <button className="bg-[#f8700e] text-white font-bold py-2 px-4 rounded hover:bg-[#ff8c3a] transition duration-300">
                Play Now
              </button>
            </div>
            <div className="md:w-1/2">
              <Image
                src={gameData.imgSrc}
                alt={gameData.title}
                width={300}
                height={300}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-6">About the Game</h2>
          <p className="text-lg">{gameData.longDescription}</p>
        </section>

        <section className="bg-[#1e2837] py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6 text-[#1febc6]">
              🚀 Related Games
            </h2>
            <div className="flex gap-4 overflow-x-auto whitespace-nowrap p-2 hide-scrollbar">
              {relatedGames.map((game, index) => (
                <Card
                  key={index}
                  imgSrc={game.imgSrc}
                  title={game.title}
                  views={game.views}
                />
              ))}
            </div>
          </div>
        </section>
        <section className="bg-[#1e2837] py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6 text-[#1febc6]">
              ♥️ You Might Like
            </h2>
            <div className="flex gap-4 overflow-x-auto whitespace-nowrap p-2 hide-scrollbar">
              {relatedGames.map((game, index) => (
                <Card
                  key={index}
                  imgSrc={game.imgSrc}
                  title={game.title}
                  views={game.views}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
