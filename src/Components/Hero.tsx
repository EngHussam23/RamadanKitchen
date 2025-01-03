const Hero = () => {
  return (
    <div className="flex relative w-full">
      <div className="flex items-center justify-start w-full h-full absolute -bg--black bg-opacity-50 px-8">
        <p className="font-semibold text-3xl -text--white">
          أشهى وصفات لست الكل
        </p>
      </div>
      <div className="flex overflow-x-scroll overflow-y-hidden scrollbar">
        {FoodImages.map((image) => (
          <img
            src={image.url}
            alt={image.name}
            className="w-96 h-60 bg-center bg-contain"
          />
        ))}
      </div>
    </div>
  );
};

//test

const FoodImages = [
  {
    name: "مقلوبة",
    url: "https://www.ngmisr.com/wp-content/uploads/2023/02/1-195.jpg",
  },
  {
    name: "كبسة",
    url: "https://th.bing.com/th/id/OIP.HVbFK98IenazhJMRVcyFTgHaEK?rs=1&pid=ImgDetMain",
  },
  {
    name: "قدرة",
    url: "https://th.bing.com/th/id/R.9896bedbad7e1bec9aae6c6bd3468c68?rik=Qs5zfUnWyPo%2fMw&riu=http%3a%2f%2fcdn5.manalonline.com%2fupload%2f1874_1_788.jpg&ehk=VHwvP4Wfe%2bCNf9GhTC%2bxtUYryk%2bJ5NK1XWATux7SLtA%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    name: "فتوش",
    url: "https://th.bing.com/th/id/OIP.m9WQS57c6kG82vTuK8N4CQHaE4?rs=1&pid=ImgDetMain",
  },
  {
    name: "كفتة",
    url: "https://th.bing.com/th/id/OIP.CN56KKdQEt93-xaGMyPPGAHaFY?rs=1&pid=ImgDetMain",
  },
  {
    name: "مقلوبة",
    url: "https://www.ngmisr.com/wp-content/uploads/2023/02/1-195.jpg",
  },
  {
    name: "كبسة",
    url: "https://th.bing.com/th/id/OIP.HVbFK98IenazhJMRVcyFTgHaEK?rs=1&pid=ImgDetMain",
  },
  {
    name: "قدرة",
    url: "https://th.bing.com/th/id/R.9896bedbad7e1bec9aae6c6bd3468c68?rik=Qs5zfUnWyPo%2fMw&riu=http%3a%2f%2fcdn5.manalonline.com%2fupload%2f1874_1_788.jpg&ehk=VHwvP4Wfe%2bCNf9GhTC%2bxtUYryk%2bJ5NK1XWATux7SLtA%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    name: "فتوش",
    url: "https://th.bing.com/th/id/OIP.m9WQS57c6kG82vTuK8N4CQHaE4?rs=1&pid=ImgDetMain",
  },
  {
    name: "كفتة",
    url: "https://th.bing.com/th/id/OIP.CN56KKdQEt93-xaGMyPPGAHaFY?rs=1&pid=ImgDetMain",
  },
];

export default Hero;
