let data = {
  databox: [
    {
      title: "Likes",
      value: "10.1k",
    },
    {
      title: "Posts",
      value: "72",
    },
    {
      title: "Comments",
      value: "1.3k",
    },
    {
      title: "Shares",
      value: "566",
    },
  ],

  linechart: {
    labels: ["Jun", "Jul", "Aug", "Sept", "Oct", "Nov"],
    datasets: [
      {
        id: 1,
        label: "Revenue 2024",
        data: [15200, 17000, 16000, 16900, 19000, 21000, 25000],
      },
      {
        id: 2,
        label: "Revenue 2023",
        data: [12000, 13000, 14000, 16000, 16500, 17000, 17500],
      },
    ],
  },

  barchart: {
    labels: ["Android", "IOS", "Linux", "Windows"],
    datasets: [
      {
        data: [1255, 700, 400, 1100],
      },
    ],
  },

  piechart: {
    labels: ["18-24", "25-34", "35-44", "45-54", "55+"],
    datasets: [
      {
        data: [300, 500, 200, 150, 100],
      },
    ],
  },
};

export default data;
