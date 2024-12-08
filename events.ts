export interface Event {
  id?: number; // announcement id
  name: string;
  description?: string;
  img: string;
  startDate: string; // use Server time (UTC+8)
  endDate: string; // use Server time (UTC+8)
  color?: string; // defaults to automatically detecting the img color (prefer darker colors)
  url?: string; // link to an informative page about the event, always prefer https://wutheringwaves.kurogames.com/en/main/news
  showOnHome?: boolean; // whether we show it in the home dashboard
  isGlobal?: boolean;
  sourceName?: string; // the display name of the source URL
  reliability?: "Speculation" | "Official";
  group?: number; // events with the same group will overlap and merge if they are within 1 hour from each other's start & end dates, respectively
}

export const EVENT_GROUP = {
  PIONEER_PODCAST: 0,
  ILLUSIVE_REALM: 1,
  TOWER_OF_ADVERSITY: 2,
  DOUBLE_DROPS: 3,
  SEVEN_DAY_LOGIN: 4,
};

/**
 * Edit the values here.
 *
 * Make sure the `startDate` and `endDate` values are the game server's time (UTC+8) which are the SEA, Asia, HK server times.
 */
const rawEvents: { banners: Event[]; activities: Event[] } = {
  banners: [
    {
      name: "End of Lost Trail - Camellya Banner",
      img: "https://snipboard.io/4dcm9b.jpg",
      description: "Featured 4* are; Danjin, Yangyang, Aalto.",
      startDate: "2024-11-14 11:00",
      endDate: "2024-12-12 09:59:59",
      isGlobal: true,
      color: "#402821",
      url: "https://wutheringwaves.kurogames.com/en/main/news/detail/1607",
      reliability: "Official",
      group: 0,
    },
    {
      name: "Red Spring - Camellya Weapon Banner",
      img: "https://snipboard.io/U5wIMa.jpg",
      description:
        "Featured 4* are; Fusion Accretion, Commando of Conviction, Novaburst.",
      startDate: "2024-11-14 11:00",
      endDate: "2024-12-12 09:59:59",
      isGlobal: true,
      color: "#a84955",
      url: "https://wutheringwaves.kurogames.com/en/main/news/detail/1607",
      reliability: "Official",
      group: 1,
    },
    {
      name: "Featured Resonator - Yinlin & Xiangli Yao Rerun Banners",
      img: "https://snipboard.io/uyqe72.jpg",
      description: "Featured 4* are; Lumi, Baizhi, Yuanwu.",
      startDate: "2024-12-12 10:00",
      endDate: "2025-01-01 11:59:59",
      color: "#653e91",
      url: "https://wutheringwaves.kurogames.com/en/main/news/detail/1607",
      reliability: "Official",
      group: 0,
    },
    {
      name: "Featured Weapon - Yinlin & Xiangli Yao Rerun Weapon Banners",
      img: "https://snipboard.io/XZOYjk.jpg",
      description:
        "Featured 4* are; Waning Redshift, Jinzhou Keeper, Hollow Mirage.",
      startDate: "2024-12-12 10:00",
      endDate: "2025-01-01 11:59:59",
      color: "#272540",
      url: "https://wutheringwaves.kurogames.com/en/main/news/detail/1607",
      reliability: "Official",
      group: 1,
    },
  ],
  activities: [
    {
      name: "Somnium Labyrinth - Somnoire Adventure Event",
      img: "https://snipboard.io/NLukHF.jpg",
      description: `This event includes 3 sub-events: Dreamscape Odyssey, Rift Runner, and Nightmare Revisits. Rescue your Resonator companions from their Dreamscapes. Limited Rewards; 800*Astrite, 1*Somnoire Anchor, 1*Projection: Somniore Anchor, 4*Hearty Supper, Forgery Premium Supply.`,
      startDate: "2024-11-14 11:00",
      endDate: "2025-01-01 03:59:59",
      isGlobal: true,
      url: "https://wutheringwaves.kurogames.com/en/main/news/detail/1607",
      color: "#5232a2",
      reliability: "Official",
    },
    {
      name: "Depths of Illusive Realm - Phantasm Amass",
      img: "https://snipboard.io/2EorCx.jpg",
      description: `New Content "Phantasm Amass" now available! Step into surreal, ever-shifting dreamscapes, where new maps await exploration and formidable enemies lurk in the shadows, and uncover the secrets that lie within! Rewards; 1000*Astrite, Phantom: Inferno Rider, Malleable Elite Class Echoes, Premium Sealed Tube, Weapon Projections.`,
      startDate: "2024-11-14 11:00",
      endDate: "2025-01-01 03:59:59",
      isGlobal: true,
      url: "https://wutheringwaves.kurogames.com/en/main/news/detail/1607",
      color: "#545f5a",
      reliability: "Official",
    },
    {
      name: "Beyond the Waves - Featured Exploration Event",
      img: "https://snipboard.io/2EorCx.jpg",
      description: `During the event, complete event objectives once per day to obtain a set number of Adventure Logs. Each Adventure Log can be exchanged for a random Adventure Package.`,
      startDate: "2024-11-21 10:00",
      endDate: "2024-12-05 03:59:59",
      url: "https://wutheringwaves.kurogames.com/en/main/news/detail/1607",
      color: "#815b42",
      reliability: "Official",
    },
    {
      name: "Tactical Simulacra II - Featured Combat Event",
      img: "https://snipboard.io/1puvlO.jpg",
      description: `In Tactical Simulacra II, challenge waves of powerful enemies by using special buffs across different simulation domains.`,
      startDate: "2024-12-19 10:00",
      endDate: "2025-01-01 03:59:59",
      url: "https://wutheringwaves.kurogames.com/en/main/news/detail/1607",
      color: "#84493b",
      reliability: "Official",
    },
    {
      name: "Ragunna Sales Blitz! - Pioneer Association Event",
      img: "https://snipboard.io/CfLJT9.jpg",
      description: `Alannah will be releasing a new investigation quest each day. Complete the surveys to earn corresponding rewards and have a glimpse into the world of Rinascita!`,
      startDate: "2024-12-12 10:00",
      endDate: "2025-01-01 03:59:59",
      url: "https://wutheringwaves.kurogames.com/en/main/news/detail/1607",
      color: "#3b477d",
      reliability: "Official",
    },
    {
      name: "Pincer Maneuver Warriors I - Recurring Combat Event",
      img: "https://snipboard.io/tzHkDU.jpg",
      description: `In Pincer Maneuver Warriors, challenge waves of powerful enemies by controlling two teams with special buffs across two separate simulated battlefields.`,
      startDate: "2024-11-14 11:00",
      endDate: "2024-12-12 09:59:59",
      isGlobal: true,
      url: "https://wutheringwaves.kurogames.com/en/main/news/detail/1607",
      color: "#768c9a",
      reliability: "Official",
    },
    {
      name: "Pincer Maneuver Warriors II - Recurring Combat Event",
      img: "https://snipboard.io/tzHkDU.jpg",
      description: `In Pincer Maneuver Warriors, challenge waves of powerful enemies by controlling two teams with special buffs across two separate simulated battlefields.`,
      startDate: "2024-12-12 10:00",
      endDate: "2025-01-01 11:59:59",
      url: "https://wutheringwaves.kurogames.com/en/main/news/detail/1607",
      color: "#456073",
      reliability: "Official",
    },
    {
      name: "Chord Cleansing: Echo Double Drop Event",
      img: "https://snipboard.io/zu2vQP.jpg",
      description: `Consume Waveplates to claim double rewards when completing the "Tacet Suppression" challenge.`,
      startDate: "2024-12-05 04:00",
      endDate: "2024-12-12 03:59",
      url: "https://wutheringwaves.kurogames.com/en/main/news/detail/1607",
      reliability: "Official",
      group: EVENT_GROUP.DOUBLE_DROPS,
      color: "#3e3439",
    },
    {
      name: "Bountiful Crescendo: Material Double Drop Event",
      img: "https://snipboard.io/BwOPmb.jpg",
      description: `Consume Waveplates to claim double rewards when completing a "Simulation" or "Forgery Challenge".`,
      startDate: "2024-12-25 04:00",
      endDate: "2025-01-01 03:59",
      url: "https://wutheringwaves.kurogames.com/en/main/news/detail/1607",
      reliability: "Official",
      group: EVENT_GROUP.DOUBLE_DROPS,
      color: "#4f4a49",
    },
    {
      name: "Gifts of Fleeting Dreams: 7-day Sign-in Event",
      img: "https://snipboard.io/cLjW6G.jpg",
      description:
        "Log into the game and check into claim rewards: 5*Radiant Tide and 5*Lustrous Tide.",
      startDate: "2024-11-14 11:00",
      endDate: "2025-01-01 03:59:59",
      isGlobal: true,
      url: "https://wutheringwaves.kurogames.com/en/main/news/detail/1607",
      color: "#cb7796",
      reliability: "Official",
      group: EVENT_GROUP.SEVEN_DAY_LOGIN,
    },
    {
      name: "Tower of Adversity: Hazard Revisited",
      img: "https://snipboard.io/NnA3YO.jpg",
      startDate: "2024-11-11 04:00",
      endDate: "2024-11-25 04:00",
      color: "#18235f",
      reliability: "Official",
      group: EVENT_GROUP.TOWER_OF_ADVERSITY,
    },
    {
      name: "Tower of Adversity: Hazard Revisited",
      img: "https://snipboard.io/NnA3YO.jpg",
      startDate: "2024-11-25 04:00",
      endDate: "2024-12-09 04:00",
      color: "#18235f",
      reliability: "Official",
      group: EVENT_GROUP.TOWER_OF_ADVERSITY,
    },
    {
      name: "Tower of Adversity: Hazard Revisited",
      img: "https://snipboard.io/NnA3YO.jpg",
      startDate: "2024-12-09 04:00",
      endDate: "2024-12-23 04:00",
      color: "#18235f",
      reliability: "Official",
      group: EVENT_GROUP.TOWER_OF_ADVERSITY,
    },
    {
      name: "Pioneer Podcast",
      img: "https://snipboard.io/2Z7Ncr.jpg",
      description: `You can complete tasks in Pioneer Podcast and accumulate Podcast EXP. Level up your Podcast to get rich rewards. Unlock "Insider Channel" or "Connoisseur Channel" and level up your Podcast to win extra rewards including Astrite*680, a 4-star Golden Eternal Series Weapon of Choice, Radiant Tide, and more! Unlocking "Connoisseur Channel" grants an instant advance of Podcast level by 10, with the period-limited Sigil "Sound of Tides", Lustrous Tide*3, and Gilded Ginkgo (can be used to improve the Syntonization Rank of a 4-star Golden Eternal Series Weapon).`,
      startDate: "2024-11-14 11:00",
      endDate: "2025-01-01 03:59:59",
      isGlobal: true,
      url: "https://wutheringwaves.kurogames.com/en/main/news/detail/1607",
      reliability: "Official",
      group: EVENT_GROUP.PIONEER_PODCAST,
      color: "#645676",
    },
  ],
};

export const events = {
  banners: rawEvents.banners,
  activities: rawEvents.activities,
};
