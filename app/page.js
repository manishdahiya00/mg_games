import Image from "next/image";
import Link from "next/link";

const trendingGames = [
  {
    imgSrc:
      "https://store-images.s-microsoft.com/image/apps.29094.70702278257994163.1152c6f1-f586-40eb-a61e-0f8bad1ee621.314f1cc2-cc6c-4ff5-a64c-8de57bb88084?q=90&w=177&h=177",
    title: "Fortnite",
    views: "1M",
  },
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
      "https://store-images.s-microsoft.com/image/apps.15374.14581193029730121.b25767a3-4121-4f3d-b5f2-9bda3c99403a.5554617d-03b2-4130-9070-1d6b95a6e087?q=90&w=177&h=177",
    title: "Minecraft",
    views: "1.2M",
  },
  {
    imgSrc:
      "https://store-images.s-microsoft.com/image/apps.30063.13589262686196899.16e3418a-cbf2-4748-9724-1c9dc9b7a0b9.672da915-9117-4230-960d-4f59f3d7beb5?q=90&w=177&h=265",
    title: "Among Us",
    views: "750K",
  },
  {
    imgSrc:
      "https://store-images.s-microsoft.com/image/apps.22131.64374245401097180.1f6449c0-3d28-414b-b818-dea88d640877.c04e013e-5ba6-48f8-a42c-32a224f4beb0?q=90&w=177&h=177",
    title: "PUBG",
    views: "950K",
  },
  {
    imgSrc:
      "https://store-images.s-microsoft.com/image/apps.18996.14127010465288187.f9de4a96-0ee4-4da3-bf66-d4132b38c599.caf661a7-e0b3-492d-b91b-63627e47283e?q=90&w=177&h=265",
    title: "League of Legends",
    views: "1.1M",
  },
];

const actionGames = [
  {
    imgSrc:
      "https://store-images.s-microsoft.com/image/apps.32034.68565266983380288.0f5ef871-88c0-45f7-b108-6aacbc041fcf.9b094362-c51d-49e5-9e92-80710c585fca?q=90&w=177&h=265",
    title: "Grand Theft Auto V",
    views: "1.5M",
  },
  {
    imgSrc:
      "https://store-images.s-microsoft.com/image/apps.8213.67793643321489003.dd2aabd5-013d-491f-b85d-72606a4f8434.ce869d1c-3154-49f1-870a-a5aaca43e5a3?q=90&w=177&h=265",
    title: "Red Dead Redemption 2",
    views: "1.3M",
  },
  {
    imgSrc:
      "https://store-images.s-microsoft.com/image/apps.62863.14463384356800651.50cab168-f790-431f-bf01-205b6009bd3a.07ad6736-4e8b-4524-9ebc-01f585125007?q=90&w=177&h=265",
    title: "Doom Eternal",
    views: "600K",
  },
  {
    imgSrc:
      "https://store-images.s-microsoft.com/image/apps.47536.14112534955605876.394bbb5e-6d2d-4eba-b265-4ef123559dc7.48ff2f6d-c4c2-4a89-96ad-f223c8592708?q=90&w=177&h=265",
    title: "Devil May Cry 5",
    views: "500K",
  },
  {
    imgSrc:
      "https://store-images.s-microsoft.com/image/apps.34000.13561482405616842.ed00f880-38bd-444a-a2db-91a6ce6a257f.54550c1a-728d-42c3-8205-d92ed3d05246?q=90&w=177&h=177",
    title: "Assassin's Creed Valhalla",
    views: "750K",
  },
  {
    imgSrc:
      "https://store-images.s-microsoft.com/image/apps.7149.68691548057971577.135a701c-f8f3-48c5-ba10-136f7e1028e1.3853f888-2f43-49db-881c-082c230a641d?q=90&w=177&h=177",
    title: "Call of Duty: Modern Warfare",
    views: "900K",
  },
  {
    imgSrc:
      "https://store-images.s-microsoft.com/image/apps.6747.69038865179152125.ddcc0d78-9e3a-4110-94b3-6df63908553a.95db2b1e-f9fd-4049-b1af-cb6e4a144713?q=90&w=177&h=177",
    title: "Sekiro: Shadows Die Twice",
    views: "650K",
  },
  {
    imgSrc:
      "https://store-images.s-microsoft.com/image/apps.27599.14565724346796844.3ab9a45b-38d8-409e-af81-65964bdc0d23.36fc638b-f134-4762-bff5-f28f7c938c16?q=90&w=177&h=177",
    title: "The Last of Us Part II",
    views: "1M",
  },
  {
    imgSrc:
      "https://store-images.s-microsoft.com/image/apps.55315.14143814686075364.7e443c56-2382-4bea-8ceb-35638e527cd6.f9958fda-4df9-4ee5-99b7-2e107a826001?q=90&w=177&h=177",
    title: "Cyberpunk 2077",
    views: "1.2M",
  },
  {
    imgSrc:
      "https://store-images.s-microsoft.com/image/apps.3830.14105328782956010.49f773af-c1ba-43ab-a4d2-d9b330f79b47.a6dc6161-010f-47b3-b5c5-db0f5b3b7323?q=90&w=177&h=265",
    title: "Control",
    views: "400K",
  },
];

const adventureGames = [
  {
    imgSrc:
      "https://store-images.s-microsoft.com/image/apps.60885.71371076658790719.f03e633a-c24b-4548-a357-e08218cd4846.0c69d6c3-b99d-4ebb-8881-58c756962388?q=90&w=177&h=177",
    title: "The Legend of Zelda: Breath of the Wild",
    views: "1.8M",
  },
  {
    imgSrc:
      "https://store-images.s-microsoft.com/image/apps.42072.69152684294011426.e89994a9-a863-4e59-b83c-36234c99f3e2.3b92b46b-f883-46d1-8b3e-3252e269f049?q=90&w=177&h=177",
    title: "Horizon Zero Dawn",
    views: "1M",
  },
  {
    imgSrc:
      "https://store-images.s-microsoft.com/image/apps.20648.69531514236615003.534d4f71-03cb-4592-929a-b00a7de28b58.54adf0c7-6e6f-4d36-b639-503087c6fab2?q=90&w=177&h=177",
    title: "The Witcher 3: Wild Hunt",
    views: "1.5M",
  },
  {
    imgSrc:
      "https://store-images.s-microsoft.com/image/apps.31753.14258415317976239.42a5e400-dfc3-4205-b498-94397771c4cd.9fc474a9-7614-459a-82a4-8c1c6c2016f6?q=90&w=177&h=177",
    title: "Assassin's Creed Odyssey",
    views: "900K",
  },
  {
    imgSrc:
      "https://store-images.s-microsoft.com/image/apps.13543.14319062670722696.2eb1c579-1d55-4c08-a585-cef820004a67.84c864d3-e6c2-4965-8e80-e37e20313fe7?q=90&w=177&h=177",
    title: "Uncharted 4: A Thief's End",
    views: "800K",
  },
  {
    imgSrc:
      "https://store-images.s-microsoft.com/image/apps.22915.14147495830186481.1152921504739300181.28852159-31fe-43d6-977c-735b039f93f1?q=90&w=177&h=177",
    title: "Spider-Man",
    views: "1.2M",
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

const sportsGames = [
  { imgSrc: "/images/knife.png", title: "FIFA 24", views: "1.2M" },
  { imgSrc: "/images/knife.png", title: "NBA 2K24", views: "1M" },
  { imgSrc: "/images/knife.png", title: "Madden NFL 24", views: "800K" },
  { imgSrc: "/images/knife.png", title: "PGA Tour 2K23", views: "600K" },
  { imgSrc: "/images/knife.png", title: "WWE 2K24", views: "500K" },
  { imgSrc: "/images/knife.png", title: "Gran Turismo 7", views: "1M" },
  { imgSrc: "/images/knife.png", title: "F1 23", views: "700K" },
  { imgSrc: "/images/knife.png", title: "UFC 5", views: "650K" },
  { imgSrc: "/images/knife.png", title: "MLB The Show 24", views: "800K" },
  {
    imgSrc: "/images/knife.png",
    title: "Tony Hawk's Pro Skater 1+2",
    views: "500K",
  },
];

const drivingGames = [
  { imgSrc: "/images/knife.png", title: "Forza Horizon 5", views: "1.4M" },
  { imgSrc: "/images/knife.png", title: "Need for Speed Unbound", views: "1M" },
  { imgSrc: "/images/knife.png", title: "Gran Turismo 7", views: "1.2M" },
  { imgSrc: "/images/knife.png", title: "F1 23", views: "800K" },
  { imgSrc: "/images/knife.png", title: "Wreckfest", views: "700K" },
  {
    imgSrc: "/images/knife.png",
    title: "Assetto Corsa Competizione",
    views: "600K",
  },
  { imgSrc: "/images/knife.png", title: "Dirt 5", views: "650K" },
  { imgSrc: "/images/knife.png", title: "The Crew 2", views: "550K" },
  {
    imgSrc: "/images/knife.png",
    title: "Ridge Racer Unbounded",
    views: "500K",
  },
  {
    imgSrc: "/images/knife.png",
    title: "Burnout Paradise Remastered",
    views: "600K",
  },
];

const categories = [
  {
    name: "Trending",
    games: trendingGames,
    emoji: "🔥",
    color: "text-orange-500",
  },
  { name: "Action", games: actionGames, emoji: "🚀", color: "text-[#1febc6]" },
  {
    name: "Adventure",
    games: adventureGames,
    emoji: "⚔️",
    color: "text-[#1febc6]",
  },
  {
    name: "Driving",
    games: drivingGames,
    emoji: "🏎️",
    color: "text-[#1febc6]",
  },
  { name: "Sports", games: sportsGames, emoji: "🏏", color: "text-[#1febc6]" },
];

function CategorySection({ title, emoji, color, games }) {
  return (
    <div className="flex flex-col px-1 md:px-4 py-4">
      <div className="font-bold flex justify-between px-1">
        <p className={`text-xl md:text-2xl uppercase ${color}`}>
          {emoji} {title}
        </p>
        {title == "Trending" ? (
          ""
        ) : (
          <Link href="/" className="text-[#f8700e]">
            View More
          </Link>
        )}
      </div>
      <div className="flex gap-4 mt-5 overflow-x-auto whitespace-nowrap p-2 hide-scrollbar">
        {games.map((game, index) => (
          <Card
            key={index}
            imgSrc={game.imgSrc}
            title={game.title}
            views={game.views}
          />
        ))}
      </div>
    </div>
  );
}

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

export default function Page() {
  return (
    <div className="text-white mt-12 md:mt-0">
      {categories.map((category) => (
        <CategorySection
          key={category.name}
          title={category.name}
          emoji={category.emoji}
          color={category.color}
          games={category.games}
        />
      ))}
    </div>
  );
}
