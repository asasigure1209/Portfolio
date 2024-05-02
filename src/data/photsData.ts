const photosData = {
  count: 3,
  contents: [
    {
      id: 1,
      fileName: "moist.jpg",
      alt: "苔テラリウム",
      width: 6032,
      height: 4032,
    },
    {
      id: 2,
      fileName: "moon.jpg",
      alt: "満月",
      width: 1671,
      height: 1670,
    },
    {
      id: 3,
      fileName: "sky.jpg",
      alt: "光芒",
      width: 3868,
      height: 5786,
    },
    {
      id: 4,
      fileName: "hydrangea.jpg",
      alt: "紫陽花",
      width: 6032,
      height: 4032,
    },
    {
      id: 5,
      fileName: "shiraito_falls.jpg",
      alt: "熊本県にある白糸の滝",
      width: 4032,
      height: 6032,
    },
    {
      id: 6,
      fileName: "tadoyama.jpg",
      alt: "多度山からの景色",
      width: 6032,
      height: 4032,
    },
    {
      id: 7,
      fileName: "gifu_castle.jpg",
      alt: "岐阜城",
      width: 6032,
      height: 4032,
    },
    {
      id: 8,
      fileName: "nagara_river.jpg",
      alt: "長良川",
      width: 6032,
      height: 4032,
    },
    {
      id: 9,
      fileName: "yokohama_ferris_wheel.jpg",
      alt: "横浜の観覧車",
      width: 6032,
      height: 3376,
    },
    {
      id: 10,
      fileName: "five-story_pagoda.jpg",
      alt: "五重塔",
      width: 4692,
      height: 3137,
    },
    {
      id: 11,
      fileName: "nagano_bridge.jpg",
      alt: "長野のどこかにある橋",
      width: 6032,
      height: 4032,
    },
    {
      id: 12,
      fileName: "ogute_starry_sky.jpg",
      alt: "長野のおおぐて湖畔からみえる星空",
      width: 3790,
      height: 5670,
    },
    {
      id: 13,
      fileName: "ogute_lakeside.jpg",
      alt: "長野のおおぐて湖畔",
      width: 4032,
      height: 6032,
    },
    {
      id: 14,
      fileName: "ogute_hammock.jpg",
      alt: "おおぐて湖畔のハンモック",
      width: 6032,
      height: 4032,
    },
    {
      id: 15,
      fileName: "felis_manul _pallas.jpg",
      alt: "マヌルネコ",
      width: 6032,
      height: 4032,
    },
    {
      id: 16,
      fileName: "yaebenishidare_zakura.jpg",
      alt: "八重紅枝垂れ桜",
      width: 3780,
      height: 3780,
    },
    {
      id: 17,
      fileName: "someiyoshino.jpg",
      alt: "ソメイヨシノ",
      width: 6032,
      height: 4032,
    },
    {
      id: 18,
      fileName: "yamazakura.jpg",
      alt: "ソメイヨシノ",
      width: 6032,
      height: 4032,
    },
  ],
};

export const getPhotoById = (id: number) => {
  return photosData.contents.find((photo) => photo.id === id);
};

export default photosData;
